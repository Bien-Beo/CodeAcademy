$(document).ready(function() {
    const btnCourses = [$("#Course-Item-1"), $("#Course-Item-2"), $("#Course-Item-3")];
    const btnCoursesContent = [$("#Course-Item-1-Content"), $("#Course-Item-2-Content"), $("#Course-Item-3-Content")];
    const iconsChevronDown = [$("#iconChevronDown-Item-1"), $("#iconChevronDown-Item-2"), $("#iconChevronDown-Item-3")];

    btnCoursesContent[0].toggle(1800);

    // Biến để lưu trạng thái xoay của từng icon
    const rotationStates = [0, 0, 0]; 

    rotationStates[0] = rotationStates[0] === 0 ? 180 : 0;
    iconsChevronDown[0].css({
        transform: `rotate(${rotationStates[0]}deg)`, // Thay đổi góc xoay
        transition: 'transform 0.3s ease' // Hiệu ứng xoay mượt
    });

    btnCourses.forEach((btn, index) => {
        btn.click(function() {
            // Toggle xoay 180 độ
            rotationStates[index] = rotationStates[index] === 0 ? 180 : 0;
            iconsChevronDown[index].css({
                transform: `rotate(${rotationStates[index]}deg)`, // Thay đổi góc xoay
                transition: 'transform 0.3s ease' // Hiệu ứng xoay mượt
            });

            // Toggle nội dung với animation
            btnCoursesContent[index].toggle(1000);
        });
    });
});
