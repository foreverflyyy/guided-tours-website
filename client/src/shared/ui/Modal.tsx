import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode,
    setShowModal: (val: boolean) => void,
}

const MyModal = ({children, setShowModal}: Props) => {

    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowModal(false)}
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

export default MyModal;