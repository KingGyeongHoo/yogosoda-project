'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
function RedirectOnResize() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            if (window.innerWidth > 768) {
                router.push('/');
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [router]);

    return null;
}

export default RedirectOnResize;
