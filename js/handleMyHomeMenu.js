$(document).ready(function() {
    const openMyHomeMenu = $("#openMyHomeMenu");
    const closeMyHomeMenu = $("#closeMyHomeMenu");
    const myHomeMenuContainer = $("#myHomeMenuContainer");
    const overlayContainer = $("#overlayContainer");

    // Đặt độ rộng ban đầu của menu là 0 và ẩn
    myHomeMenuContainer.css({
        width: "0rem",
        display: "none"
    });

    openMyHomeMenu.click(function() {
        overlayContainer.show();
        // Dừng mọi animation hiện tại, sau đó hiện và mở rộng menu
        myHomeMenuContainer.stop(true, true).css("display", "block").animate({ width: "30rem" }, 800);  
    });

    closeMyHomeMenu.click(function() {
        closeMenu();
    });

    // Đóng menu khi nhấn vào overlay
    overlayContainer.click(function(event) {
        // Kiểm tra nếu nhấn ra ngoài myHomeMenuContainer
        if (!$(event.target).closest(myHomeMenuContainer).length) {
            closeMenu();
        }
    });

    function closeMenu() {
        // Thu gọn menu rồi ẩn đi sau khi hoàn tất animation
        myHomeMenuContainer.stop(true, true).animate({ width: "0rem" }, 500, function() {
            $(this).css("display", "none");
            overlayContainer.hide();
        });
    }
});
