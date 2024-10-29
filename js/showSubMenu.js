$(document).ready(function() {
    const menuButton = $('#menuButton');
    const subMenuContent = $('#subMenuContent');
    const closeButton = $('#closeButton');

    menuButton.click(function() {
        subMenuContent.toggle();
    });
    
    closeButton.click(function() {
        subMenuContent.toggle();
    });
})