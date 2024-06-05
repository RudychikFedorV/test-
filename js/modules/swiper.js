function swiper() {
  const swiper = new Swiper(".swiper", {
    // direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    parallax: true,
    speed: 1000,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: "#nextEl",
      prevEl: "#prevEl",
    },
  });
}
export default swiper;
