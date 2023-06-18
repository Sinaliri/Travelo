import React, { useContext, useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { MainContext, mainContextType } from "@/Context/Services/Procider/Provider";
import styles from"./Canlender.module.scss"

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
        <div className={`${styles.card} flex justify-content-center m-0`}>
            <Calendar className="" value={date} onChange={(e : CalendarChangeEvent) => setDate(e.value)} dateFormat="yy/mm/dd" dateTemplate={dateTemplate} />
        </div>
    )
}

export default Calender
 