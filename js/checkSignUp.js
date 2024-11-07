function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

<<<<<<< HEAD
    // Biểu thức kiểm tra định dạng email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov)$/;

    // Kiểm tra định dạng email
    if (!emailRegex.test(email)) {
        alert("Email không đúng định dạng. Hãy đảm bảo email có tên miền hợp lệ như .com, .net, .org, .edu, hoặc .gov.");
        return false;
    }

    // Biểu thức kiểm tra độ mạnh của mật khẩu
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    // Kiểm tra độ dài và độ mạnh của mật khẩu
    if (!passwordRegex.test(password)) {
        alert("Password phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt.");
=======
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
>>>>>>> 7ba5a2857196f6c903b3b0cf860b4bc3648811fa
        return false;
    }

    // Trả về true nếu cả hai đều hợp lệ
    return true;
}

// Thêm sự kiện vào nút "Sign Up"
document.getElementById("checkSU").addEventListener("click", function() {
    if (validateForm()) {
        // Chuyển hướng nếu form hợp lệ
<<<<<<< HEAD
        window.location.href = "../index.html";
=======
        window.location.href = "../../index.html";
>>>>>>> 7ba5a2857196f6c903b3b0cf860b4bc3648811fa
    } else {
        // Form không hợp lệ
        alert("Vui lòng kiểm tra lại thông tin.");
    }
});
