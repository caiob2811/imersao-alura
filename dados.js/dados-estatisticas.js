const input = document.querySelector('#jogador2-input');
const button = document.querySelector('#jogador2-button');

button.addEventListener('click', () => {
  const pesquisa = input.value.trim();
  if (pesquisa === '') {
    alert('Por favor, insira um nome de jogador para a pesquisa.');
  } else {
    const url = `https://www.transfermarkt.com.br/schnellsuche/ergebnis/schnellsuche?query=${encodeURIComponent(pesquisa)}`;
        window.open(url, '_blank');
  }
});
