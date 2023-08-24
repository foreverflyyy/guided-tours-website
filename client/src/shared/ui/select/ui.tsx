import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>
{
    title: string;
    options: string[];
    currentOption: string;
    changeOption: (option: string) => void;
}

const classLine = "max-w-[200px] text-[16px] bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg " +
    "focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " +
    "dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " +
    "hover:bg-white hover:text-gray-700 duration-500 hover:border-blue-600"

export const Select = ({title, options, currentOption, changeOption}: SelectProps) => {

    return (
        <select
            className={classLine}
            defaultValue={currentOption}
            onChange={e => changeOption(e.target.value)}
        >
            <option disabled value={title}>{title}</option>
            {options?.map((option: string) =>
                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            )}
        </select>
    );
};