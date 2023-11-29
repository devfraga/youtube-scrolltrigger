import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './text.module.css'
import SplitType from 'split-type'
import Lenis from '@studio-freight/lenis';

export function Text() {

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = new SplitType('.reveal-type')

    splitTypes.elements.forEach((char,i) => {
      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars'})

      // gsap.from(text.chars, {
      //   scrollTrigger:{
      //     trigger: char,
      //     start: "top: 80%",
      //     end: "top 35%",
      //     scrub: true, // TRUE segue apenas com o scroll
      //     markers: true,
      //   },
      //   // y: 100,
      //   opacity:0.1,
      //   stagger: 0.1 // Atraso
      // })

      gsap.fromTo(text.chars, 
        {
          color: bg,
          // y:40
        },
        {
          // y: 0,
          color: fg,
          duration: 0.2,
          stagger: 0.02,
          scrollTrigger:{
            trigger: char,
            start: "top: 80%",
            end: "top 35%",
            scrub: true, // TRUE segue apenas com o scroll
            markers: true,
          },
        
        })
    })

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e);
    // })

    // function raf(time){
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // raf(raf);

  }, [])
 

  return (
    <div className={styles.container}>

        <div className={styles.areaModel}>
          <h1>AREA EXEMPLO</h1>
        </div>
  
        <div className={styles.areaModel}>
          <h1>AREA EXEMPLO</h1>
        </div>

        <section className={styles.section}>
            <p className="reveal-type" data-bg-color="#cecece" data-fg-color="blue">
            Systematically ushering in a new generation of amazing designers from across the globe
            </p>
        </section>

        
        <div className={styles.areaModel}>
          <h1>AREA EXEMPLO</h1>
        </div>
  
        <div className={styles.areaModel}>
          <h1>AREA EXEMPLO</h1>
        </div>
    </div>
  )
}
