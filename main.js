//obtendo as informaçoes do html
let addBtn = document.querySelector('#addBtn');
let tituloRef = document.querySelector('#tituloForm');
let descricaoRef = document.querySelector('#descricaoForm');
let imgRef = document.querySelector('#imagemForm');

//banco de dados
const postagem = [{
    titulo:'b',
    descricao:'b',
    img:''
}];

//postar o coneudo do usuario
addBtn.addEventListener('click',function(event){
    event.preventDefault()
    //dados enviado pelo usuario
    var tituloInput = tituloRef.value
    var descricaoInput = descricaoRef.value
    var imgInput = imgRef.value

    //mandando os dados para banco de dados
    postagem.push({titulo:tituloInput, descricao:descricaoInput, img:imgInput})

    //rodando o banco de dados para adicionar os conteudos ali presente
    for(let post of postagem){
        document.querySelector('.container').innerHTML +=`
        <div class="item">
        <img src="${post.img}">
        <h3>${post.titulo}</h3>
        <p>${post.descricao}</p>
    </div>`
    }
});