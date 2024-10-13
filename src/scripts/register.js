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
                     placeholder: 'First Name',
                 }),
                 UI.createElement('input', {
                     class: 'input',
                     type: 'text',
                     placeholder: 'Last Name',
                 }),
                 UI.createElement('div', {class:'dropdown'}, [
                    UI.createElement('input', {
                        class: 'input',
                        type: 'text',
                        placeholder: 'City',
                    }),
                    UI.createElement('button', {class: 'dropdown-btn '}, [
                        UI.createElement('i', {class:'fa-solid fa-caret-down'})
                    ])
                 ]),
                
                UI.createElement('div', {class:'checkbox'}, 
                    [
                        UI.createElement('div', {class:'checkboxItem'}, 
                            [
                                UI.createElement('input', {
                                    class: 'checkboxInput',
                                    type: 'checkbox',
                                    name: 'gender'
                                }),
                                UI.createElement('label', {class: 'checkboxLabel'}, 'Male'),
                            ]
                        ),
                        UI.createElement('div', {class:'checkboxItem'}, 
                            [
                                UI.createElement('input', {
                                    class: 'checkboxInput',
                                    type: 'checkbox',
                                    name: 'gender'
                                }),
                                UI.createElement('label', {class: 'checkboxLabel'}, 'Femail'),
                            ]
                        )
                       
                    ]
                ),
                UI.createElement('div', {class:'button-section'}, [
                    UI.createElement('div', {class:'button-section-item'}, 
                        [
                            UI.createElement('input', {
                                class: 'checkboxInput',
                                type: 'checkbox',
                                name: 'gender'
                            }),
                            UI.createElement('label', {class: 'checkboxLabel'}, 'Send me Email'),
                        ]
                    ),
                    UI.createElement('button', {
                        class: 'btn',
                        type: 'submit',
                    }, 'Submit')
                ])
               
             ])
         ]
        )
     ]
     )
     
   
 
     //render
     UI.render(header, document.body);
     UI.render(container, document.body);
 }
 
 createLoginLayout();
 
 
 
 
 