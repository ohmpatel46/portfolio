import VanillaTilt from "../../node_modules/vanilla-tilt/lib/vanilla-tilt.js";

export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
