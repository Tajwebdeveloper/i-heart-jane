import { gsap } from "gsap/dist/gsap";
export const playRowAnim = (ref, reverse=false, duration=26) => {
  const rowWidth = ref.scrollWidth - ref.offsetWidth
  gsap.fromTo(ref, {
    translateX: -rowWidth,
  }, {translateX: 0, ease: "none", runBackwards: reverse, lazy: false}).duration(duration).repeat(-1);
}