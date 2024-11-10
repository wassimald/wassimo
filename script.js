// Set the correct login credentials
const correctUsername = "wassim";
const correctPassword = "sanfour";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginError = document.getElementById("login-error");

    if (username === correctUsername && password === correctPassword) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("age-calculator").style.display = "block";
        loginError.textContent = "";
    } else {
        loginError.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة";
    }
}

function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const ageResult = document.getElementById("age-result");

    if (birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        ageResult.textContent = `عمرك هو: ${age} سنة`;
    } else {
        ageResult.textContent = "يرجى اختيار تاريخ الميلاد";
    }
}
