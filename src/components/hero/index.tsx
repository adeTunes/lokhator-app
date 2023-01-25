import React from "react";
import AppStore from "./assets/app-store.png";
import PlayStore from "./assets/play-store.png";
import Phone1 from "./assets/phone_1.png";
import Phone2 from "./assets/phone_2.png";
import Phone3 from "./assets/phone_3.png";
import Phone4 from "./assets/phone_4.png";
import Particle1 from "./assets/particle-1.svg";
import Particle2 from "./assets/particle-2.svg";
import Particle3 from "./assets/particle-3.svg";
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="relative bg-light-GO-Green overflow-hidden">
            <div className="pt-[134px] text-center relative z-10 w-[50%] mx-auto">
                <div className="max-w-[645px] mb-4 mx-auto">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="clash-display font-bold text-[48px] leading-[60px] text-light-white tracking-[1.5px]">
                        Expand your world with lokhator
                    </motion.h1>
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="font-[Manrope] mb-11 font-medium text-[20px] leading-[30px] text-light-white">
                    Get the best exposures you and your business services
                    deserves for free!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="flex items-center gap-2 mb-[80px] justify-center">
                    <img className="w-[125px]" src={PlayStore.src} alt="" />
                    <img className="w-[125px]" src={AppStore.src} alt="" />
                </motion.div>
                <motion.div
                    initial={{ y: 400 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="flex items-end justify-center gap-7">
                    <img
                        className="w-[185px] hero-phones bg-light-white"
                        src={Phone1.src}
                        alt=""
                    />
                    <img
                        className="w-[185px] hero-phones bg-light-white"
                        src={Phone2.src}
                        alt=""
                    />
                    <img
                        className="w-[185px] hero-phones bg-light-white"
                        src={Phone3.src}
                        alt=""
                    />
                    <img
                        className="w-[185px] hero-phones bg-light-white"
                        src={Phone4.src}
                        alt=""
                    />
                </motion.div>
            </div>
            <motion.img
                initial={{ opacity: 0.4, x: -130 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute top-[268px] left-0 w-[210px]"
                src={Particle1.src}
                alt=""
            />
            <motion.img
                initial={{ opacity: 0.4, x: 130 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute bottom-[336px] right-0 w-[190px]"
                src={Particle2.src}
                alt=""
            />
            <motion.img
                initial={{ opacity: 0.4, x: 130 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute top-[123px] right-0 w-[150px]"
                src={Particle3.src}
                alt=""
            />
        </div>
    );
}

export default Hero;
