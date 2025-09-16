import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

const Index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const {user , loading} = useAuth()

  useEffect(()=>{
    if(!loading){
      if(user)router.replace("/foryou")
      else router.replace("/login")  
    }
  },[user,loading])

  if(loading){
    return(
      <View className='flex-1 w-full justify-center align-items-center'>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return null
}

export default Index