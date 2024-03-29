'use client';

import React, {useCallback} from "react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

interface CounterProps {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
                                             title,
                                             subtitle,
                                             value,
                                             onChange
                                         }) => {
    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [onChange,  value]);

    const onReduce = useCallback(() => {
        if (value === 1) {
            return;
        }
        onChange(value - 1);
    }, [onChange, value]);

    return (
        <div
            className='
                w-full
                flex
                items-center
                justify-between
                rounded-lg
                border-[1px]
                border-neutral-200
                p-4
            '
        >
            <div className="flex flex-col">
                <div className="font-medium">
                    {title}
                </div>
                <div className="font-light text-neutral-600">
                    {subtitle}
                </div>
            </div>
            <div className="flex flex-row items-center gap-4">
                <div
                    onClick={onReduce}
                    className="
                        w-10
                        h-10
                        rounded-full
                        border-[1px]
                        border-neutral-200
                        flex
                        items-center
                        justify-center
                        text-neutral-600
                        cursor-pointer
                        hover:opacity-80
                        transition
                    "
                >
                    <AiOutlineMinus/>
                </div>
                <div className="font-light text-xl text-neutral-600">
                    {value}
                </div>
                <div
                    onClick={onAdd}
                    className="
                        w-10
                        h-10
                        rounded-full
                        border-[1px]
                        border-neutral-200
                        flex
                        items-center
                        justify-center
                        text-neutral-600
                        cursor-pointer
                        hover:opacity-80
                        transition
                    "
                >
                    <AiOutlinePlus/>
                </div>
            </div>
        </div>
    );
}

export default Counter;