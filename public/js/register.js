const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const registerForm = document.getElementById('signup-form');
const emailEle = document.getElementById('registermail');
const passwordEle = document.getElementById('registerpassword');
const usernameEle = document.getElementById('registername');
const navbtn = document.getElementById('myTopnav');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailEle.value.trim();
    const password = passwordEle.value.trim();
    const name = usernameEle.value.trim();
    const data = {
        name,
        email,
        password,
    };
    console.log(data);
    fetch('https://mymeetingsapp.herokuapp.com/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to register.');
            }
        })
        .catch(err => {
            console.log(err.message);
        });
});

navbtn.addEventListener('click', (e) => {
    console.log(hello);
});

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});