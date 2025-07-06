'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeadline() {
    const words = "Quality Products".split(" ");
    return (
        <h2 className="text-3xl md:text-5xl font-bold">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                >
                    {word}
                </motion.span>
            ))}
        </h2>
    );
}
