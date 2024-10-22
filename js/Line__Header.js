window.onload = function() {
    let lastScrollTop = 0;
    const hrElement = document.getElementById('hrElement');
    const boxHeaders = document.getElementsByClassName('Box__Header-Normal'); // Sử dụng 'boxHeaders' thay vì 'boxHeader'

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Trở về đầu trang -> Hiện thẻ hr
            hrElement.style.opacity = '1';
            for (let i = 0; i < boxHeaders.length; i++) {
                boxHeaders[i].style.backgroundColor = "var(--color-white)";
            }
            
        } else if (scrollTop <= 0) {
            // Lăn chuột xuống -> Ẩn thẻ hr
            if (hrElement) {
                hrElement.style.opacity = '0'; // Chỉ thay đổi style khi phần tử tồn tại
            }
            // Duyệt qua tất cả các phần tử boxHeader
            if (boxHeaders.length > 0) {
                for (let i = 0; i < boxHeaders.length; i++) {
                    boxHeaders[i].style.backgroundColor = "var(--color-background-current)";
                }
            }
        }

        lastScrollTop = scrollTop; // Cập nhật vị trí cuộn hiện tại
    });
};
