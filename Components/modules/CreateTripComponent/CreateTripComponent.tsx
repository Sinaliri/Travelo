import baggage from '../../../assets/images/baggage.png'
import Image from 'next/image';
import style from "../../layout/ProfileLayout/ProfileLayout.module.scss";
import Input from '../Input/Input';
import Notif from '../Notif/Notif';
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import styles from "../Settings/SettingsSection.module.scss";

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
        <div className='p-5 m-7 relative' style={{ background: '#FFE588', borderRadius: '50px' }}>
            <div className='flex justify-content-between'>
                <h3 className='font-normal text-2xl'> Create a trip! </h3>
                <h3 className='font-normal text-2xl'> TRAVELO </h3>
            </div>
            <div>
                <div>
                    <Image src={baggage} alt='' className='absolute bottom-0 right-0 h-full w-auto' />
                </div>
                <div className='px-7 py-5 my-7 w-6' style={{ background: '#CFCFCF', borderRadius: '50px' }}>
                    <div className='flex justify-content-between align-items-center'>
                        <h4 className='font-normal text-2xl'> TRAVELO </h4>
                        <Notif />
                    </div>
                    <form className={`grid`}>
                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country"
                            filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full mt-5"
                            style={{ borderRadius: '10px' }}
                        />
                        <Input label="City-From" />
                        <Input label="City-To" />
                        <Input label="Day-From" />
                        <Input label="Day-To" />
                        <Input label="Price" />
                        <Input label="Transportation" />
                        <div className='flex align-items-end justify-content-between w-full'>
                            <Input label="Decription" width="6" height="140px" />
                            <div className={`${styles.buttonContainer} flex justify-content-end align-items-center w-full`}>
                                <button className={`${styles.submit2}`} type="submit">Create</button>
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