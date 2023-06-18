import React, { useContext, useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { MainContext, mainContextType } from "@/Context/Services/Procider/Provider";


const Calender = () => {
    const {date, setDate}= useContext<mainContextType>(MainContext);

    const dateTemplate = (date: Date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e : CalendarChangeEvent) => setDate(e.value)} dateFormat="yy/mm/dd" dateTemplate={dateTemplate} />
        </div>
    )
}

export default Calender
 