"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
    { question: "When is Creatorverse 2026?", answer: "Creatorverse 2026 will be held on April 18 & 25, 2026 in Enugu, South-East Nigeria." },
    { question: "Who can attend?", answer: "Everyone! Creators, students, business owners, brand managers, and investors are all welcome." },
    { question: "Are tickets refundable?", answer: "Ticket sales are final, but you can transfer your ticket to another person up to 48 hours before the event." },
    { question: "Is there a virtual option?", answer: "Yes, we will have a livestream for key sessions available for digital ticket holders." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className={`section-padding ${styles.section}`} id="faq">
            <div className="container">
                <h2 className={styles.heading}>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                    {faqs.map((f, i) => (
                        <div key={i} className={styles.item}>
                            <button
                                className={`${styles.trigger} ${openIndex === i ? styles.open : ''}`}
                                onClick={() => toggle(i)}
                            >
                                {f.question}
                                <ChevronDown className={styles.icon} />
                            </button>
                            <div className={`${styles.content} ${openIndex === i ? styles.open : ''}`}>
                                <div className={styles.body}>{f.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
