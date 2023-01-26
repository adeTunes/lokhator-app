import Link from "next/link";
import React from "react";
import { navData } from "../../layout/navData";
import Logo from "./assets/logo.png";

function Footer() {
    return (
        <div className="pt-[217px] pb-[86px] bg-[#EEF1FF] flex justify-center">
            <div className="flex flex-col gap-8">
                <div className="flex justify-center">
                    <img className="h-12" src={Logo.src} alt="" />
                </div>
                <ul className="flex items-center gap-11">
                    {navData.map((item, idx) => (
                        <li className="footer-nav" key={idx}>
                            <Link href="/">{item}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Footer;
