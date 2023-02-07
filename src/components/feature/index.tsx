import React from "react";
import AppStore from "./assets/app-store.png";
import PlayStore from "./assets/play-store.png";
import DashedWheel from "./assets/dashed-wheel.png";
import Phone1 from "./assets/phone-1.png";
import Phone2 from "./assets/phone-2.png";
import Phone3 from "./assets/phone-3.png";
import ListPhone from "./assets/list-phone.png";
import ListServiceCard from "./assets/list-service-card.png";
import Picture1 from "./assets/picture-1.png";
import Picture2 from "./assets/picture-2.png";
import Picture3 from "./assets/picture-3.png";
import Picture4 from "./assets/picture-4.png";
import Picture5 from "./assets/picture-5.png";
import IconGreen from "./assets/icon-green.png";
import IconBlue from "./assets/icon-blue.png";
import IconShop from "./assets/icon-shop.png";
import IconRoomService from "./assets/icon-room-service.png";
import IconYellow from "./assets/icon-yellow.png";
import IconPurple from "./assets/icon-purple.png";
import PhoneLeft from "./assets/phone-left.png";
import PhoneRight from "./assets/phone-right.png";
import LeftMockup from "./assets/left-mockup.png";
import RightMockup from "./assets/right-mockup.png";
import MiddleMockup from "./assets/middle-mockup.png";
import { motion } from "framer-motion";
import LokahtorLink from "./link";
import { Icon } from "@iconify/react";

function Features() {
    return (
        <div className="pt-[160px] bg-light-white">
            <div className="lokhator-link max-[401px]:px-[10px] px-[64px] justify-between max-[1219px]:block flex flex-wrap gap-x-5 py-[50px] items-center w-[80%] max-[588px]:w-[95%] mx-auto">
                <div className="flex flex-col max-[1219px]:mb-[30px]">
                    <motion.h2
                        initial={{ opacity: 0, y: -60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="clash-display max-[401px]:text-[24px] font-semibold text-[32px] leading-[39.36px] tracking-[1.5px]">
                        Lokhator Links
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-4 font-[Manrope] max-w-[546px] font-normal leading-[21.86px] tracking-[-0.33px] link-subheading mb-[56px]">
                        Links help people within your location discover your
                        posts. You'll also see top posts about the links you
                        follow on your Timeline.
                    </motion.p>
                    <div className="flex justify-start">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="flex items-center gap-7 max-[263px]:gap-[10px]">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="flex py-[3px] max-[334px]:text-[13px] px-[5px] items-center gap-2 links">
                                    <Icon icon="ci:link-02" color="#2FC67E" />
                                    <span>RESTAURANT </span>
                                    <Icon icon="ant-design:plus-outlined" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="flex py-[3px] px-[5px] max-[334px]:text-[13px] items-center gap-2 links">
                                    <Icon icon="ci:link-02" color="#2FC67E" />
                                    <span>HAIRSTYLIST</span>
                                    <Icon icon="ant-design:plus-outlined" />
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="flex py-[3px] px-[5px] max-[334px]:text-[13px] items-center gap-2 links">
                                <Icon icon="ci:link-02" color="#2FC67E" />
                                <span>HOTELS</span>
                                <Icon icon="ant-design:plus-outlined" />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="flex relative max-[1219px]:max-w-fit max-[1219px]:mx-auto">
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0.6 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-[250px] h-[250px]"
                        src={DashedWheel.src}
                        alt=""
                    />
                    <motion.img
                        initial={{ x: 50, y: -10 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-10 h-10 top-[13px] right-[193px]"
                        src={Picture1.src}
                        alt=""
                    />
                    <motion.img
                        initial={{ x: -40, y: 40 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-10 h-10 top-[40px] right-[103px]"
                        src={Picture2.src}
                        alt=""
                    />
                    <motion.img
                        initial={{ x: -50, y: 10 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-10 h-10 top-[65px] right-[-12px]"
                        src={Picture3.src}
                        alt=""
                    />
                    <motion.img
                        initial={{ x: 30, y: -30 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-10 h-10 top-[197px] right-[103px]"
                        src={Picture4.src}
                        alt=""
                    />
                    <motion.img
                        initial={{ x: 40, y: 10 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-10 h-10 top-[157px] right-[217px]"
                        src={Picture5.src}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex justify-between max-[1143px]:block relative flex-wrap gap-x-5 my-[140px] items-center w-[80%] max-[588px]:w-[95%] mx-auto">
                <div className=" relative max-[1143px]:mb-[30px] max-[1143px]:max-w-fit max-[1143px]:mx-auto">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0.6 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative z-[2] max-[523px]:w-[190px] max-[523px]:h-[190px] overflow-hidden h-[440px] w-[440px] max-[588px]:w-[385px] max-[588px]:h-[385px] rounded-full bg-[#C2EBD8]">
                        <motion.img
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            src={PhoneLeft.src}
                            className="absolute max-[523px]:w-[70px] max-[523px]:right-[88px] w-[193px] top-[65px] right-[188px]"
                            alt=""
                        />
                        <img
                            src={PhoneRight.src}
                            className="absolute max-[523px]:inline-block max-[523px]:w-[80px] max-[523px]:top-[93px] max-[523px]:right-[30px] w-[193px] top-[205px] right-[38px]"
                            alt=""
                        />
                        <motion.img
                            initial={{ y: -200 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            src={PhoneRight.src}
                            className="absolute max-[523px]:hidden max-[523px]:w-[80px] max-[523px]:top-[93px] max-[523px]:right-[30px] w-[193px] top-[205px] right-[38px]"
                            alt=""
                        />
                    </motion.div>
                    <motion.img
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-11 z-20 h-11 right-0 top-[100px]"
                        src={IconGreen.src}
                        alt=""
                    />
                    <motion.img
                        initial={{ x: 100, y: 100 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-11 h-11 max-[523px]:left-[-29px] top-[64px] left-[10px]"
                        src={IconPurple.src}
                        alt=""
                    />
                    <motion.img
                        initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-11 h-11 max-[523px]:left-[171px] max-[523px]:top-[179px] z-[3] left-[350px] top-[374px]"
                        src={IconYellow.src}
                        alt=""
                    />
                </div>
                <div className="relative flex max-[1143px]:max-w-fit max-[1143px]:mx-auto">
                    <div className="flex flex-col mr-[44px] justify-end">
                        <motion.h2
                            initial={{ opacity: 0, y: -60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="clash-display max-[401px]:text-[28px] text-[#00AC5A] font-bold text-[36px] leading-[44px] tracking-[1.25px]">
                            Stay Updated
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mt-4 font-[Manrope] max-w-[411px] text-[18px] font-medium leading-[28px] tracking-[1.25px] updated-subheading mb-[56px]">
                            Get the latest gist of things happening around you
                            on lokhator.
                        </motion.p>
                        <motion.img
                            initial={{ x: -100 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 right-0"
                            src={IconBlue.src}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between max-[1143px]:block relative flex-wrap gap-x-5 mb-[250px] items-center w-[80%] max-[588px]:w-[95%] mx-auto">
                <div className="relative max-[1143px]:mb-[30px] max-[1143px]:max-w-fit max-[1143px]:mx-auto">
                    <div className="flex flex-col justify-end">
                        <motion.h2
                            initial={{ opacity: 0, y: -60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="clash-display max-[401px]:text-[28px] capitalize text-[#00AC5A] font-bold text-[36px] leading-[44px] tracking-[1.25px]">
                            list your service
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mt-4 font-[Manrope] max-w-[411px] text-[18px] font-medium leading-[28px] tracking-[1.25px] updated-subheading mb-[56px]">
                            Are you a service provider? Seamlessly list your
                            services on lokhator with simple steps with no
                            hidden charges.
                        </motion.p>
                    </div>
                </div>
                <div className="relative max-[1143px]:max-w-fit max-[1143px]:mx-auto">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0.6 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden max-[523px]:w-[190px] max-[523px]:h-[190px] h-[440px] w-[440px] max-[588px]:h-[385px] max-[588px]:w-[385px] rounded-full bg-[#F2CCFF]">
                        <img
                            src={ListPhone.src}
                            className="absolute max-[523px]:inline-block max-[523px]:w-[70px] max-[523px]:right-[79px] w-[204px] max-[523px]:top-[65px] top-[118px] right-[188px]"
                            alt=""
                        />
                        <img
                            src={ListServiceCard.src}
                            className="absolute max-[523px]:inline-block max-[523px]:h-[70px] max-[523px]:top-[84px] h-[178px] top-[205px] right-[8px]"
                            alt=""
                        />
                        <motion.img
                            initial={{ y: 200 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            src={ListPhone.src}
                            className="absolute max-[523px]:hidden max-[523px]:w-[70px] max-[523px]:right-[79px] w-[204px] max-[523px]:top-[65px] top-[118px] right-[188px]"
                            alt=""
                        />
                        <motion.img
                            initial={{ x: 200 }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            src={ListServiceCard.src}
                            className="absolute max-[523px]:hidden max-[523px]:h-[70px] max-[523px]:top-[84px] h-[178px] top-[205px] right-[8px]"
                            alt=""
                        />
                    </motion.div>
                    <motion.img
                        initial={{ x: 100, y: -100 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-11 h-11 left-0 top-[100px]"
                        src={IconShop.src}
                        alt=""
                    />
                    <motion.img
                        initial={{ x: -200 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="absolute w-11 max-[523px]:top-[210px] max-[523px]:right-[20px] h-11 top-[375px] right-[63px]"
                        src={IconRoomService.src}
                        alt=""
                    />
                </div>
            </div>
            <div className="w-[80%] mx-auto max-[588px]:w-[95%]">
                <div className="pt-[71px] overflow-hidden mb-[-65px] relative z-50 cta-section px-[64px] max-[421px]:px-[20px] grid gap-y-8 wrapping-grid-2 gap-3 max-[1214px]:w-fit max-[1214px]:mx-auto items-center">
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
                                className="font-[Manrope] max-w-[420px] max-[421px]:text-[15px] font-medium text-[18px] leading-7 tracking-[1.25px] text-light-white">
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
                                className="h-[52px] max-[334px]:h-[28px] max-[545px]:h-[38px]"
                                src={PlayStore.src}
                                alt=""
                            />
                            <img
                                className="h-[52px] max-[334px]:h-[28px] max-[545px]:h-[38px]"
                                src={AppStore.src}
                                alt=""
                            />
                        </motion.div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex items-end min-[1214px]:justify-end">
                            <motion.img
                                initial={{ x: 100 }}
                                whileInView={{ x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="h-[185px] max-[334px]:h-[100px] max-[695px]:h-[140px] mr-[-30px] hero-phones"
                                src={LeftMockup.src}
                                alt=""
                            />
                            <motion.img
                                initial={{ y: -60 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="h-[290px] max-[695px]:h-[160px] max-[334px]:h-[117px] middle-cta-phone z-[2] hero-phones"
                                src={MiddleMockup.src}
                                alt=""
                            />
                            <motion.img
                                initial={{ x: 60 }}
                                whileInView={{ x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="h-[185px] max-[334px]:h-[100px] max-[695px]:h-[140px] ml-[-30px] hero-phones"
                                src={RightMockup.src}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
