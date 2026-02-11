"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.heroCard}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.badge}>
                            <Calendar size={18} />
                            <span>May 2nd, 2026 . Enugu, Nigeria</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Creatorverse<span>2026</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Shaping The Future Of The Creator Economy
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Button variant="primary" size="lg" className={styles.buyButton} onClick={() => window.open('#tickets', '_self')}>
                            Buy Tickets
                        </Button>

                        <a href="#" className={styles.linkButton}>
                            Join Our Newsletter <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>

                {/* Collage Images */}
                <div className={styles.collageContainer}>
                    {/* Pink Image */}
                    <motion.div
                        className={`${styles.collageImage} ${styles.pinkImage}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="Creator" />
                    </motion.div>

                    {/* Blue Image */}
                    <motion.div
                        className={`${styles.collageImage} ${styles.blueImage}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80" alt="Creator" />
                    </motion.div>

                    {/* Green Image */}
                    <motion.div
                        className={`${styles.collageImage} ${styles.greenImage}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=400&q=80" alt="Creator" />
                    </motion.div>

                    {/* Red Image */}
                    <motion.div
                        className={`${styles.collageImage} ${styles.redImage}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80" alt="Creator" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
