import React, { useState, useContext, createContext, useEffect } from "react";
import { auth } from "../FireBase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useLocation } from "react-router-dom";

interface UserDocData {
  schedule: string;
  subscribed?: boolean;
  subscriptionId?: string | null;
  subscriptionItemId?: string;
  subscriptionType?: string;
  cancelAt?: number;
}

interface AuthContextType {
  currentUser: firebase.User | null;
  createUserDoc: (email: string) => void;
  data: UserDocData | null;
  getDataEffect: boolean;
  getUserData: () => void;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  resetPassword: (resetPassword: string) => void;
  updateEmail: (email: string)=> void;
  updatePassword: (password: string) => void;
  setGetDataEffect: (status: boolean) => void
  signup: (email: string, password: string) => void;
  subscribed: boolean;
  subscriptionId: string | null;
  verify: () => void;
}

// const AuthContext = React.createContext()
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function useAuth() {
//   return useContext(AuthContext);
// }

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);
  const [data, setData] = useState<UserDocData | null>(null);
  const [getDataEffect, setGetDataEffect] = useState(false);

  const location = useLocation();

  const getCurrentTime = async () => {
    try {
      const response = await fetch("http://worldtimeapi.org/api/ip");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.unixtime;
    } catch (error) {
      console.error("Error fetching the Unix timestamp:", error);
      return null;
    }
  };

  const getUserData = () => {
    if (currentUser && currentUser.email) {
      const userRef = firebase
        .firestore()
        .collection("Users")
        .doc(currentUser.email);
      userRef.onSnapshot(
        (doc) => {
          if (doc.exists) {
            const docData = doc.data() as UserDocData;
            if (docData) {
              setSubscribed(docData.subscribed ?? false);
              setSubscriptionId(docData.subscriptionId ?? null);
              setData(docData);
            }
          } else {
            // Handle the case where the document does not exist
            setSubscribed(false);
            setSubscriptionId(null);
            // setData(undefined); // or your initial state
          }
        },
        (error) => {
          console.error("Error listening to the document: ", error);
        },
      );
    }
  };

  const checkSubscription = async () => {
    if (data && data.cancelAt && currentUser && currentUser.email) {
      if (data.cancelAt - 100000 <= (await getCurrentTime())) {
        const userRef = firebase
          .firestore()
          .collection("Users")
          .doc(currentUser.email);
        userRef.update({
          subscribed: false,
          cancelAt: null,
        });
      }
    }
  };

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const createUserDoc = (email: string) => {
    return firebase.firestore().collection("Users").doc(email).set({
      subscribed: false,
      subscriptionId: "none",
      subscriptionItemId: "none",
      subscriptionType: "none",
    });
  };

  const verify = () => {
    if (auth && auth.currentUser) {
      return auth.currentUser.sendEmailVerification();
    }
  };

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    setSubscribed(false);
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email: string) => {
    if (currentUser) {
      return currentUser.verifyBeforeUpdateEmail(email);
    }
  };

  const updatePassword = (password: string) => {
    if (currentUser) {
      return currentUser.updatePassword(password);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    getCurrentTime();
  }, [currentUser]);

  useEffect(() => {
    console.log(`getDataEffect: ${getDataEffect}`);
    getUserData();
    if (data) {
      checkSubscription();
    }
  }, [location.pathname, currentUser, getDataEffect]);

  const value:AuthContextType = {
    currentUser,
    loading,
    subscribed,
    subscriptionId,
    signup,
    createUserDoc,
    verify,
    login,
    logout,
    resetPassword,
    updatePassword,
    updateEmail,
    getUserData,
    data,
    getDataEffect,
    setGetDataEffect,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
