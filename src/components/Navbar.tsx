"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import '../app/sections.css';

const navLinks = [
    { name: 'Why Creatorverse', href: '#why' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="navbar-header">
            <div className="navbar-container">
                <Link href="/" className="navbar-logo">
                    Creatorverse
                </Link>

                {/* Desktop Menu - Centered */}
                <nav className="navbar-desktop-menu">
                    <Link href="#schedule" className="navbar-link">Schedule</Link>
                    <Link href="#speakers" className="navbar-link">Speakers</Link>
                    <Link href="#tickets" className="navbar-link">Tickets</Link>
                    <Link href="#blog" className="navbar-link">Blog</Link>
                    <Link href="#faq" className="navbar-link">FAQ&apos;s</Link>
                </nav>

                {/* Right Side Button */}
                <div className="navbar-auth-buttons">
                    <Button variant="primary" size="md" className="navbar-buy-button" onClick={() => window.open('#tickets', '_self')}>
                        Buy Tickets
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="navbar-mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div className={`navbar-mobile-menu ${isOpen ? 'navbar-mobile-menu-open' : ''}`}>
                    <Link href="#schedule" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Schedule</Link>
                    <Link href="#speakers" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Speakers</Link>
                    <Link href="#tickets" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Tickets</Link>
                    <Link href="#blog" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link href="#faq" className="navbar-mobile-link" onClick={() => setIsOpen(false)}>FAQ&apos;s</Link>

                    <Button variant="primary" size="lg" className="w-full" onClick={() => {
                        setIsOpen(false);
                        window.open('#tickets', '_self');
                    }}>
                        Buy Tickets
                    </Button>
                </div>
            </div>
        </header>
    );
}
