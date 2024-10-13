
    function createElement(element, attributes, childElement) {
        const el = document.createElement(element);

        for(const [key, value] of Object.entries(attributes)) {
            el.setAttribute(key, value);
        }

        if(typeof childElement == 'string') {
            el.textContent = childElement;
        }   
        else if(childElement instanceof HTMLElement) {
            el.appendChild(childElement);
        }
        else if(Array.isArray(childElement)) {
            childElement.forEach(child => el.append(child));
        }
        return el;
    }

    function render(element, rootElement) {
       return rootElement.appendChild(element);
    }
    
    window.UI = {
        createElement,
        render
    }