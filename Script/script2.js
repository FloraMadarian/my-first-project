const header = document.createElement('header');

const section = document.createElement('section');


const loginForm = document.createElement('div');
loginForm.classList = "login-form";

const form = document.createElement('form');
for(let i = 0; i<3; i++) {
    const input  = document.createElement('input');
    input.classList = 'input';
    form.appendChild(input);
}



const backToHome = document.createElement('div');
backToHome.classList = "back-to-home";

const home = document.createElement('a');
home.href = "./main.html";
home.classList = "header-link";
home.innerText = "Home";

backToHome.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';






document.body.appendChild(header);
document.body.appendChild(section);
section.appendChild(loginForm);
header.appendChild(backToHome);
backToHome.appendChild(home);
loginForm.appendChild(form);

const inputs = document.querySelectorAll(".input");
for(let i = 0; i<inputs.length; i++) {
   inputs[0].setAttribute('type', 'text');
   inputs[0].setAttribute('placeholder', 'User name');

   inputs[1].setAttribute('type', 'password');
   inputs[1].setAttribute('placeholder', 'Password');

   inputs[2].setAttribute('type', 'submit');
   inputs[2].setAttribute('value', 'Login');
}


