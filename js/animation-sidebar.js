$(document).ready(function() {
    const items = [
        $("#SideBar__Animation-Item-1"),
        $("#SideBar__Animation-Item-2"),
        $("#SideBar__Animation-Item-3"),
        $("#SideBar__Animation-Item-4"),
        $("#SideBar__Animation-Item-5"),
        $("#SideBar__Animation-Item-6")
    ];

    const animationDuration = 250; // Thời gian cho mỗi bước animation
    const offset = 10; // Độ cao để item bắt đầu cao hơn vị trí của nó

    function animateItem(index) {
        if (index >= items.length) return; // Dừng nếu đã đi qua tất cả các item

        const item = items[index];
        const originalPosition = item.position().top; // Lấy vị trí gốc của item

        // Hiện item
        item.css("top", originalPosition - offset + "px"); // Đặt vị trí ban đầu cho item
        item.show(); // Hiện item trước khi bắt đầu animation

        // Bắt đầu animation
        item.animate({ top: originalPosition + "px" }, animationDuration, function() {
            // Di chuyển xuống một đoạn ngắn
            // Gọi animation cho item tiếp theo
            animateItem(index + 1);
            item.animate({ top: originalPosition + offset + "px" }, animationDuration, function() {
                // Quay về vị trí gốc
                item.animate({ top: originalPosition + "px" }, animationDuration);
            });
        });
    }

    // Khởi động animation cho item đầu tiên
    animateItem(1);
});
