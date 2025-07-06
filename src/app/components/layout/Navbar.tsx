'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Our Portfolio', href: '/portfolio' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Darna Loyalty Programme', href: '/loyalty' },
    { name: 'Latest News', href: '/news' },
  ];

  return (
    <>
      <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-sm border-b max-w-7xl w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left (can place logo here) */}
          <div className="w-32 hidden md:block" />

          {/* Center nav links */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-black transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="border border-black text-sm px-4 py-2 rounded hover:bg-black hover:text-white transition whitespace-nowrap"
            >
              Contact Us →
            </Link>
          </div>

          {/* Mobile menu icon */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-black"
            aria-label="Open menu"
          >
            <IconMenu2 size={26} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark background */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Side menu */}
            <motion.div
              className="fixed top-0 left-0 w-72 h-full bg-white z-50 p-6 shadow-lg"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
            >
              {/* Close icon */}
              <div className="flex justify-end">
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <IconX size={24} />
                </button>
              </div>

              {/* Links */}
              <nav className="mt-6 space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-gray-800 hover:text-black"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Contact button */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition rounded"
                >
                  Contact Us →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
