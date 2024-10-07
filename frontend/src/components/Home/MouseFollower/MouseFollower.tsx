import React, { useState, useEffect } from 'react';
import { Follower } from './MouseFollowerStyles.ts';

const MouseFollower = () => {
    const [opacity, setOpacity] = useState<number>(0);
    let timer: number;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const follower = document.getElementById('mouse-follower');
            if (!follower) return;

            const followerRadius = 260;

            follower.style.left = `${e.clientX - followerRadius}px`;
            follower.style.top = `${e.clientY - followerRadius}px`;
            setOpacity(1);
            
            clearTimeout(timer);
            timer = setTimeout(() => {
                setOpacity(0);
            }, 500);
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <Follower id="mouse-follower" opacity={opacity} />;
};

export default MouseFollower;