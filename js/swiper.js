
var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 17,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
});
// 슬라이드 초기화 함수
function initializeSwipers() {
    // 각 탭의 슬라이드마다 Swiper 인스턴스를 초기화
    document.querySelectorAll('.swiper-wrap').forEach(slider => {
        new Swiper(slider, {
            loop: true, // 루프 활성화
            autoplay: { // 자동 재생 설정
                delay: 5000, // 슬라이드 간의 딜레이 (밀리초)
                disableOnInteraction: false, // 사용자 상호 작용 시 자동 재생을 비활성화하지 않음
            },
            navigation: {
                nextEl: slider.querySelector('.swiper-button-next3'),
                prevEl: slider.querySelector('.swiper-button-prev3'),
            },
        });
    });
}

var swiper3 = new Swiper(".mySwiper-3", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 0,
    initialSlide:1,
    loop: true,
    loopedSlides: 1,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
});

// 탭 메뉴 클릭 이벤트 리스너 등록
document.querySelectorAll('.hello-station-tab-menu').forEach(tab => {
    tab.addEventListener('click', function() {
        // 현재 활성화된 탭을 제외한 모든 탭의 활성화 클래스를 제거
        document.querySelectorAll('.hello-station-tab-menu').forEach(t => {
            t.classList.remove('on');
        });
        // 클릭된 탭에 활성화 클래스 추가
        this.classList.add('on');

        // 모든 슬라이드를 숨김
        document.querySelectorAll('.swiper-wrap').forEach(slider => {
            slider.style.display = 'none';
        });

        // 클릭된 탭에 해당하는 슬라이드를 보여줌
        const tabName = this.getAttribute('data-name');
        const targetSlider = document.querySelector(`#${tabName}`);
        if (targetSlider) {
            targetSlider.style.display = 'block';
        }
    });
});

// 페이지 로드 시 슬라이드 초기화
window.addEventListener('load', function() {
    initializeSwipers();
});


