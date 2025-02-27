import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedSection = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeInOut",
            }}

        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection