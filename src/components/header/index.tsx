import Link from "next/link";
import React from "react";
import { navData } from "../../layout/navData";
import Logo from "./assets/Lokhator logo v3.png";

function Header() {
    return (
        <div className="flex font-Manrope justify-between py-7 items-center w-[80%] mx-auto">
            <div>
                <img src={Logo.src} alt="" className=" h-9" />
            </div>
            <nav>
                <ul className="flex items-center gap-3 text-light-white">
                    {navData.map((item, idx) => (
                        <li className="font-medium leading-[21.86px]" key={idx}>
                            <Link href="/">{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <button className="font-medium leading-[21.86px] text-light-white px-6 py-3 bg-cta rounded-lg">
                    Get the app
                </button>
            </div>
        </div>
    );
}

export default Header;
