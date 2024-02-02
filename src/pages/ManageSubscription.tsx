import axios from "axios"
import { useEffect, useState } from 'react'
import { useAuth } from "../context/AuthContext";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import useUnixTimeToDate from "../hook/useUnixToDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGraduationCap, faAngleDown, faAngleUp, faSpinner} from "@fortawesome/free-solid-svg-icons";
import { PlanTiles } from "../components/PlanTiles";


export const ManageSubscription = () => {
  const {currentUser, subscriptionId, data,getDataEffect, setGetDataEffect} = useAuth() 
  const [message,setMessage] = useState('')
  const userRef = firebase.firestore().collection('Users').doc(currentUser.email);
  const [subData, setSubData] = useState()
  const [dropDown, setDropDown] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCancelSubscription = async () => {
    setMessage('') 
    setError('')
    setLoading(true)
    setDropDown(false)
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
      setMessage("Subscripcion se cancelo con exito")
    } catch{
      console.log(subscriptionId)
      console.log('Error while deleting')
      setError('Occurio un error, no se pudo cancelar')
    }
    setLoading(false)
    setGetDataEffect(!getDataEffect)
  }


  const handleResumeSubscription = async () => {
    setMessage('')
    setError('')
    setLoading(true)
    setDropDown(false)
    try {
     const response = await axios.post("http://localhost:4000/resume-subscription",{
        subscriptionId
      }) 
      userRef.update({
        cancelAt: null
      })
    } catch (error) {
      console.log(error)
     setError('Ocurrio un error, no se pudo reanudar') 
    }
    setMessage('Subscripcion se reunudo con exito')
    setLoading(false)
    setGetDataEffect(!getDataEffect)

  }

  const getSubscriptionData = async () => {
    console.log(subscriptionId)
    console.log(data.subscriptionItemId)
    try {
    const response = await axios.post("http://localhost:4000/retrieve-data", {
        subscriptionId,
      })
      setSubData(response.data.subscription)
    } catch (error) {

     console.log(error)
    }
  }

  const handleChangeSubscription = async (plan) => {
    setMessage("")
    setError('')
    setLoading(true)

    try {
     const response = await axios.post("http://localhost:4000/update-subscription",{
        subscriptionId,
        subscriptionItemId: data.subscriptionItemId,
        plan,
      })
        const subscriptionType = response.data.subscriptionType
        userRef.update({
        subscriptionType: subscriptionType,
      })
        console.log("Subscription was changed successfully")
        setMessage(`Subscripcion se actualizo a ${subscriptionType} con exito`)
    } catch (error) {
     console.log(error) 
       setError("There was an error while updating subscription")      
    }
    setDropDown(false)
    setLoading(false)
  }

  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  useEffect(() => {
    getSubscriptionData()
  },[subscriptionId])

  return (
    <div className="mt-28 p-4 sm:bg-white rounded-lg">
      {loading ? <div className="bg-grey-200 w-full h-full flex items-center justify-center"><FontAwesomeIcon className='fixed top-1/2 text-6xl' icon={faSpinner} spinPulse /></div> :

      <div className="flex flex-col items-center">
      {message && <h1 className="bg-green-200 w-full rounded-md p-2 h-16 mb-5">{message}</h1>}
      {error && <h1 className="bg-red-200 w-full rounded-md p-2 h-16 mb-5">{error}</h1>}
      <h1 className="text-[23px] border-b border-gray-300 mb-4 text-center">Administrar Subscripcion</h1>
      {data && 
        <div className="flex text-[20px]">
          <FontAwesomeIcon icon={faGraduationCap} />
          <h1 className="ml-4">{data.subscriptionType}</h1>
        </div>
      }
      {data && !data.cancelAt && subData && 
        <h1 className="text-sm mb-4">Tu subscripcion se renovara el {useUnixTimeToDate( subData.current_period_end )}</h1>}
        {data && data.cancelAt && <h1 className="text-sm mb-4">Tu subscripcion se cancelara el {useUnixTimeToDate(data.cancelAt)}</h1>}
          <div className="bg-white w-full rounded-lg">
            {data && !data.cancelAt && <div className="flex justify-between w-full p-4" onClick={handleDropDown}>
              <h1 className="mb-6 " >Cambiar Plan</h1>
              { dropDown ? 
                <FontAwesomeIcon icon={faAngleUp}/> :
                <FontAwesomeIcon icon={faAngleDown}/>
              }
            </div> }
            {dropDown && <PlanTiles handleChangeSubscription={handleChangeSubscription}manageSubscriptionPage={true}/> }
          </div>
      {data && !data.cancelAt && <button className='p-2 bg-red-400 rounded-lg h-10 m-4' onClick={handleCancelSubscription}>Cancel Subscription</button> }      
      {data && data.cancelAt && <button className='p-2 bg-blue-200 rounded-lg h-10 m-4' onClick={handleResumeSubscription}>Reanudar Subscripcion</button> }      
    </div>
      }
    </div>
  )
}
