"use client";

import React from 'react';
import styles from './WhyCreatorverse.module.css';

// Custom SVGs for shapes to match the design
const GreenSquiggle = () => (
    <svg viewBox="0 0 493 151" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.squiggle}>
        <path d="M11.6066 99.4526C51.644 63.8587 113.364 88.0867 151.722 108.629C175.641 121.439 203.255 138.892 230.158 128.526C245.394 122.656 256.404 110.198 266.368 97.4369C286.061 72.2104 290.722 36.6358 316.593 17.6534C344.646 -2.93046 384.629 15.6596 414.717 28.562C439.141 39.0345 464.218 51.5794 489.948 57.6596" stroke="#00ba70" strokeWidth="18" strokeLinecap="round" />
    </svg>
);

const BlueBlob = () => (
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M76.9 76.2C68.9 90.9 44.5 95.8 28.8 85.3 13.1 74.8 6.1 48.9 14.1 34.2 22.1 19.5 46.5 14.6 62.2 25.1 77.9 35.6 84.9 61.5 76.9 76.2Z" />
    </svg>
);

const GreenAsterisk = () => (
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L61 35H98L68 57L79 92L50 70L21 92L32 57L2 35H39L50 0Z" style={{ strokeLinejoin: 'round', strokeWidth: '10', stroke: 'currentColor' }} />
        {/* Simplified star shape */}
        <circle cx="50" cy="50" r="20" />
        <rect x="40" y="0" width="20" height="100" rx="10" />
        <rect x="40" y="0" width="20" height="100" rx="10" transform="rotate(60 50 50)" />
        <rect x="40" y="0" width="20" height="100" rx="10" transform="rotate(-60 50 50)" />
    </svg>
);

const PinkCloud = () => (
    <svg viewBox="0 0 100 70" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 60C8.9543 60 0 51.0457 0 40C0 28.9543 8.9543 20 20 20C22.463 20 24.814 20.445 27.009 21.265C29.679 9.389 40.245 0.5 53 0.5C67.912 0.5 80 12.588 80 27.5C80 28.163 79.967 28.816 79.902 29.459C80.264 29.442 80.63 29.432 81 29.432C91.493 29.432 100 37.939 100 48.432C100 58.925 91.493 67.432 81 67.432H20V60Z" transform="scale(0.9) translate(5,5)" />
    </svg>
);

const PinkDiamond = () => (
    <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C65 25 75 35 100 50C75 65 65 75 50 100C35 75 25 65 0 50C25 35 35 25 50 0Z" />
    </svg>
);


export default function WhyCreatorverse() {
    return (
        <section className={`section-padding ${styles.section}`} id="why">
            <div className="container">

                {/* Intro Section */}
                <div className={styles.introSection}>
                    <div className={styles.introText}>
                        <p style={{ marginBottom: '1rem' }}>
                            Creatorverse is a community for writers, designers, editors, and creators of all niches starting off with Enugu, Southeast Nigeria, with a goal of reaching the world.
                        </p>
                        <p>
                            Our pioneer event, is the perfect place to create, connect, and elevate in the years ahead! If you&apos;re tired of creating alone, passionate for communal growth, this is the home for you.
                        </p>
                    </div>
                    <div className={styles.introTitle}>
                        Shaping The Future Of The Creator Economy
                    </div>
                </div>

                {/* Heading */}
                <div className={styles.headingWrapper}>
                    <GreenSquiggle />
                    <h2 className={styles.heading}>Why Creatorverse</h2>
                </div>

                {/* Highlight Card */}
                <div className={styles.card}>
                    <div className={styles.cardText}>
                        If you text, take pictures, record audio or videos, tell stories or have a knack for idea generation, you are a creator, and Creatorverse 2026 is exactly what you need.
                    </div>

                    <div className={`${styles.decoration} ${styles.blueBlob}`}>
                        <BlueBlob />
                    </div>

                    <div className={`${styles.decoration} ${styles.greenStar}`}>
                        <GreenAsterisk />
                    </div>

                    <div className={`${styles.decoration} ${styles.pinkCloud}`}>
                        <PinkCloud />
                    </div>

                    <div className={`${styles.decoration} ${styles.pinkDiamond}`}>
                        <PinkDiamond />
                    </div>
                </div>
            </div>
        </section>
    );
}
