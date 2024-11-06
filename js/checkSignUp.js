function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Biểu thức kiểm tra định dạng email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Kiểm tra định dạng email
    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng.");
        return false;
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        alert("Password phải có ít nhất 6 ký tự.");
        return false;
    }

    // Trả về true nếu cả hai đều hợp lệ
    return true;
}

// Thêm sự kiện vào nút "Sign Up"
document.getElementById("checkSU").addEventListener("click", function() {
    if (validateForm()) {
        // Chuyển hướng nếu form hợp lệ
        window.location.href = "../../";
    } else {
        // Form không hợp lệ
        alert("Vui lòng kiểm tra lại thông tin.");
    }
});