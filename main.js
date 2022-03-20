//obtendo as informaçoes do html
let addBtn = document.querySelector('#addBtn');
let tituloRef = document.querySelector('#tituloForm');
let descricaoRef = document.querySelector('#descricaoForm');
let imgRef = document.querySelector('#imagemForm');

//banco de dados
let postagem = [];

//adicionando dados no banco de dados
function mandarPostagem() {
    postagem.push({
        titulo: tituloRef.value,
        descricao: descricaoRef.value,
        img: imgRef.value
    })
};

//adiconando a postagem no html
function postarPostagem() {
    if (postagem.length == 0) {
        document.querySelector('.container').innerHTML += `
        <div class="item">
        <img src="${postagem[0].img}">
        <h3>${postagem[0].titulo}</h3>
        <p>${postagem[0].descricao}</p>
    </div>`
    }
    else {
        let ultimaPostagem = postagem[postagem.length - 1]
        document.querySelector('.container').innerHTML += `
        <div class="item">
        <img src="${ultimaPostagem.img}">
        <h3>${ultimaPostagem.titulo}</h3>
        <p>${ultimaPostagem.descricao}</p>
    </div>`
    }
};

//postar o coneudo do usuario
addBtn.addEventListener('click', function (event) {
    event.preventDefault()

    mandarPostagem()

    postarPostagem()
});
