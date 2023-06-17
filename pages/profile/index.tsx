import ProfileLayout from '@/Components/layout/ProfileLayout/ProfileLayout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Profile = () => {
  const router=useRouter();
  useEffect(()=>{
    router.push("./profile/Dashboard")
  })
  return (
    <div></div>
    )
}

export default Profile