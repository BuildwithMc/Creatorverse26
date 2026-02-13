"use client";

import React from 'react';
import '../app/sections.css';

export default function Newsletter() {
    return (
        <section className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-box">
                    <div className="newsletter-blob1"></div>
                    <div className="newsletter-blob2"></div>

                    <div className="newsletter-content">
                        <h2 className="newsletter-title">
                            Sign Up, <span>Stay Updated</span>
                        </h2>
                        <p className="newsletter-subtitle">
                            Receive weekly creatorverse updates.
                        </p>

                        <form className="newsletter-input-group" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                            <button type="submit" className="newsletter-subscribe-button">Subscribe Now</button>
                        </form>
                    </div>

                    <div className="newsletter-qr-section">
                        <div className="newsletter-qr-container">
                            {/* Placeholder QR to match style */}
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Creatorverse2026&color=000000" alt="QR Code" className="newsletter-qr" />
                        </div>
                        <span className="newsletter-scan-text">Scan QR code</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
