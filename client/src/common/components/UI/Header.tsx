import React from 'react';

const Header = () => {

    const hoverClass = "hover:text-blue-200 duration-500 cursor-pointer"

    return (
        <div className={"h-[50px] text-xl bg-blue-400 text-white px-5 flex justify-between items-center"}>
            <h2 className={hoverClass}>Виктор Шелыгин</h2>
            <div className={"flex space-x-4"}>
                <h3 className={hoverClass}>Contacts</h3>
                <h3 className={hoverClass}>About</h3>
            </div>
        </div>
    );
};

export default Header;