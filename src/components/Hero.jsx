import React from 'react';
import { motion } from 'framer-motion';
import garageImage from '../assets/garage.png';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={garageImage}
                    alt="Luxury Car in Garage"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
                        GLOBAL <br /> MOTORS
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-white font-light mb-4 tracking-wide">
                        World-Class Care for Your Car.
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-lg font-light tracking-wide">
                        Experience the perfect blend of luxury service and technical precision.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
