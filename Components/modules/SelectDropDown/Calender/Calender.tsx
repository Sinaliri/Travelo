import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';


const Calender = () => {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

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
            <Calendar value={date} onChange={(e : CalendarChangeEvent) => setDate(e.value)} dateTemplate={dateTemplate} />
        </div>
    )
}

export default Calender
 