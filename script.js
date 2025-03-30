function rolarDado(lados) {
  const resultado = Math.floor(Math.random() * lados) + 1;
  const divResultado = document.getElementById('resultado');

  divResultado.textContent = `🎲 ${resultado}`;

  // Efeito visual
  divResultado.style.transform = 'scale(1.3)';
  setTimeout(() => {
    divResultado.style.transform = 'scale(1)';
  }, 150);
}
