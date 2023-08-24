import React, {ReactNode} from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export const Button = ({children, ...props}: Props) => {
    return (
        <button
            {...props}
            className={"text-[18px] border-2 text-white rounded-md py-2 px-4 hover:border-blue-500 bg-gray-700 hover:bg-white border-gray-700 hover:text-black duration-300"}
        >
            {children}
        </button>
    );
};