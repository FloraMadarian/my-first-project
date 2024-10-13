function createLoginLayout() {
   const header =  UI.createElement(
        'header', 
        {
            class: 'header'
        }, 
        [
            UI.createElement('div',{class: 'back-to-home'}, 
                [
                    UI.createElement('i', {
                        class: "fa-solid fa-arrow-left"
                    }),
                    
                    UI.createElement('a', {class: 'header-link', href: './main.html'}, 'Home') 
                ]
           )
        ]
       
    )

   const container =  UI.createElement(
        'div',
    {
        class: 'container-root'
    },
    [
       UI.createElement('div', {class: 'login-form'}, 
        [
            UI.createElement('form',{}, [
                UI.createElement('input', {
                    class: 'input',
                    type: 'text',
                    placeholder: 'Username',
                }),
                UI.createElement('input', {
                    class: 'input',
                    type: 'password',
                    placeholder: 'Password',
                }),
                UI.createElement('button', {
                    class: 'btn',
                    type: 'submit',
                }, 'Login')
            ])
        ]
       )
    ]
    )
    // const header = document.createElement('header');
    // header.setAttribute('class', 'header');

    // const container = document.createElement('div');
    // container.setAttribute('class', 'container-root');
    
    // const loginForm = document.createElement('div');
    // loginForm.setAttribute("class", "login-form");
    
    // const form = document.createElement('form');

    // const inputUsername = document.createElement('input');
    // inputUsername.setAttribute('class', 'input');
    // inputUsername.setAttribute('type', 'text');
    // inputUsername.setAttribute('placeholder', 'User name');
   
    
    // const inputPassword = document.createElement('input');
    // inputPassword.setAttribute('class', 'input');
    // inputPassword.setAttribute('type', 'password');
    // inputPassword.setAttribute('placeholder', 'Password');

    // const buttonLogin = document.createElement('button');
    // buttonLogin.setAttribute('type', 'submit');
    // buttonLogin.innerText = "Login";
    
    
    // const backToHome = document.createElement('div');
    // backToHome.setAttribute('class', "back-to-home");
    
    // const link = document.createElement('a');
    // link.setAttribute('href', "./main.html");
    // link.setAttribute('class', "header-link");
    // link.innerText = "Home";
    
    // backToHome.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    
    
    
    
    
    
   
    // container.appendChild(loginForm);
    // header.appendChild(backToHome);
    // backToHome.appendChild(link);
    // loginForm.appendChild(form);
    // form.appendChild(inputUsername);
    // form.appendChild(inputPassword);
    // form.appendChild(buttonLogin);

    //render
    UI.render(header, document.body);
    UI.render(container, document.body);
    // document.body.appendChild(header);
    // document.body.appendChild(container);
}

createLoginLayout();




