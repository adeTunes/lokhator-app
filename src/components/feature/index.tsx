import React from "react";
import { featuresData } from "../../layout/featuresData";
import AppStore from "./assets/app-store.png";
import PlayStore from "./assets/play-store.png";
import Phones from "./assets/cta-phones.png";
import Phone1 from "./assets/phone-1.png";
import Phone2 from "./assets/phone-2.png";
import Phone3 from "./assets/phone-3.png";
import { motion } from "framer-motion";

function Features() {
    return (
        <div className="pt-[160px] bg-light-white">
            <div className="w-[80%] mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="clash-display pb-[221px] font-semibold text-center w-[90%] mx-auto text-[28px] leading-[44px] features-color">
                    We're changing the way people get access to information and
                    services around them to a better one
                </motion.p>
                <p className="clash-display pb-[72px] font-semibold text-[32px] leading-[39.36px] tracking-[1.5px] capitalize text-center">
                    some of our features
                </p>
                <div className="grid wrapping-grid gap-7 mb-[300px]">
                    {featuresData.map((item, idx) => (
                        <div
                            style={{ background: item.bg }}
                            key={idx}
                            className="pt-11 overflow-hidden flex flex-col gap-11 pb-[73px] px-9">
                            <div className="flex flex-col gap-2 items-center text-center justify-center">
                                <motion.div
                                    initial={{ y: -60 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}>
                                    {item.icon}
                                </motion.div>
                                <motion.p
                                    initial={{ y: 10 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: true }}
                                    className="capitalize clash-display font-semibold text-[20px] leading-[24.6px] tracking-[1.5px] text-[#111111]">
                                    {item.heading}
                                </motion.p>
                            </div>
                            <motion.p
                                initial={{ y: 60 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="text-center font-[Manrope] font-medium text-[18px] leading-[25px] tracking-[1px] text-[#111111]">
                                {item.body}
                            </motion.p>
                        </div>
                    ))}
                </div>
                <div className="pt-[71px] overflow-hidden mb-[-65px] relative z-50 cta-section px-[64px] grid gap-y-8 wrapping-grid-2 gap-3 max-[1214px]:w-fit max-[1214px]:mx-auto items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <motion.h3
                                initial={{ y: -60 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="clash-display text-light-white font-semibold text-[36px] leading-[44px] tracking-[1.25px]">
                                Sign up for free
                            </motion.h3>
                            <motion.p
                                initial={{ y: 30 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="font-[Manrope] max-w-[420px] font-medium text-[18px] leading-7 tracking-[1.25px] text-light-white">
                                Download the Lokhator app today and get the best
                                exposure you and your services deserves.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ y: 40 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-[37px]">
                            <img
                                className="h-[52px]"
                                src={PlayStore.src}
                                alt=""
                            />
                            <img
                                className="h-[52px]"
                                src={AppStore.src}
                                alt=""
                            />
                        </motion.div>
                    </div>
                    <div className="flex items-end min-[1214px]:justify-end">
                        <motion.img
                            initial={{ x: -60 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="h-[185px] mr-[-30px] hero-phones bg-light-white"
                            src={Phone1.src}
                            alt=""
                        />
                        <motion.img
                            initial={{ y: 60 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="h-[290px] middle-cta-phone z-[2] hero-phones bg-light-white"
                            src={Phone2.src}
                            alt=""
                        />
                        <motion.img
                            initial={{ x: 60 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="h-[185px] ml-[-30px] hero-phones bg-light-white"
                            src={Phone3.src}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
