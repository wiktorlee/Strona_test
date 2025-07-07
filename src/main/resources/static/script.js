document.getElementById('changeColorButton').addEventListener('click', () => {
    const colors = ['#b3ecff', '#99ccff', '#cce6ff', '#99ddff', '#e6f7ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
