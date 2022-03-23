import { gsap } from "gsap/dist/gsap";
export const playRowAnim = (ref, reverse=false) => {
  const rowWidth = ref.scrollWidth - ref.offsetWidth
  gsap.fromTo(ref, {
    translateX: -rowWidth,
  }, {translateX: 0, ease: "none", runBackwards: reverse}).duration(26).repeat(-1);
}