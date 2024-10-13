function createHomeLayout() {
    const header = UI.createElement('header', {
        class: 'header'
    },
    [
        UI.createElement('a', {
            class: 'header-link',
            href: './login.html'
        }, 'Login')
    ])

    const container = UI.createElement(
        'div',
         {
            class: 'container'
         },
         [
            UI.createElement('nav', {class: 'sidebar'}),
            UI.createElement('main', {class: 'main'},
                [
                    UI.createElement('div', {class:'box'}),
                    UI.createElement('div', {class:'box'}),
                    UI.createElement('div', {class:'footer'}),
                ]
            )
         ]
    )

    UI.render(header, document.body);
    UI.render(container, document.body)
    // const header = document.createElement('header');

    // const container = document.createElement('div');
    // container.setAttribute("container");
    
    // const nav = document.createElement('nav');
    // nav.setAttribute("sidebar");
    
    // const main = document.createElement('main');
    
    // const firstSection = document.createElement('div');
    // firstSection.classList = "box";
    
    // const secondSection = document.createElement('div');
    // secondSection.classList = "box";
    
    // const footer = document.createElement('div');
    // footer.classList = "footer";
    
    
    // const link = document.createElement('a');
    // link.setAttribute("./login.html");
    // link.setAttribute("header-link");
    // link.innerText = "Login";
    
    
    
    // document.body.appendChild(header);
    // document.body.appendChild(container);
    // header.appendChild(link);
    // container.appendChild(nav);
    // container.appendChild(main);
    // main.appendChild(firstSection);
    // main.appendChild(secondSection);
    // main.appendChild(footer);
}


createHomeLayout();