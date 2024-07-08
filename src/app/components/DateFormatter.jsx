'use client'
import React, { useState, useEffect } from 'react';

function DateFormatter({ inputDate }) {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const formatDate = (date) => {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const dateParts = date.split('-');
            const formattedDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]).toLocaleDateString(undefined, options);

            // Split the formatted date into parts
            const [month, day, year] = formattedDate.split(' ');

            // Add a comma after the month
            return `${month}, ${day} ${year}`;
        };

        setFormattedDate(formatDate(inputDate));
    }, [inputDate]);

    return <div>{formattedDate}</div>;
}

export default DateFormatter;

