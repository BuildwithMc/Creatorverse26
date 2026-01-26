"use client";

import React from 'react';
import { Button } from './ui/Button';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">

                <div className={styles.newsletterBox}>
                    <div className={styles.newsletterContent}>
                        <h2 className={styles.newsTitle}>
                            Sign Up, <span>Stay Updated</span>
                        </h2>
                        <p style={{ color: '#aaa' }}>
                            be the first to know the latest news speakers and schedule updates
                        </p>

                        <form className={styles.inputGroup} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className={styles.input} required />
                            <Button type="submit" variant="primary">Subscribe</Button>
                        </form>
                    </div>

                    <div className={styles.qrContainer}>
                        {/* Placeholder QR */}
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Creatorverse2026" alt="QR Code" className={styles.qr} />
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.logo}>Creatorverse</div>

                    <div className={styles.links}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">Contact Us</a>
                    </div>

                    <div className={styles.copyright}>
                        © 2026 Creatorverse. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}
