import React from "react";
import Features from "../src/components/feature";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import Hero from "../src/components/hero";

function index() {
    return (
        <>
            <div className="noisy">
                <Header />
                <Hero />
            </div>
            <Features />
            <Footer />
        </>
    );
}

export default index;
