$(document).ready(function() {
    $("#catalog").click(function(event) {
        event.stopPropagation();

        const icon = $(this).find(".Button__Nav-Icon");

        if ($("#catalogSubMenu").is(":visible")) {
            $("#catalogSubMenu").slideUp("slow");
            icon.removeClass("rotate-show").addClass("rotate-hide");
        } else {
            $("#catalogSubMenu").slideDown("slow");
            icon.removeClass("rotate-hide").addClass("rotate-show");
        }
    });

    $(document).click(function(event) {
        if (!$(event.target).closest("#catalogSubMenu, #catalog").length) {
            $("#catalogSubMenu").slideUp("slow");
            $("#catalog").find(".Button__Nav-Icon").removeClass("rotate-show").addClass("rotate-hide");
        }
    });
});
