import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './cal.css';



const CalendarApp = () => {
const [value, onChange] = useState(new Date());

    return (
        <div className = "cal">
            <Calendar
              onChange={onChange}
              value={value}
            />
           

        </div>
    )
}

export default CalendarApp