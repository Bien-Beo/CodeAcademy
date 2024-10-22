$(document).ready(function() {
    function toggleSubMenu(buttonId, subMenuId) {
        $(buttonId).click(function(event) {
            event.stopPropagation();

            const icon = $(this).find(".Button__Nav-Icon");
            const span = $(this).find(".Button__Nav-Text");

            // Các nút khác
            const otherMenus = ["#catalogSubMenu", "#resourcesSubMenu", "#communitySubMenu", "#pricingSubMenu", "#searchContainer", "#notificationContainer", "#avatarContainer"].filter(id => id !== subMenuId);
            const otherIcons = [$("#catalog"), $("#resources"), $("#community"), $("#pricing"), $("magnifyingGlass"), $("#notificationButton"), $("#buttonAvatar")].filter(id => `#${id.attr('id')}` !== buttonId);

            // Ẩn các submenu khác
            otherMenus.forEach(id => $(id).slideUp(300));
            otherIcons.forEach(btn => {
                btn.find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
                btn.find(".Button__Nav-Text").css("font-weight", "normal");
            });

            // Toggle submenu hiện tại
            if ($(subMenuId).is(":visible")) {
                $(subMenuId).slideUp(300);
                icon.removeClass("rotate-show").addClass("rotate-hide");
                span.css("font-weight", "normal");
            } else {
                $(subMenuId).slideDown(300);
                icon.removeClass("rotate-hide").addClass("rotate-show");
                span.css("font-weight", "700");
            }
        });
    }

    // Gọi hàm với từng nút và submenu tương ứng
    toggleSubMenu("#catalog", "#catalogSubMenu");
    toggleSubMenu("#resources", "#resourcesSubMenu");
    toggleSubMenu("#community", "#communitySubMenu");
    toggleSubMenu("#pricing", "#pricingSubMenu");
    toggleSubMenu("#magnifyingGlass", "#searchContainer");
    toggleSubMenu("#notificationButton", "#notificationContainer");
    toggleSubMenu("#buttonAvatar", "#avatarContainer");

    // Ẩn các menu khi nhấn vào bất kỳ vị trí nào bên ngoài
    $(document).click(function(event) {
        if (!$(event.target).closest("#catalogSubMenu, #catalog").length) {
            $("#catalogSubMenu").slideUp(300);
            $("#catalog").find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
            $("#catalog").find(".Button__Nav-Text").css("font-weight", "normal");
        }
        if (!$(event.target).closest("#resourcesSubMenu, #resources").length) {
            $("#resourcesSubMenu").slideUp(300);
            $("#resources").find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
            $("#resources").find(".Button__Nav-Text").css("font-weight", "normal");
        }
        if (!$(event.target).closest("#communitySubMenu, #community").length) {
            $("#communitySubMenu").slideUp(300);
            $("#community").find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
            $("#community").find(".Button__Nav-Text").css("font-weight", "normal");
        }
        if (!$(event.target).closest("#pricingSubMenu, #pricing").length) {
            $("#pricingSubMenu").slideUp(300);
            $("#pricing").find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
            $("#pricing").find(".Button__Nav-Text").css("font-weight", "normal");
        }
        if (!$(event.target).closest("#searchContainer, #magnifyingGlass").length) {
            $("#searchContainer").slideUp(300);
            $("#magnifyingGlass").find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
            $("#magnifyingGlass").find(".Button__Nav-Text").css("font-weight", "normal");
        }
        if (!$(event.target).closest("#notificationContainer, #notificationButton").length) {
            $("#notificationContainer").slideUp(300);
            $("#notificationButton").find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
            $("#notificationButton").find(".Button__Nav-Text").css("font-weight", "normal");
        }
        if (!$(event.target).closest("#avatarContainer, #buttonAvatar").length) {
            $("#avatarContainer").slideUp(300);
            $("#buttonAvatar").find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
            $("#buttonAvatar").find(".Button__Nav-Text").css("font-weight", "normal");
        }
    });
});
