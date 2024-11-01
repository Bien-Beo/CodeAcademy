$(document).ready(function() {
    const catalogSubMenu = $("#catalogFilter");
    const catalogCloseSubMenu = $("#catalogCloseSubMenuFilter");
    const navigationAllTopics = $("#catalogSubMenuFilterBox");
    const catalogSubMenuContent = $("#catalogSubMenuFilterContent");
    const overlayContainer = $("#overlayContainerFilter");

    // Thêm hai thuộc tính CSS transform và transition vào navigationAllTopics
    navigationAllTopics.css({
        "transform": "translateX(-100%)",
        "transition": "transform 0.8s ease"
    });

    catalogSubMenu.click(function() {
        overlayContainer.show();
        catalogSubMenuContent.css("transform", "translateX(0)"); // Trượt vào màn hình
        navigationAllTopics.show(400, function() {
            navigationAllTopics.css("transform", "translateX(0)"); // Trượt vào màn hình
        });
    });

    catalogCloseSubMenu.click(function() {
        navigationAllTopics.css("transform", "translateX(-100)");
        navigationAllTopics.hide(400, function() {
            catalogSubMenuContent.css("transform", "translateX(-100%)"); // Trượt ra ngoài màn hình
            setTimeout(function() {
                overlayContainer.hide(); // Ẩn overlay sau khi catalogSubMenuContent trượt xong
            }, 300); // Delay này khớp với thời gian animation của transform
        });
    });

    overlayContainer.click(function() {
        navigationAllTopics.css("transform", "translateX(-100)");
        navigationAllTopics.hide(400, function() {
            catalogSubMenuContent.css("transform", "translateX(-100%)"); // Trượt ra ngoài màn hình
            setTimeout(function() {
                overlayContainer.hide(); // Ẩn overlay sau khi catalogSubMenuContent trượt xong
            }, 300); // Delay này khớp với thời gian animation của transform
        });
    });
});
