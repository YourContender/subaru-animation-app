// gsap.registerPlugin(ScrollTrigger);

// if (ScrollTrigger.isTouch !== 1) {
gsap.fromTo(
	".hero-section",
	{ opacity: 1 },
	{
		opacity: 0,
		scrollTrigger: {
			trigger: ".hero-section",
			start: "centre",
			end: "820",
			scrub: true,
		},
	}
);

gsap.fromTo(
	".text-block",
	{ opacity: 0 },
	{
		opacity: 1,
		scrollTrigger: {
			trigger: ".text-block",
			start: "-850",
			// end: "820",
			scrub: true,
		},
	}
);

let itemsLeft = gsap.utils.toArray(".gallery-left .gallery-item");

itemsLeft.forEach((item) => {
	gsap.fromTo(
		item,
		{ x: -300, opacity: 0 },
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: item,
				start: "-650",
				scrub: true,
			},
		}
	);
});

let itemsRight = gsap.utils.toArray(".gallery-right .gallery-item");

itemsRight.forEach((item) => {
	gsap.fromTo(
		item,
		{ x: 300, opacity: 0 },
		{
			opacity: 1,
			x: 0,
			scrollTrigger: {
				trigger: item,
				start: "-650",
				scrub: true,
			},
		}
	);
});
// }
