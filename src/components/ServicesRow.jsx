import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Service image mappings from the public folder
const services = [
    {
        title: "Insurance Claims",
        image: "/insurance claims.webp",
        categoryKey: "insurance-claims",
    },
    {
        title: "AC Service & Repair",
        image: "/AC service and repair.webp",
        categoryKey: "ac-service",
    },
    {
        title: "Batteries",
        image: "/Batteries.webp",
        categoryKey: "batteries",
    },
    {
        title: "Detailing Services",
        image: "/Detailig services.png",
        categoryKey: "detailing",
    },
    {
        title: "Car Inspections",
        image: "/car inspection.webp",
        categoryKey: "car-inspections",
    },
    {
        title: "Tyres & Wheel Care",
        image: "/tyres and wheel care.jpeg",
        categoryKey: "tyres",
    },
    {
        title: "Denting, Tinkering & Painting",
        image: "/denting, tinkering and painting.jpeg",
        categoryKey: "denting",
    },
    {
        title: "Clutch and Body Parts",
        image: "/clutch and body parts.jpg",
        categoryKey: "clutch",
    },
    {
        title: "24 X 7 Road Assistance",
        image: "/24 x 7 road assistance.png",
        categoryKey: "road-assistance",
    },
];

const ServicesRow = () => {
    const navigate = useNavigate();

    return (
        <div id="services" className="py-20 bg-white relative">
            <div className="px-6 md:px-12 mb-10 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-2">Our Services</h2>
                <div className="w-16 h-0.5 bg-black mx-auto" />
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
                            onClick={() => navigate(`/services?category=${service.categoryKey}`)}
                            style={{
                                cursor: 'pointer',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid #f0f0f0',
                                backgroundColor: '#fff',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            whileHover={{
                                y: -6,
                                boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
                            }}
                        >
                            {/* Service Image */}
                            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            </div>

                            {/* Service Name */}
                            <div style={{
                                padding: '16px 20px',
                                textAlign: 'center',
                            }}>
                                <span style={{
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    color: '#111',
                                    letterSpacing: '0.01em',
                                    lineHeight: '1.4',
                                }}>
                                    {service.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesRow;
