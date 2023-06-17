import baggage from '../../../assets/images/baggage.png'
import Image from 'next/image';
import style from "../../layout/ProfileLayout/ProfileLayout.module.scss";
import Input from '../Input/Input';
import Notif from '../Notif/Notif';
import React, { ChangeEvent, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import styles from "../Settings/SettingsSection.module.scss";
import Link from 'next/link';

interface Country {
    name: string;
    code: string;
}

const CreateTripComponent = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const countries: Country[] = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
    const [NewTrip,setNewTrip]=useState({
        Country:"",
        CityFrom:"",
        CityTo:"",
        DayFrom:"",
        DayTo:"",
        Transportation:"",
        Price:"",
        Descripition:"",
      })
      const handler = (name: string, value: string) => {
        setNewTrip({ ...NewTrip, [name]: value });
        console.log(NewTrip)
      };
      const CreateAtrip = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (selectedCountry) {
            setNewTrip({ ...NewTrip, Country: selectedCountry.name });
          }
        console.log(NewTrip)
      };
    const selectedCountryTemplate = (option: Country, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option: Country) => {
      
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className='p-5 m-1 lg:m-4 lg:mb-0 relative overflow-hidden'   style={{ background: '#FFE588', borderRadius: '50px' }}>
            <div className='flex justify-content-between'>
                <h3 className='font-normal text-2xl'> Create a trip! </h3>
                <h3 className='font-normal text-2xl'> <Link href={`./`}>TRAVELO</Link> </h3>
            </div>
            <div className='flex justify-content-center lg:justify-content-start'>
                <div className='hidden lg:block'>
                    <Image src={baggage} alt='' className='absolute bottom-0 right-0 h-full w-auto' />
                </div>
                <div className='px-4 lg:px-7 py-5 my-7 w-6 z-5 relative w-12 lg:w-5' style={{ background: '#CFCFCF', borderRadius: '50px'  }}>
                    <div className='flex justify-content-between align-items-center'>
                        <h4 className='font-normal text-2xl'> TRAVELO </h4>
                        <Notif />
                    </div>
                    <form className={`grid`}>
                        <Dropdown name='Country' value={selectedCountry} onChange={(e) => {setSelectedCountry(e.value)}} options={countries} optionLabel="name" placeholder="Select a Country"
                            filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full mt-5"
                            style={{ borderRadius: '10px' }}
                        />
                        <Input label="City-From" type="text" name="CityFrom" value={NewTrip.CityFrom} onChange={handler} />
                        <Input label="City-To" type="text" name="CityTo" value={NewTrip.CityTo} onChange={handler} />
                        <Input label="DayFrom" type="text" name="DayFrom" value={NewTrip.DayFrom} onChange={handler} />
                        <Input label="Day-To" type="text" name="DayTo" value={NewTrip.DayTo} onChange={handler} />
                        <Input label="Price" type="text" name="Price" value={NewTrip.Price} onChange={handler} />
                        <Input label="Transportation" type="text" name="Transportation" value={NewTrip.Transportation} onChange={handler} />

                        <div className='flex flex-column lg:flex-row align-items-end justify-content-between w-full'>
                        <Input label="Descripition" width="6" height="140px" type="text" name="Descripition" value={NewTrip.Descripition} onChange={handler} />

                            <div className={`${styles.buttonContainer} flex justify-content-between lg:justify-content-end align-items-center w-full`}>
                                <button className={`${styles.submit2}`} type="submit" onClick={CreateAtrip}>Create</button>
                                <button className={`${styles.submit2}`} type="submit">Cancel</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTripComponent;