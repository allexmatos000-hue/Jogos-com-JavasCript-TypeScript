async function trocaDePersonagem(){
    let resposta = await axios.get('Api/personagens.json');
    let personagens = resposta.data
    let elementoDaPagina = document.getElementsByClassName('game-board');
    elementoDaPagina.innerHTML = ''

    for(let i = 0; i < personagens.length; i++){
        elementoDaPagina.innerHTML = `<img src="${personagens[i].gif}" class="sonic">`
    }
}