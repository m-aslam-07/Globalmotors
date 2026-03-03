import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';

// ─── Service Data ──────────────────────────────────────────────────────────────
const CATEGORIES = [
    {
        key: 'insurance-claims',
        label: 'Insurance Claims',
        subServices: [
            'Book your Insurance Policy',
            'Claim your Insurance – Accidental Repairs',
            'Claim your Insurance – Fire Damage',
            'Claim your Insurance – Flood Damage',
            'Theft Coverage',
            'Inspection',
        ],
    },
    {
        key: 'ac-service',
        label: 'AC Service & Repair',
        subServices: [
            'Regular AC Service',
            'High Performance AC Service',
            'AC Parts Replacement',
        ],
    },
    {
        key: 'batteries',
        label: 'Batteries',
        subServices: [
            'Battery Replacement',
            'Alternator Replacement',
        ],
    },
    {
        key: 'detailing',
        label: 'Detailing Services',
        subServices: [
            'Normal Wash',
            'Polishing',
            'Interior Detailing',
            'Executive Wash',
            'Ceramic Coating',
            'Teflon Coating',
            'PPF',
            'Anti-Rust Coating',
        ],
    },
    {
        key: 'car-inspections',
        label: 'Car Inspections',
        subServices: [
            'Road Trip Inspection',
            'General Car Inspection',
            'Second Hand Car Inspection',
            'Complete Car Inspection',
        ],
    },
    {
        key: 'tyres',
        label: 'Tyres & Wheel Care',
        subServices: [
            'Tyre Replacement',
            'Tyre Balancing Inspection',
            'Tyre Alignment Inspection',
            'Complete Wheel Care',
            'Mud Flaps Replacement',
        ],
    },
    {
        key: 'denting',
        label: 'Denting, Tinkering & Painting',
        subServices: [
            'Full Body Paint',
            'Front Bumper Paint',
            'Front Bonnet Paint',
            'Rear Bumper Paint',
            'Rear Boot Paint',
            'Alloy Painting',
            'Fender Painting',
            'Door Painting',
            'Quarter Panel Paint',
            'Running Board Paint',
        ],
    },
    {
        key: 'clutch',
        label: 'Clutch and Body Parts',
        subServices: [
            'Clutch Set Replacement',
            'Flywheel Replacement',
            'Clutch Bearing Replacement',
            'Body Panels Replacement',
            'Speakers',
        ],
    },
    {
        key: 'road-assistance',
        label: '24 × 7 Road Assistance',
        subServices: [
            'Towing Services',
            'Fuel Assistance',
            'Battery Jumpstart',
            'Tyre Puncture Assistance',
        ],
    },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const ServicesDetailPage = () => {
    const [searchParams] = useSearchParams();
    const [activeKey, setActiveKey] = useState(CATEGORIES[0].key);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Honour ?category= deep-link on mount / param change
    useEffect(() => {
        const param = searchParams.get('category');
        if (param) {
            const match = CATEGORIES.find((c) => c.key === param);
            if (match) setActiveKey(match.key);
        }
    }, [searchParams]);

    const activeCategory = CATEGORIES.find((c) => c.key === activeKey) || CATEGORIES[0];

    return (
        <div className="min-h-screen bg-white pt-[74px]">
            {/* ── Page Header ── */}
            <div className="bg-white border-b border-gray-100 px-6 py-5 flex items-center gap-4 max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-1.5 text-gray-500 hover:text-black transition-colors text-sm uppercase tracking-widest"
                >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                </Link>
                <span className="text-gray-200 text-lg select-none">|</span>
                <h1 className="text-xl font-serif font-bold text-black tracking-wide">Our Services</h1>
            </div>

            {/* ── Mobile category toggle ── */}
            <div className="md:hidden px-6 pt-4">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-5 py-3 text-sm font-semibold text-gray-800 bg-gray-50"
                >
                    <span>{activeCategory.label}</span>
                    <ChevronRight
                        size={18}
                        className={`transition-transform duration-200 ${mobileOpen ? 'rotate-90' : ''}`}
                    />
                </button>
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden border border-gray-200 rounded-xl mt-1 bg-white shadow-md"
                        >
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => { setActiveKey(cat.key); setMobileOpen(false); }}
                                    className={`w-full text-left px-5 py-3 text-sm transition-colors ${activeKey === cat.key ? 'bg-black text-white font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ── Two-column layout ── */}
            <div className="max-w-7xl mx-auto flex gap-0 md:gap-8 px-4 md:px-6 py-6 md:py-10">

                {/* ── Sidebar (desktop only) ── */}
                <aside className="hidden md:flex flex-col w-64 shrink-0">
                    <div className="sticky top-[90px] bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                        <p className="px-5 pt-5 pb-3 text-xs uppercase tracking-widest text-gray-400 font-semibold">
                            Categories
                        </p>
                        {CATEGORIES.map((cat) => {
                            const isActive = activeKey === cat.key;
                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setActiveKey(cat.key)}
                                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 flex items-center gap-2 ${isActive
                                            ? 'bg-black text-white'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                                        }`}
                                >
                                    {isActive && <ChevronRight size={14} className="shrink-0" />}
                                    <span className={isActive ? '' : 'pl-[18px]'}>{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* ── Main Content ── */}
                <main className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory.key}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            {/* Category Title */}
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-2">
                                    {activeCategory.label}
                                </h2>
                                <div className="w-12 h-0.5 bg-black" />
                            </div>

                            {/* Sub-services grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {activeCategory.subServices.map((sub, i) => (
                                    <motion.div
                                        key={sub}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.25, delay: i * 0.05 }}
                                        className="flex items-start gap-3 p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                                    >
                                        <span className="mt-0.5 w-2 h-2 rounded-full bg-black shrink-0" />
                                        <span className="text-gray-800 text-sm font-medium leading-snug">
                                            {sub}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default ServicesDetailPage;
