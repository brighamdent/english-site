import React, { useState, useContext, useEffect} from 'react'
import { auth } from '../FireBase'

const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState()

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email,password)
  }


  const login = (email,password) => {
    return auth.signInWithEmailAndPassword(email,password)
  }

  const logout = () =>{
    return auth.signOut()
  }

  const resetPassword = (email) =>{
    return auth.sendPasswordResetEmail(email)
  }

  const updateEmail = (email) => {
    console.log(currentUser)
    console.log(email)
     if (currentUser) {
      console.log('im returning')
      return auth.currentUser.updateEmail(email);
    }

  }

  const updatePassword = (password) => {
    if (currentUser){
    return auth.currentUser.updatePassword(password)

    }
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  },[])


  const value = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    resetPassword,
    updatePassword,
    updateEmail,
  }
  return (
  <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

