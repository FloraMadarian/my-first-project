const header = document.createElement('header');

const container = document.createElement('div');
container.classList = "container";

const menu = document.createElement('div');
menu.classList = "menu";

const main = document.createElement('main');

const firstSection = document.createElement('div');
firstSection.classList = "first-section";

const secondSection = document.createElement('div');
secondSection.classList = "second-section";

const footer = document.createElement('div');
footer.classList = "footer";


const login = document.createElement('a');
login.href = "./login.html";
login.classList = "header-link";
login.innerText = "Login";



document.body.appendChild(header);
document.body.appendChild(container);
header.appendChild(login);
container.appendChild(menu);
container.appendChild(main);
main.appendChild(firstSection);
main.appendChild(secondSection);
main.appendChild(footer);
