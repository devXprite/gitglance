'use client';

import Script from 'next/script';

const config = {
    particles: {
        number: { value: 60, density: { enable: !0, value_area: 500 } },
        color: { value: '#aaa' },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 },
        },
        opacity: { value: 1, random: !1, anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 } },
        size: { value: 1, random: !0, anim: { enable: !0, speed: 10, size_min: 0.1, sync: !1 } },
        line_linked: { enable: !1, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: {
            enable: !0,
            speed: 6,
            direction: 'none',
            random: !1,
            straight: !1,
            out_mode: 'out',
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: !0, mode: 'repulse' }, onclick: { enable: !0, mode: 'push' }, resize: !0 },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: !0,
};

const ParticlesJs = () => {
    const onLoad = () => {
        window.particlesJS('particles-js', config);
    };

    return (
        <>
            <Script src={'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'} onLoad={onLoad} />
            <div id="particles-js" className="fixed inset-0 z-[-1]"></div>
        </>
    );
};

export default ParticlesJs;
