gsap.fromTo(
  ".navbar-container",
  { x: 0, y: -100 },
  { x: 0, y: 0, duration: 1 }
);
gsap.fromTo(
  ".container-menu-right",
  { x: -100, y: 0 },
  { x: 0, y: 0, duration: 1 }
);
gsap.fromTo(".item1", { x: 0, y: 500 }, { x: 0, y: 0, duration: 2 });
gsap.fromTo(".item2", { x: 550, y: 0 }, { x: 0, y: 0, duration: 1.5 });
gsap.fromTo(
  ".each-item",
  { y: 10 },
  { x: 0, y: -135, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" }
);

