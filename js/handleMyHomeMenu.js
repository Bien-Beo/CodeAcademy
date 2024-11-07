$(document).ready(function() {
    const openMyHomeMenu = $("#openMyHomeMenu");
    const closeMyHomeMenu = $("#closeMyHomeMenu");
    const myHomeMenuContainer = $("#myHomeMenuContainer");
    const overlayContainer = $("#overlayContainer");
    const myHomeMenuWidth = $(".myHomeMenuWidth");

    myHomeMenuContainer.css({
        width: "0rem",
        display: "none"
    });

    openMyHomeMenu.click(function() {
        overlayContainer.show();

        // Kiểm tra chiều rộng màn hình để thay đổi độ rộng của menu
        const menuWidth = window.innerWidth < 480 ? "100vw" : "30rem";

        // Đặt min-width cho myHomeMenuWidth nếu màn hình dưới 480px
        if (window.innerWidth < 480) {
            myHomeMenuWidth.css("min-width", `${window.innerWidth}px`);
        } else {
            myHomeMenuWidth.css("min-width", "30rem");
        }

        myHomeMenuContainer.stop(true, true).css("display", "block").animate({ width: menuWidth }, 400);  
    });

    closeMyHomeMenu.click(function() {
        closeMenu();
    });

    overlayContainer.click(function(event) {
        if (!$(event.target).closest(myHomeMenuContainer).length) {
            closeMenu();
        }
    });

    function closeMenu() {
        myHomeMenuContainer.stop(true, true).animate({ width: "0rem" }, 300, function() {
            $(this).css("display", "none");
            overlayContainer.hide();
        });
    }
});
