import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const segments = [
    { start: 0, end: 8, title: "Road Side Assistance" },
    { start: 8, end: 16, title: "Insurance Claims" },
    { start: 16, end: 24, title: "Car Inspection" },
    { start: 24, end: 32, title: "AC Service" },
    { start: 32, end: 40, title: "Interior Detailing" },
    { start: 40, end: 48, title: "Battery Replacements" },
    { start: 48, end: 53.3, title: "Tyre and Wheel Care" },
    { start: 53.3, end: 61.3, title: "Denting and Tinkering" },
    { start: 61.3, end: 69.3, title: "Painting" },
    { start: 69.3, end: Infinity, title: "Exterior Detailing" },
];

const ServicesPage = () => {
    const videoRef = useRef(null);
    const [currentTitle, setCurrentTitle] = useState(segments[0].title);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            const t = video.currentTime;
            const duration = video.duration || 1;
            setProgress((t / duration) * 100);

            for (let i = 0; i < segments.length; i++) {
                if (t >= segments[i].start && t < segments[i].end) {
                    if (activeIndex !== i) {
                        setActiveIndex(i);
                        setCurrentTitle(segments[i].title);
                    }
                    break;
                }
            }
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, [activeIndex]);

    const jumpToSegment = (index) => {
        if (videoRef.current) {
            videoRef.current.currentTime = segments[index].start;
            setActiveIndex(index);
            setCurrentTitle(segments[index].title);
        }
    };

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            {/* Video Background */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="/fullvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Top Navigation Bar */}
            <div className="absolute top-0 left-0 right-0 z-30 p-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm uppercase tracking-widest"
                    >
                        <ArrowLeft size={18} />
                        <span>Back</span>
                    </Link>
                    <h1 className="text-xl font-serif font-bold text-white tracking-widest">
                        GLOBAL MOTORS
                    </h1>
                </div>
            </div>

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 z-40 h-1 bg-white/10">
                <div
                    className="h-full bg-white transition-all duration-300 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Center: Dynamic Title */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2
                            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold tracking-wide"
                            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.6)' }}
                        >
                            {currentTitle}
                        </h2>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom: Segment Timeline */}
            <div className="absolute bottom-0 left-0 right-0 z-30 pb-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                        {segments.map((seg, i) => (
                            <button
                                key={i}
                                onClick={() => jumpToSegment(i)}
                                className={`shrink-0 px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 border ${i === activeIndex
                                        ? 'bg-white text-black border-white'
                                        : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm'
                                    }`}
                            >
                                {seg.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
