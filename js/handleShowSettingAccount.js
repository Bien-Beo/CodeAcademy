$(document).ready(function() {
    const accountListItem = $("#accountListItem");
    const accountListItemIcon = $("#accountListItemIcon");
    const accountListItemContent = $("#accountListItemContent");
    const accountMainContent = $("#accountMainContent");

    accountListItem.click(function() {
        if (accountListItemContent.is(":visible")) {
            // Nếu accountListItemContent đang hiển thị, ẩn nó trước
            accountListItemContent.toggle(600, function() {
                // Sau khi ẩn xong, di chuyển accountMainContent về vị trí ban đầu
            });
            setTimeout(function() {
                accountMainContent.css("margin-top", "2rem");
            }, 150);

        } else {
            // Nếu accountListItemContent đang ẩn, di chuyển accountMainContent xuống trước
            accountMainContent.css("margin-top", `calc(${accountListItemContent.outerHeight()}px + 2rem)`);

            // Sau khi di chuyển xong, hiển thị accountListItemContent với một độ trễ
            setTimeout(function() {
                accountListItemContent.toggle(500);
            }, 100); // Độ trễ 500ms để accountMainContent di chuyển xong trước khi accountListItemContent xuất hiện
        }
    });
});
