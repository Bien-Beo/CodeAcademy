$(document).ready(function() {
    const catalogSubMenu = $("#btnCatalogSubMenu");
    const catalogCloseSubMenu = $("#catalogCloseSubMenu");
    const navigationAllTopics = $("#navigationAllTopics");
    const catalogSubMenuContent = $("#catalogSubMenuContent");
    const overlayContainer = $("#overlayContainer");

    catalogSubMenu.click(function() {
        overlayContainer.show();
        catalogSubMenuContent.css("transform", "translateX(0)"); // Trượt vào màn hình
        navigationAllTopics.show(300);
    });

    catalogCloseSubMenu.click(function() {
        navigationAllTopics.hide(300, function() {
            catalogSubMenuContent.css("transform", "translateX(-100%)"); // Trượt ra ngoài màn hình
            setTimeout(function() {
                overlayContainer.hide(); // Ẩn overlay sau khi catalogSubMenuContent trượt xong
            }, 300); // Delay này khớp với thời gian animation của transform
        });
    });

    overlayContainer.click(function() {
        navigationAllTopics.hide(300, function() {
            catalogSubMenuContent.css("transform", "translateX(-100%)"); // Trượt ra ngoài màn hình
            setTimeout(function() {
                overlayContainer.hide(); // Ẩn overlay sau khi catalogSubMenuContent trượt xong
            }, 300); // Delay này khớp với thời gian animation của transform
        });
    });
});