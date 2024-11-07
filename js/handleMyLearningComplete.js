$(document).ready(function() {
    const completedBtn = $("#completed");
    const inProgressBtn = $("#inProgress");
    const myLearningContent = $("#myLearning");
    const myLearningCompleted = $("#myLearningCompleted");

    // Mặc định nút inProgress sẽ có data-selected
    inProgressBtn.attr("data-selected", true);

    completedBtn.click(function() {
        // Ẩn nội dung "in progress" và hiển thị nội dung "completed"
        myLearningContent.hide(400);
        myLearningCompleted.show(400);

        // Thêm data-selected vào nút "completed" và xóa khỏi nút "inProgress"
        completedBtn.attr("data-selected", true);
        inProgressBtn.removeAttr("data-selected");

        $(".MyLearning__Option-FlexBox").hide(400);
    });

    inProgressBtn.click(function() {
        // Hiển thị nội dung "in progress" và ẩn nội dung "completed"
        myLearningContent.show(400);
        myLearningCompleted.hide(400);

        // Thêm data-selected vào nút "inProgress" và xóa khỏi nút "completed"
        inProgressBtn.attr("data-selected", true);
        completedBtn.removeAttr("data-selected");

        
        $(".MyLearning__Option-FlexBox").show(400);
    });
});