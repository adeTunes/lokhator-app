import React from "react";
import AppStore from "./assets/app-store.png";
import PlayStore from "./assets/play-store.png";
import EllipseYellow from "./assets/ellipse-yellow.png";
import EllipseGreen from "./assets/ellipse-green.png";
import ServiceCard from "./assets/service-card.png";
import FemaleHandHoldingIPhone from "./assets/female-hand-holding-iPhone.png";
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className="relative overflow-hidden max-[401px]:w-[95%] w-[80%] mx-auto">
            <div className="pt-[134px] pb-[88px] max-[1144px]:flex max-[1144px]:gap-6 flex-col text-center grid wrapping-grid">
                <div>
                    <div className="max-w-[645px] mb-4 mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: -60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="clash-display max-[401px]:text-[32px] font-bold text-[48px] leading-[60px] text-light-white tracking-[1.5px]">
                            Expand your world with lokhator
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-[Manrope] mb-11 font-medium max-[401px]:text-[18px] text-[20px] leading-[30px] text-light-white">
                        GET THE EXPOSURE YOUR SERVICES NEED FOR FREE
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-2 mb-[80px] justify-center">
                        <img className="w-[125px]" src={PlayStore.src} alt="" />
                        <img className="w-[125px]" src={AppStore.src} alt="" />
                    </motion.div>
                </div>
                <div className="flex justify-end max-[1144px]:block max-[1144px]:w-[90%] max-[1144px]:mx-auto max-[1144px]:max-w-fit relative">
                    <motion.img
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={EllipseYellow.src}
                        className="w-[403px] h-[403px] max-[545px]:w-[230px] max-[545px]:h-[230px]"
                        alt=""
                    />
                    <motion.img
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                        src={EllipseGreen.src}
                        className="w-[213px] max-[1144px]:left-[-19px] max-[545px]:w-[90px] max-[545px]:h-[90px] h-[213px] absolute top-0 right-[265px]"
                        alt=""
                    />
                    <motion.img
                        initial={{ y: 200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8 }}
                        src={FemaleHandHoldingIPhone.src}
                        className="absolute h-[589px] max-[1144px]:left-[58px] max-[545px]:h-[280px] max-[545px]:top-[43px] right-[-39px] top-[-45px]"
                        alt=""
                    />
                    <motion.img
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        src={ServiceCard.src}
                        className="absolute max-[1144px]:left-[211px] max-[545px]:w-[80px] max-[545px]:left-[134px] right-0 w-[220px] top-[60px]"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
