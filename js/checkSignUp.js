function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Biểu thức kiểm tra định dạng email (hỗ trợ subdomain)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})*$/;

    // Biểu thức kiểm tra độ mạnh của mật khẩu
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Kiểm tra định dạng email
    if (email === "" || !emailRegex.test(email)) {
        alert("Email không đúng định dạng.");
        return false;
    }

    // Kiểm tra độ dài và độ mạnh của mật khẩu
    if (!passwordRegex.test(password)) {
        alert(password);
        alert("Password phải có ít nhất 8 ký tự, bao gồm ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt.");
        return false;
    }

    // Trả về true nếu cả hai đều hợp lệ
    return true;
}

// Thêm sự kiện vào nút "Sign Up"
document.getElementById("checkSU").addEventListener("click", function() {
    if (validateForm()) {
        // Chuyển hướng nếu form hợp lệ
        window.location.href = "../../index.html";
    } else {
        // Form không hợp lệ
        alert("Vui lòng kiểm tra lại thông tin.");
    }
});
