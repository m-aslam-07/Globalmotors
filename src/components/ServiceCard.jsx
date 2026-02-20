import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300 group relative overflow-hidden rounded-lg"
        >
            <div className="p-8 flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-black transition-colors duration-300">
                    <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-serif font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
