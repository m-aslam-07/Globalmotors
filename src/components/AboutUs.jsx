import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">About Us</h2>
                    <div className="w-16 h-0.5 bg-black mx-auto mb-10"></div>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                        Global Motors is your premier destination for comprehensive automotive solutions.
                        Blending 10+ years of experience with modern efficiency, we specialize in end-to-end
                        car servicing and insurance assistance. Our goal is to ensure your vehicle runs smoothly
                        so your life can too. Drive with peace of mind, knowing Global Motors is powering your journey.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
