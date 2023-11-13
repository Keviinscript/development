const timeline = gsap.timeline({defaults: {duration:1}});
    timeline.from('.alpeadalogosm' ,{y:'-100%', ease: 'power2.in', opacity: 0})
            .from('.menubar', {x:'-100%', ease: 'power2.in', opacity: 0}, '<')