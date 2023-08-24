import React, {HTMLAttributes} from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement>  {
    isOpen: boolean,
    setIsOpen: (val: boolean) => void,
}

export const Modal = ({isOpen, setIsOpen, children, ...props}: ModalProps) => {

    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setIsOpen(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3 sm:flex">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};