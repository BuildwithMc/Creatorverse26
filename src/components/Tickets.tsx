"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import '../app/sections.css';

const tickets = [
    {
        type: 'EARLY BIRD TICKET',
        price: '[₦3,500]',
        subtext: 'Discount on tickets bought before the event',
        color: 'pink',
        features: ['Full access to Creatorverse 2026', 'Entry to all talks & panels', 'Access to networking sessions', 'Creatorverse digital badge'],
    },
    {
        type: 'REGULAR TICKET',
        price: '[₦10,000]',
        subtext: 'Open to everyone - creators ready to level up',
        color: 'blue',
        features: ['Everything in Early Bird', 'Priority seating', 'Access to Creatorverse workshops', 'Event resource pack'],
    },
    {
        type: 'EXECUTIVE TICKET',
        price: '[₦20,000]',
        subtext: 'Best for founders and brand builders',
        color: 'green',
        features: ['Everything in Regular', 'Reserved seating', 'Access to Speaker meet and greet', 'Premium event materials'],
    },
    {
        type: 'VIP TICKET',
        price: '[₦30,000]',
        subtext: 'Best for industry leaders and premium guests',
        color: 'red',
        features: ['Everything in Executive', 'Front-row seating', 'Private session with speakers', 'Dedicated on-site support'],
    },
];

export default function Tickets() {
    return (
        <section className="tickets-section" id="tickets">
            <div className="tickets-container">
                <div className="tickets-decorative-blob" />

                <div className="tickets-header-wrapper">
                    <h2 className="tickets-heading">Get Your <span>Tickets</span> Now</h2>
                    <p className="tickets-sub-heading">Secure your spot in the Creatorverse.</p>
                </div>

                <div className="tickets-grid">
                    {tickets.map((t, i) => (
                        <div key={i} className={`tickets-card tickets-${t.color}`}>
                            <div className="tickets-card-header">
                                <div className="tickets-header-top">
                                    <div className="tickets-card-title">{t.type}</div>
                                    <div className="tickets-price">{t.price}</div>
                                </div>
                                <p className="tickets-card-subtext">{t.subtext}</p>
                            </div>
                            <div className="tickets-divider"></div>

                            <ul className="tickets-features">
                                {t.features.map((f, fi) => (
                                    <li key={fi} className="tickets-feature">
                                        <span className="tickets-icon-wrapper">
                                            <ArrowRight size={14} />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className={`tickets-button tickets-${t.color}-button`}>
                                Buy Tickets
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
