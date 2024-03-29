'use client';

import {RangeKeyDict, Range, DateRange} from "react-date-range";
import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface CalendarProps{
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[];
}

const Calendar: React.FC <CalendarProps> = ({
                                                value,
                                                onChange,
                                                disabledDates
                                            }) => {
    return (
        <DateRange
            rangeColors={["#f6546a"]}
            ranges={[value]}
            date={new Date()}
            onChange={onChange}
            direction="vertical"
            showDateDisplay={false}
            minDate={new Date()}
            disabledDates={disabledDates}
        />
    )
}

export default Calendar;