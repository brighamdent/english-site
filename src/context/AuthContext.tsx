import React, { useState, useContext, useEffect} from 'react'
import { auth } from '../FireBase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useLocation } from 'react-router-dom';

const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState()
  const [subscribed, setSubscribed] = useState()
  const [subscriptionId, setSubscriptionId] = useState(null)
  const [data,setData] = useState()
  const [getDataEffect, setGetDataEffect] = useState(false)

  const location = useLocation()
  
  const getCurrentTime = async () => {
     try {
    const response = await fetch('http://worldtimeapi.org/api/ip');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.unixtime;
  } catch (error) {
    console.error('Error fetching the Unix timestamp:', error);
    return null;
  }
  }
  
  const getUserData= () => {
    if (currentUser) {
      const userRef = firebase.firestore().collection('Users').doc(currentUser.email);
      userRef.onSnapshot(doc => {
    if (doc.exists) {
      const data = doc.data();
      setSubscribed(data.subscribed ?? false);
      setSubscriptionId(data.subscriptionId ?? null);
      setData(data);
    } else {
      // Handle the case where the document does not exist
      setSubscribed(false);
      setSubscriptionId(null);
      setData(undefined); // or your initial state
    }
  }, error => {
    console.error("Error listening to the document: ", error);
    // Handle errors
  });
  }
  }
  useEffect(() => {
    if(data){ console.log(data.cancelAt) }
  },[data])

  const checkSubscription = async () => {
    const newDate = new Date( await getCurrentTime() )
    if(data.cancelAt){
      if((data.cancelAt - 100000) <= await getCurrentTime()){
        const userRef = firebase.firestore().collection('Users').doc(currentUser.email);
        userRef.update({
          subscribed: false,
          cancelAt: null
        })
        
      }
    }
   
  }
  
  const signup = (email, password) => {
    console.log('attempted signup')
    return auth.createUserWithEmailAndPassword(email,password)
  }
  const createUserDoc = (email) => {
    console.log('Createuserdoc is running	')
    // const newUser = firebase.auth().currentUser;
    // console.log(`new user: ${newUser}`)
     return firebase.firestore().collection('Users').doc(email).set({
          // Set initial fields (can be empty or with default values)
          subscribed: false,
          subscriptionId: 'none',
          subscriptionItemId: 'none',
          subscriptionType: 'none'
          // Additional fields like 'displayName', 'birthday', etc. can be added here
        });
  }  
  const verify = () => {
    return auth.currentUser.sendEmailVerification()
  }


  const login = (email,password) => {
    return auth.signInWithEmailAndPassword(email,password)
  }

  const logout = () =>{
    setSubscribed(false)
    return auth.signOut()
  }

  const resetPassword = (email) =>{
    return auth.sendPasswordResetEmail(email)
  }

  const updateEmail = (email) => {
    
    console.log(currentUser)
    console.log(email)
      console.log('im returning')
      return currentUser.verifyBeforeUpdateEmail(email);

  }

  const updatePassword = (password) => {
    if (currentUser){
    return currentUser.updatePassword(password)

    }
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  },[])

  useEffect(() => {
    getCurrentTime()
  },[currentUser])
  
  useEffect(() => {
   console.log(`getDataEffect: ${getDataEffect}`) 
   getUserData() 
    if(data){
    checkSubscription()
    }
  },[location.pathname,currentUser,getDataEffect])

  const value = {
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
    setGetDataEffect
  }
  return (
  <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

