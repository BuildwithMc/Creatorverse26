"use client";

import React from 'react';
import styles from './Schedule.module.css';

const PinkSquiggle = () => (
    <svg className={styles.pinkSquiggle} viewBox="0 0 334 148" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9157 101.996C59.9822 64.9189 104.975 80.208 142.152 103.737C170.838 121.889 187.641 120.306 202.978 107.037C215.118 96.5332 216.592 78.4355 210.875 63.6019C199.141 33.1611 230.932 7.76634 260.672 17.5833C290.412 27.4003 355.656 50.8576 397.747 38.625" stroke="#FF99CC" strokeWidth="24" strokeLinecap="round" />
    </svg>
);

export default function Schedule() {
    return (
        <section className={`section-padding ${styles.section}`} id="schedule">
            <div className={styles.container}>

                {/* Header Area */}
                <div className={styles.headerRow}>
                    <h2 className={styles.heading}>
                        <span>Your Day</span> In<br />One Glance
                    </h2>
                    <PinkSquiggle />
                </div>

                {/* Folder UI */}
                <div className={styles.folderContainer}>
                    <div className={styles.tab}>SAT 2</div>
                    <div className={styles.folderBody}>

                        <div className={styles.folderHeader}>
                            <div className={styles.folderTitle}>Launch Day</div>
                            <button className={styles.ticketButton} onClick={() => window.open('#tickets', '_self')}>
                                Buy Tickets
                            </button>
                        </div>

                        <div className={styles.scheduleList}>
                            <div className={styles.scheduleItem}></div>
                            <div className={styles.scheduleItem}></div>
                            <div className={styles.scheduleItem}></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
