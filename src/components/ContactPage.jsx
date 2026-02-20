import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ContactPage = () => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [branch, setBranch] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!phone.trim() && !email.trim()) {
            setError('Please provide either a phone number or email');
            return;
        }
        if (!branch) {
            setError('Please select a preferred branch');
            return;
        }

        setError('');
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="w-full p-6 border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-widest"
                    >
                        <ArrowLeft size={18} />
                        <span>Back</span>
                    </Link>
                    <h1 className="text-xl font-serif font-bold text-black tracking-widest">
                        GLOBAL MOTORS
                    </h1>
                </div>
            </header>

            {/* Centered Form */}
            <div className="flex-1 flex items-center justify-center px-6 py-16">
                <div className="w-full max-w-md">
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center py-16"
                            >
                                <CheckCircle size={56} className="text-green-500 mx-auto mb-8" />
                                <p className="text-black text-xl font-light leading-relaxed">
                                    Thank you for approaching us! Our team will contact you shortly.
                                </p>
                                <Link
                                    to="/"
                                    className="inline-block mt-10 text-sm text-gray-500 hover:text-black uppercase tracking-widest transition-colors"
                                >
                                    ← Return Home
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">
                                        Contact Us
                                    </h2>
                                    <div className="w-12 h-0.5 bg-black mx-auto mb-4"></div>
                                    <p className="text-gray-500 text-sm">
                                        Fill in the details below and we'll get back to you.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Phone */}
                                    <div>
                                        <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-medium">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => { setPhone(e.target.value); setError(''); }}
                                            placeholder="Enter your phone number"
                                            className="w-full border border-gray-200 text-black px-4 py-3.5 text-sm rounded-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400 bg-gray-50"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-medium">
                                            Email ID
                                        </label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                            placeholder="Enter your email"
                                            className="w-full border border-gray-200 text-black px-4 py-3.5 text-sm rounded-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400 bg-gray-50"
                                        />
                                    </div>

                                    {/* Branch */}
                                    <div>
                                        <label className="block text-gray-800 text-xs uppercase tracking-wider mb-2 font-medium">
                                            Select Branch <span className="text-red-400">*</span>
                                        </label>
                                        <select
                                            value={branch}
                                            onChange={(e) => { setBranch(e.target.value); setError(''); }}
                                            className="w-full border border-gray-200 text-black px-4 py-3.5 text-sm rounded-sm focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer bg-gray-50"
                                        >
                                            <option value="">Choose a branch</option>
                                            <option value="Kolathur">Kolathur</option>
                                            <option value="Ambattur">Ambattur</option>
                                            <option value="Thiruverkadu">Thiruverkadu</option>
                                        </select>
                                    </div>

                                    {/* Helper text */}
                                    <p className="text-gray-400 text-xs">
                                        * Either phone number or email is required.
                                    </p>

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
                                        className="w-full bg-black text-white py-4 text-sm font-semibold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-sm"
                                    >
                                        Enquire
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
