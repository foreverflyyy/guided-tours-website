import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{}

const classLine = "p-2 rounded-md border-2 border-blue-600 focus:outline-none " +
    "hover:bg-gray-700 hover:text-white hover hover:border-gray-700 duration-500 focus:border-gray-700 focus:ring-sky-500";

const Input = ({...props}: Props) => {
    return (
        <div className={"py-2"}>
            <input
                {...props}
                className={classLine}
            />
        </div>
    );
};

export default Input;