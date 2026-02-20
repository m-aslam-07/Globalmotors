import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Maximize2, Minimize2 } from 'lucide-react';

const branches = [
    {
        name: "Ambattur",
        address: "No. 197/2A, Perumal Kovil Street, Shanmugapuram, Kallikuppam, Ambattur, Chennai - 600 099",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2!2d80.1516!3d13.1067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263b2e7e3f3a7%3A0x0!2zMTPCsDA2JzI0LjEiTiA4MMKwMDknMDUuOCJF!5e0!3m2!1sen!2sin!4v1700000000000",
        mapsLink: "https://www.google.com/maps/search/No.+197+2A+Perumal+Koil+St+Shanmugapuram+Ambattur+Chennai",
        tag: "Main Branch",
    },
    {
        name: "Kolathur",
        address: "Global Motors No. 150, Jasmine Nagar, Kolathur, Chennai – 600099",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.2121!3d13.1218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264000000001%3A0x0!2zMTPCsDA3JzE4LjUiTiA4MMKwMTInNDMuNiJF!5e0!3m2!1sen!2sin!4v1700000000001",
        mapsLink: "https://www.google.com/maps/search/No.+150+Jasmine+Nagar+Kolathur+Chennai+600099",
        tag: null,
    },
    {
        name: "Thiruverkadu",
        address: "Plot No. C & D, Lotus Nagar, Periya Koladi Road, Koladi, Thiruverkadu, Chennai - 600 077",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3!2d80.1133!3d13.0691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260000000001%3A0x0!2zMTPCsDA0JzA4LjgiTiA4MMKwMDYnNDcuOSJF!5e0!3m2!1sen!2sin!4v1700000000002",
        mapsLink: "https://www.google.com/maps/search/Plot+C+D+Lotus+Nagar+Periya+Koladi+Road+Thiruverkadu+Chennai+600077",
        tag: null,
    },
];

const Footer = () => {
    const [activeBranch, setActiveBranch] = useState(0);
    const [mapExpanded, setMapExpanded] = useState(false);

    return (
        <footer id="contact" className="bg-black text-gray-400">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                {/* Top: Brand + Tagline + Socials */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 pb-10 border-b border-gray-800">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white tracking-widest mb-2">GLOBAL MOTORS</h2>
                        <p className="text-gray-500 text-sm">Premium Automotive Care & Services</p>
                    </div>
                    <div className="flex gap-5 mt-6 md:mt-0">
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all duration-300"><Facebook size={16} /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all duration-300"><Instagram size={16} /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all duration-300"><Twitter size={16} /></a>
                    </div>
                </div>

                {/* Contact Row */}
                <div className="flex flex-col md:flex-row gap-8 mb-16 pb-10 border-b border-gray-800">
                    <div className="flex items-start gap-3 text-sm">
                        <Phone size={15} className="text-gray-600 mt-1 shrink-0" />
                        <div className="flex flex-wrap gap-x-6 gap-y-1">
                            <span>9840610610</span>
                            <span>9840610645</span>
                            <span>9840610848</span>
                            <span>9840610691</span>
                            <span>9444019883</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <Mail size={15} className="text-gray-600 shrink-0" />
                        <span>service@globalmotors.com</span>
                    </div>
                </div>

                {/* Branch Locator */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-white font-semibold uppercase text-xs tracking-[0.2em]">Branch Locator</h3>
                        <button
                            onClick={() => setMapExpanded(!mapExpanded)}
                            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs uppercase tracking-wider"
                        >
                            {mapExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                            {mapExpanded ? 'Collapse' : 'Expand Map'}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left: Branch Cards */}
                        <div className="lg:col-span-1 flex flex-col gap-3">
                            {branches.map((branch, index) => (
                                <button
                                    key={branch.name}
                                    onClick={() => setActiveBranch(index)}
                                    className={`relative text-left p-5 rounded-lg border transition-all duration-300 ${activeBranch === index
                                            ? 'border-white bg-white/5'
                                            : 'border-gray-800 hover:border-gray-600 bg-transparent'
                                        }`}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin size={14} className={activeBranch === index ? 'text-white' : 'text-gray-600'} />
                                        <span className={`font-semibold text-sm uppercase tracking-wider ${activeBranch === index ? 'text-white' : 'text-gray-400'
                                            }`}>
                                            {branch.name}
                                        </span>
                                        {branch.tag && (
                                            <span className="ml-auto text-[10px] uppercase tracking-wider bg-white/10 text-gray-400 px-2 py-0.5 rounded-full">
                                                {branch.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className={`text-xs leading-relaxed ${activeBranch === index ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        {branch.address}
                                    </p>
                                    {/* Active indicator */}
                                    {activeBranch === index && (
                                        <motion.div
                                            layoutId="activeBranch"
                                            className="absolute left-0 top-3 bottom-3 w-0.5 bg-white rounded-full"
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Right: Map */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={false}
                                animate={{ height: mapExpanded ? 450 : 280 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden rounded-lg border border-gray-800 relative"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeBranch}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full absolute inset-0"
                                    >
                                        <iframe
                                            src={branches[activeBranch].mapUrl}
                                            width="100%"
                                            height="100%"
                                            style={{
                                                border: 0,
                                                minHeight: mapExpanded ? 450 : 280,
                                                filter: 'invert(90%) hue-rotate(180deg) brightness(1.05) contrast(0.9)',
                                            }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`Global Motors ${branches[activeBranch].name} Location`}
                                        ></iframe>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                            <a
                                href={branches[activeBranch].mapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-gray-600 hover:text-white text-xs mt-3 transition-colors"
                            >
                                <MapPin size={12} />
                                Open {branches[activeBranch].name} in Google Maps →
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <span>&copy; {new Date().getFullYear()} Global Motors. All rights reserved.</span>
                    <div className="flex gap-6 mt-3 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
