import Notif from '@/Components/modules/Notif/Notif'
import PeopleSection from '@/Components/modules/PeopleSection/PeopleSection'
import PeopleSimpleCard from '@/Components/modules/PeopleSimpleCard/PeopleSimpleCard'
import TripCard from '@/Components/modules/TripCard/TripCard'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='flex  justify-content-between align-items-center'>
        <div className='flex flex-column' style={{ gap: '10px' }}>
          <h3 className='font-normal text-3xl'> Hello, Alireza! </h3>
          <h4 className='font-normal text-base'> Welcome back and explore the world! </h4>
        </div>
        <div>
          <Notif />
        </div>
      </div>

      <div className='mb-5 mt-8'>
        <h3 className='font-normal text-xl'> Discover people! </h3>
        <PeopleSection />
      </div>

      <div className='mb-5 mt-8'>
        <h3 className='font-normal text-xl'> Your trip requests! </h3>
        <div className='mt-3 flex justify-content-between'>
          <TripCard />
          <TripCard />
          <TripCard />

        </div>
      </div>

      <div className='mb-5 mt-8'>
        <h3 className='font-normal text-xl'> people who would like to join you! </h3>
        <div className='my-5 flex justify-content-between'>
          <PeopleSimpleCard name='Mohammad' role='Web developer' />
          <PeopleSimpleCard name='Amir' role='Web developer' />
          <PeopleSimpleCard name='Sina' role='Web developer' />
          <PeopleSimpleCard name='Mehdi' role='Web developer' />
        </div>
      </div>

    </div>
  )
}

export default Dashboard