function CustomRender(reactElement, container) {
    // Create the DOM element
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop=='children') continue; 
        domElement.setAttribute(prop, reactElement.props[prop]);
            
        }
        container.appendChild(domElement);
    }

// Define the reactElement
const reactElement = {
    type: 'a',
    props: {
        href: 'https://reactjs.org/',
        target: '_blank',
    },
    children: 'Click me to visit React',
};

const mainContainer = document.querySelector('#root');

// Call the CustomRender function
CustomRender(reactElement, mainContainer);


