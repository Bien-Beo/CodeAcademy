$(document).ready(function() {
    // Tạo mảng catalogItems tự động từ catalogItem-1 đến catalogItem-45
    const catalogItems = [];
    for (let i = 1; i <= 45; i++) {
        catalogItems.push($(`#catalogItem-${i}`));
    }

    // Thiết lập CSS ban đầu cho các item
    catalogItems.forEach(item => {
        item.css({
            "opacity": "0",
            "transform": "translateY(20px)",  // Dịch chuyển xuống dưới một chút để tạo hiệu ứng "từ dưới lên"
            "transition": "opacity 0.5s ease, transform 0.5s ease"
        });
    });

    // Hàm kiểm tra vị trí của từng item
    function checkVisibility() {
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();

        catalogItems.forEach(item => {
            const itemTop = item.offset().top;
            const itemVisible = item.css("opacity") === "1"; // Kiểm tra nếu item đã hiển thị

            // Giảm ngưỡng để item ẩn sớm hơn khi lướt lên
            const fadeOutThreshold = 300; // Thay đổi giá trị này nếu muốn ẩn sớm hoặc muộn hơn

            // Kiểm tra nếu item nằm trong tầm nhìn khi lướt xuống
            if (itemTop < scrollTop + windowHeight - 100 && !itemVisible) {
                // Hiển thị item với animation
                item.css({
                    "opacity": "1",
                    "transform": "translateY(0)"  // Đưa item lên vị trí gốc
                });
            } 
            // Kiểm tra nếu item gần ra khỏi vùng nhìn thấy khi lướt lên, sẽ ẩn dần
            else if (itemTop > scrollTop + windowHeight - fadeOutThreshold && itemVisible) {
                item.css({
                    "opacity": "0",
                    "transform": "translateY(20px)"  // Đưa item về vị trí ban đầu khi ra khỏi vùng nhìn thấy
                });
            }
        });
    }

    // Gọi hàm checkVisibility khi cuộn và khi trang tải xong
    $(window).on("scroll", checkVisibility);
    checkVisibility(); // Gọi ngay để kiểm tra lần đầu khi tải trang
});
