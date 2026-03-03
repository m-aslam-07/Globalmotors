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
        <div className="min-h-screen pt-[74px]" style={{ backgroundColor: '#f9fafb' }}>

            {/* ── Mobile category toggle ── */}
            <div className="md:hidden px-5 pt-5 pb-2">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="w-full flex items-center justify-between rounded-xl px-5 py-3.5 text-sm font-semibold text-gray-800"
                    style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
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
                            className="overflow-hidden mt-1 bg-white shadow-md"
                            style={{ borderRadius: '12px', border: '1px solid #e5e7eb' }}
                        >
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.key}
                                    onClick={() => { setActiveKey(cat.key); setMobileOpen(false); }}
                                    className="w-full text-left px-5 py-3.5 text-sm transition-colors"
                                    style={{
                                        fontWeight: activeKey === cat.key ? '700' : '500',
                                        color: activeKey === cat.key ? '#111' : '#4b5563',
                                        background: activeKey === cat.key ? '#f3f4f6' : 'transparent',
                                        borderLeft: activeKey === cat.key ? '3px solid #111' : '3px solid transparent',
                                    }}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ── Two-column layout ── */}
            <div className="max-w-7xl mx-auto flex gap-0 md:gap-8 px-4 md:px-8 py-6 md:py-12">

                {/* ── Sidebar (desktop only) ── */}
                <aside className="hidden md:flex flex-col w-72 shrink-0">
                    <div
                        className="sticky"
                        style={{
                            top: '90px',
                            background: '#ffffff',
                            borderRadius: '16px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                            overflow: 'hidden',
                        }}
                    >
                        <p style={{
                            padding: '20px 20px 12px',
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.18em',
                            color: '#9ca3af',
                            fontWeight: '700',
                            borderBottom: '1px solid #f3f4f6',
                        }}>
                            Categories
                        </p>
                        {CATEGORIES.map((cat) => {
                            const isActive = activeKey === cat.key;
                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setActiveKey(cat.key)}
                                    className="w-full text-left transition-all duration-200"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        padding: '13px 20px',
                                        fontSize: '0.875rem',
                                        fontWeight: isActive ? '700' : '500',
                                        color: isActive ? '#111' : '#4b5563',
                                        background: isActive ? '#f9fafb' : 'transparent',
                                        borderLeft: isActive ? '3px solid #111' : '3px solid transparent',
                                        borderBottom: '1px solid #f3f4f6',
                                    }}
                                >
                                    {isActive && <ChevronRight size={13} style={{ flexShrink: 0, color: '#111' }} />}
                                    <span style={{ paddingLeft: isActive ? 0 : '23px' }}>{cat.label}</span>
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
                            <div style={{ marginBottom: '32px' }}>
                                <h2 style={{
                                    fontSize: '1.75rem',
                                    fontFamily: 'Georgia, serif',
                                    fontWeight: '700',
                                    color: '#111',
                                    marginBottom: '10px',
                                    lineHeight: 1.2,
                                }}>
                                    {activeCategory.label}
                                </h2>
                                <div style={{ width: '40px', height: '2px', background: '#111', borderRadius: '2px' }} />
                                <p style={{ marginTop: '10px', fontSize: '0.875rem', color: '#9ca3af' }}>
                                    {activeCategory.subServices.length} service{activeCategory.subServices.length !== 1 ? 's' : ''} available
                                </p>
                            </div>

                            {/* Sub-services grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                                gap: '16px',
                            }}>
                                {activeCategory.subServices.map((sub, i) => (
                                    <motion.div
                                        key={sub}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.22, delay: i * 0.05 }}
                                        style={{
                                            background: '#ffffff',
                                            border: '1px solid #eaeaea',
                                            borderRadius: '10px',
                                            padding: '20px 22px',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '14px',
                                            cursor: 'default',
                                            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                            fontFamily: "'Inter', sans-serif",
                                        }}
                                        whileHover={{
                                            y: -4,
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        <span style={{
                                            marginTop: '5px',
                                            width: '7px',
                                            height: '7px',
                                            borderRadius: '50%',
                                            background: '#111',
                                            flexShrink: 0,
                                        }} />
                                        <span style={{
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            color: '#1f2937',
                                            lineHeight: '1.5',
                                        }}>
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

