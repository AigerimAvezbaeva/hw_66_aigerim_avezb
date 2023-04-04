const container = document.getElementById('container');
for (let i = 1; i <= 5; i++) {
    const element = document.createElement('div');
    element.classList.add('element');
    const span = document.createElement('span');
    span.innerText = i;
    const colors = [0, 'blue', 'green', 'yellow', 'pink', 'red']
    span.style.color = colors[i];
    element.textContent = `Element `;
    element.appendChild(span)
    container.appendChild(element);
}
