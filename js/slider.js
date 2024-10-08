var slider = tns({
  container: ".servicesBanner__slider--details",
  items: 3,
  speed: 500,
  gutter: 30,
  slideBy: 1,
  autoplay: true,
  containerControls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  rewind: true,
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 2,
    },
  },
});
