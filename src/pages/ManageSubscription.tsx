import axios from "axios"
import { useState } from 'react'
import { useAuth } from "../context/AuthContext";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export const ManageSubscription = (props : {}) => {
  const {subscriptionId} = useAuth() 
  const [message,setMessage] = useState('')
  const { currentUser } = useAuth()
  const userRef = firebase.firestore().collection('Users').doc(currentUser.email);


  const handleCancelSubscription = async () => {
    setMessage('') 
    try{
    const response = await axios.post("http://localhost:4000/cancel-subscription", {
      subscriptionId,
    })
      const cancelAt = response.data.cancelAt
      console.log(cancelAt)
     if(response.data){
        console.log(response.data.message)
        userRef.update({
          cancelAt: cancelAt
        }) 
      }
      setMessage("Subscription cancled successfully")
    } catch{
      console.log(subscriptionId)
      console.log('Error while deleting')
      setMessage('Error while canceling subscription.')
    }


  }

  return (
    <div>
      <button onClick={handleCancelSubscription}>Cancel</button>      
    </div>
  )
}
