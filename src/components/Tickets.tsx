"use client";

import React from 'react';
import { Check } from 'lucide-react';
import styles from './Tickets.module.css';

const tickets = [
    {
        type: 'Early Bird Ticket',
        price: '₦5,000',
        color: 'pink',
        features: ['Full access to all keynote sessions', 'Access to breakout sessions', 'Networking opportunities', 'Digital certificate'],
    },
    {
        type: 'Access To Bonus',
        price: '₦10,000',
        color: 'blue',
        features: ['All Early Bird benefits', 'Priority seating', 'VIP Lounge access', 'Exclusive swag bag'],
    },
    {
        type: 'Eco/Student',
        price: '₦3,000',
        color: 'green',
        features: ['Keynote sessions', 'Networking', 'Digital certificate', 'Student ID required'],
    },
    {
        type: 'VIP Ticket',
        price: '₦50,000',
        color: 'red',
        features: ['All Access benefits', 'Speaker dinner invite', '1-on-1 mentorship session', 'Premium swag'],
    },
];

export default function Tickets() {
    return (
        <section className={`section-padding ${styles.section}`} id="tickets">
            <div className="container">
                <h2 className={styles.heading}>Get Your <span>Tickets</span> Now</h2>

                <div className={styles.grid}>
                    {tickets.map((t, i) => (
                        <div key={i} className={`${styles.card} ${styles[t.color]}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardTitle}>{t.type}</div>
                                <div className={styles.price}>{t.price}</div>
                            </div>

                            <ul className={styles.features}>
                                {t.features.map((f, fi) => (
                                    <li key={fi} className={styles.feature}>
                                        <span className={styles.check}>
                                            <Check size={12} strokeWidth={3} />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <button className={styles[`${t.color}Button`]}>
                                Get Ticket
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
