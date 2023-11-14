const timeline = gsap.timeline({defaults: {duration:1}});
    timeline.from('.alpeadalogosm' ,{y:'-100%', ease: 'power2.in', opacity: 0})
            .from('.menubar', {x:'-100%', ease: 'power2.in', opacity: 0}, '<0.5')
            .from('.herotext',{y: '100%', ease: 'expo.in', opacity: 0, duration: 0.5}, '<')
            .from('.herobtn', {y: '100%', ease:'bounce.inOut', opacity: 0 , duration: 1.5}, 0)