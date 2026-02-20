import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, PaintBucket, Fan, Zap, ShieldCheck, Search, Disc, Settings, LifeBuoy } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
    { title: "Insurance Claims", icon: ShieldCheck, description: "Hassle-free insurance claims and support." },
    { title: "AC Service & Repair", icon: Fan, description: "Complete climate control diagnostics and repair." },
    { title: "Batteries", icon: Zap, description: "Battery testing, replacement, and disposal." },
    { title: "Detailing Services", icon: PaintBucket, description: "Interior and exterior detailing for showroom shine." },
    { title: "Car Inspections", icon: Search, description: "Thorough 360-degree vehicle inspections." },
    { title: "Tyres & Wheel Care", icon: Disc, description: "Alignment, balancing, and tyre replacement." },
    { title: "Denting, Tinkering & Painting", icon: Wrench, description: "Expert bodywork and premium painting services." },
    { title: "Clutch and Body Parts", icon: Settings, description: "Genuine parts replacement and fitting." },
    { title: "24 X 7 Road Assistance", icon: LifeBuoy, description: "Round-the-clock emergency support." },
];

const ServicesRow = () => {
    return (
        <div id="services" className="py-20 bg-white relative">
            <div className="px-6 md:px-12 mb-10 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-2">Our Services</h2>
                <div className="w-16 h-0.5 bg-black mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesRow;
