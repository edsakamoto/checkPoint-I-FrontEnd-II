let postagemReference = document.querySelector('.container')
let tituloReference = document.querySelector('#titulo')
let descricaoReference = document.querySelector('descricao')
let imagemReference=document.querySelector('#imagem')

const postagem = [
    {imagem: '123',
    titulo: 'Titulo Exemplo',
    descricao: 'Descrição Exemplo'
}
];

for( let posts of postagem){
    postagemReference.innerHTML += `
    <div class="item">
    <img src="${posts.imagem}">
    <h3>${posts.titulo}</h3>
    <p>${posts.descricao}</p>
    </div>`
};

console.log(tituloReference.value)