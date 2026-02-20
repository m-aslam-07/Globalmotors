import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Check } from 'lucide-react';

const serviceOptions = [
    "Car Services",
    "Insurance Claims",
    "AC Service & Repair",
    "Batteries",
    "Detailing Services",
    "Car Inspections",
    "Tyres & Wheel Care",
    "Denting, Tinkering & Painting",
    "Clutch and Body Parts",
    "24 X 7 Road Assistance",
];

const EnquiryForm = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const toggleService = (service) => {
        setSelectedServices((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!phone.trim() && !email.trim()) {
            setError('Please provide either a phone number or email');
            return;
        }
        setError('');
        setSubmitted(true);
    };

    return (
        <section id="enquiry" className="py-24 bg-gray-50">
            <div className="max-w-2xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    {submitted ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center py-20"
                        >
                            <CheckCircle size={56} className="text-green-500 mx-auto mb-8" />
                            <p className="text-black text-xl font-light leading-relaxed">
                                Thank you for approaching us! Our team will contact you shortly.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Header */}
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">
                                    Contact Us
                                </h2>
                                <div className="w-12 h-0.5 bg-black mx-auto mb-4"></div>
                                <p className="text-gray-500 text-sm">
                                    Select the services you need and we'll get back to you.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Phone & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-medium">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => { setPhone(e.target.value); setError(''); }}
                                            placeholder="Enter your phone number"
                                            className="w-full border border-gray-200 text-black px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder-gray-400 bg-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-medium">
                                            Email ID
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                            placeholder="Enter your email"
                                            className="w-full border border-gray-200 text-black px-4 py-3.5 text-sm rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder-gray-400 bg-white"
                                        />
                                    </div>
                                </div>

                                {/* Helper */}
                                <p className="text-gray-400 text-xs -mt-4">
                                    * Either phone number or email is required.
                                </p>

                                {/* Services Grid */}
                                <div>
                                    <label className="block text-gray-800 text-xs uppercase tracking-wider mb-4 font-medium">
                                        Select Services
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {serviceOptions.map((service) => {
                                            const isSelected = selectedServices.includes(service);
                                            return (
                                                <button
                                                    key={service}
                                                    type="button"
                                                    onClick={() => toggleService(service)}
                                                    className={`relative flex items-center gap-2.5 px-4 py-3.5 rounded-lg border text-left text-sm transition-all duration-200 ${isSelected
                                                            ? 'border-black bg-black text-white shadow-md'
                                                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:shadow-sm'
                                                        }`}
                                                >
                                                    <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all duration-200 ${isSelected
                                                            ? 'bg-white'
                                                            : 'border-2 border-gray-300'
                                                        }`}>
                                                        {isSelected && <Check size={13} className="text-black" strokeWidth={3} />}
                                                    </div>
                                                    <span className="leading-tight">{service}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Error */}
                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-red-500 text-sm"
                                    >
                                        {error}
                                    </motion.p>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-lg"
                                >
                                    Enquire
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default EnquiryForm;
