const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const pesquisa = input.value.trim(); 
    if (pesquisa === '') {
        alert('Por favor, insira um nome de jogador para a pesquisa.');
    } else {
        const url = `https://pt.wikipedia.org/w/index.php?search=${encodeURIComponent(pesquisa)}`;
        window.open(url, '_blank');
    }
}); 

