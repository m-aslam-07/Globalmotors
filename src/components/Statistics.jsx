import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "5000+", label: "Happy Customers" },
    { number: "15+", label: "Brands Serviced" },
];

const Statistics = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="text-center p-10 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300"
                        >
                            <span className="text-5xl md:text-6xl font-serif font-bold text-black block mb-3">
                                {stat.number}
                            </span>
                            <span className="text-gray-500 text-sm uppercase tracking-widest font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
