"use client";

import React from 'react';
import styles from './Blog.module.css';

// Using placeholder images for now
const posts = [
    { title: "Content Creation in 2026", date: "Jan 12, 2026", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" },
    { title: "Monetizing Your Passion", date: "Jan 15, 2026", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" },
    { title: "The Future of AI in Media", date: "Jan 20, 2026", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80" },
];

export default function Blog() {
    return (
        <section className={`section-padding ${styles.section}`} id="blog">
            <div className="container">
                <h2 className={styles.heading}>Blogs</h2>
                <div className={styles.grid}>
                    {posts.map((p, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.image} style={{ backgroundImage: `url(${p.image})` }}></div>
                            <div className={styles.content}>
                                <div className={styles.date}>{p.date}</div>
                                <h3 className={styles.title}>{p.title}</h3>
                                <a href="#" className={styles.readMore}>Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
