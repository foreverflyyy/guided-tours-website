import React from 'react';
import Link from "next/link";

const Header = () => {

    const hoverClass = "hover:text-blue-200 duration-500 cursor-pointer"

    return (
        <div className={"h-[50px] text-xl bg-blue-400 text-white px-5 flex justify-between items-center"}>
            <Link
                href={"/"}
                className={hoverClass}
            >
                Виктор Шелыгин
            </Link>
            <div className={"flex space-x-4"}>
                <Link
                    href={"/"}
                    className={hoverClass}
                >
                    Main
                </Link>
                <Link
                    href={"/excursion/1"}
                    className={hoverClass}
                >
                    First excursion
                </Link>
            </div>
        </div>
    );
};

export default Header;