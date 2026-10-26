import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Configure default GSAP settings for cinematic, smooth motion
 */
export const setupGsapDefaults = () => {
  gsap.defaults({
    ease: "power3.out",
    duration: 1.0,
  });
};
