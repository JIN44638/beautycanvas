window.addEventListener("load", function () {
  // 비주얼 스와이퍼
  const visual = new Swiper(".visual", {
    // 클릭안하고 슬라이드 자동으로 넘어가게 설정
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    //마지막 슬라이드에서 loop 반복되게 설정 , 아래 코드는 스와이퍼 사이트에서 가져옴(pagination,navigation)
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 비주얼 페이지네이션 추가
  // const swiper = new Swiper(".visual", {
  //   loop: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     dynamicBullets: true,
  //   },
  // });
  //  상품 스와이퍼 적용 slidesPerView(이미지1.5개나옴),paceBetween 간격넣기, breakpoints반응형코드 적용
  const itemSwiper = new Swiper(".itemSwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
      // 1200일때 slidesPerView5개반개 보이겠다
      590: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  // 햄버거 메뉴 클릭시
  const hamburger = this.document.querySelector("#hamburger");
  const fixMenus = this.document.querySelector(".fix-menu");

  const toggleMenu1 = function hamburger() {
    fixMenus.classList.toggle("active");
  };
  hamburger.addEventListener("click", toggleMenu1);

  // gotop버튼
  const goTopBtn = this.document.querySelector("#goTop");
  goTopBtn.addEventListener("click", function () {
    // 스크롤to는 어디로 가라는 의미 = 윈도위에서 맨위로 올리기(행동 스무스하게)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
