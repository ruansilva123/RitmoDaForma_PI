import React, { useState, useEffect } from 'react';
import { Follower } from './MouseFollowerStyles.ts';

const MouseFollower = () => {
    const [opacity, setOpacity] = useState<number>(0);
    let timer: number;

    useEffect(() => {
        const handleMouseMove = (e) => {
            const follower = document.getElementById('mouse-follower');
            if (!follower) return;

            const followerRadius = 240;

            follower.style.left = `${e.pageX - followerRadius}px`;
            follower.style.top = `${e.pageY - followerRadius}px`;
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

    return <Follower id="mouse-follower" style={{ opacity }} />;
};

export default MouseFollower;