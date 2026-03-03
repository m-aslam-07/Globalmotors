import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    return (
        <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#f9fafb', padding: '5rem 0' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">About Us</h2>
                    <div className="w-16 h-0.5 bg-black mx-auto mb-10" />
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
                        Global Motors is your premier destination for comprehensive automotive solutions.
                        Blending 10+ years of experience with modern efficiency, we specialise in end-to-end
                        car servicing and insurance assistance. Our goal is to ensure your vehicle runs smoothly
                        so your life can too. Drive with peace of mind, knowing Global Motors is powering your journey.
                    </p>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
                        {[
                            { value: '10+', label: 'Years of Experience' },
                            { value: '5000+', label: 'Happy Customers' },
                            { value: '15+', label: 'Brands Serviced' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                style={{
                                    background: '#ffffff',
                                    border: '1px solid #eaeaea',
                                    borderRadius: '12px',
                                    padding: '32px 24px',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                                    textAlign: 'center',
                                }}
                            >
                                <div style={{
                                    fontSize: '2.75rem',
                                    fontWeight: '700',
                                    fontFamily: 'Georgia, serif',
                                    color: '#111',
                                    lineHeight: 1,
                                    marginBottom: '10px',
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: '0.7rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.18em',
                                    color: '#888',
                                    fontWeight: '600',
                                }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
