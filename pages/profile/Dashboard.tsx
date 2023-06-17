import Notif from '@/Components/modules/Notif/Notif'
import PeopleSection from '@/Components/modules/PeopleSection/PeopleSection'
import PeopleSimpleCard from '@/Components/modules/PeopleSimpleCard/PeopleSimpleCard'
import TripCard from '@/Components/modules/TripCard/TripCard'
import { MyTrip, People } from '@/Context/Services/Functions/Api'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [MyTrips, setMyTrips] = useState([]);
  interface PersonData {
    first_name: string;
    career: string;
    education: string;
    livingIn: string;
    personality_type: string;
    instagram: string;
    workout: string;
    image: any;
  }
  const [nearby, setNearby] = useState<PersonData[]>([]);
  const [eligible, setEligible] = useState<PersonData[]>([]);
  const [views, setViews] = useState<PersonData[]>([]);

  useEffect(() => {
    MyTrip().then((res) => {
      setMyTrips(res.data);
    });
  }, []);

  useEffect(() => {
    People().then((res) => {
      setNearby(res.data.trip_Nearby);
      setEligible(res.data.most_eligible)
      setViews(res.data.views)
    });
  }, []);

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
        <PeopleSection views={views} mostEligible={eligible} nearby={nearby} />
      </div>

      <div className='mb-5 mt-8'>
        <h3 className='font-normal text-xl'> Your trip requests! </h3>
        <div className='mt-3 flex justify-content-between'>
          {MyTrips.map((item) => (
            <TripCard
              key={item?.id}
              name={item?.trip_owner_fullname}
              price={item?.price}
              fromCity={item?.from_city}
              toCity={item?.to_city}
            />
          ))}
        </div>
      </div>

      <div className='mb-5 mt-8'>
        <h3 className='font-normal text-xl'> people who would like to join you! </h3>
        <div className='my-5 flex justify-content-between'>
          {views.slice(0, 3).map((item) => (
            <PeopleSimpleCard key={item.first_name} name={item.first_name} role={item.career} />
          ))}

        </div>
      </div>

    </div>
  )
}

export default Dashboard