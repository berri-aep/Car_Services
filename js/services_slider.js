var slider = tns({
  container: ".homeContent__slider",
  items: 3,
  speed: 500,
  gutter: 100,
  slideBy: "1",
  autoplay: false,
  navPosition: "bottom",
  containerControls: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  rewind: true,
  autoHeight: true,
  responsive:{
    1250:{
      items:3,
    },
    520:{
      items:2,
    }
  }
});
