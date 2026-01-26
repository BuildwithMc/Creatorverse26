"use client";

import React from 'react';
import styles from './Speakers.module.css';

export default function Speakers() {
    return (
        <section className={`section-padding ${styles.section}`} id="speakers">
            <div className="container" style={{ maxWidth: '100%', padding: '0 2rem' }}>
                <h2 className={styles.heading}>Speakers</h2>
                <p className={styles.textBlock}>
                    The faces shaping this year&apos;s Creatorverse experience.<br />
                    Four bold creators – industry pros and rising voices – bringing real stories, real lessons, and the spark your next big move needs.
                </p>

                <div className={styles.speakersContainer}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={styles.slot}>
                            <div className={styles.questionMark}>?</div>
                            <div className={styles.silhouette}></div>
                        </div>
                    ))}

                    <div className={styles.overlay}>
                        <div className={styles.comingSoonText}>COMING SOON...</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
