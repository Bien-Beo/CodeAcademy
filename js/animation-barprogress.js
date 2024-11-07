$(document).ready(function() {
    const barProgress = $(".Data__ProgressBar");
    const percentContent = $(".Data__ProgressBar-PersentContent");

    percentContent.text("74%"); // Đặt nội dung ban đầu là 0%

    const targetWidth = 74; // Giá trị mục tiêu là 74%
    const duration = 300; // Thời gian animation (500ms)
    const intervalTime = 5000; // Thời gian cập nhật phần trăm (150ms)
    
    let currentWidth = 0; // Khởi tạo chiều rộng hiện tại
    const increment = targetWidth * (intervalTime / duration); // Tính toán giá trị tăng mỗi lần

    // Bắt đầu animation
    const interval = setInterval(function() {
        currentWidth += increment; // Cập nhật chiều rộng hiện tại

        if (currentWidth >= targetWidth) {
            currentWidth = targetWidth; // Đảm bảo không vượt quá giá trị mục tiêu
            clearInterval(interval); // Dừng vòng lặp khi đạt mục tiêu
        }

        // Cập nhật chiều rộng của thanh và nội dung phần trăm
        barProgress.css("width", currentWidth + "%");
        percentContent.text(Math.round(currentWidth) + "%"); // Cập nhật nội dung phần trăm
    }, intervalTime);

    // Thực hiện animation cho thanh bar
    barProgress.animate({ width: targetWidth + "%" }, { duration: duration, easing: "linear" });
});
