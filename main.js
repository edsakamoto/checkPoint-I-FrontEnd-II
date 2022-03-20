/*     Tema será sobre FILMES  MARVEL*/
let tituloReference = document.querySelector('#titulo'); 
let descricaoReference = document.querySelector('#descricao');
let imagemReference = document.querySelector('#imagem');
let botaoCadastrarReference = document.querySelector('#cadastrar');
let conteudoPrincipalReference = document.querySelector('#couteudoPrincipal');

let cadastros = []
let ultimoCadastro = cadastros[0]
console.log(cadastros.length)
botaoCadastrarReference.addEventListener('click',function(x){
    x.preventDefault();

    let cadastro = {
        titulo: tituloReference.value,
        descricao: descricaoReference.value,
        imagem: imagemReference.value
    };
    
    cadastros.push(cadastro);      

    switch (cadastros.length == 0){
        case true:
            conteudoPrincipalReference.innerHTML += `
            <div class="item">
                <div class="img_container">
                    <img  src="${ultimoCadastro.imagem}">
                </div>

                <div class="titulo"> 
                    <h2>${ultimoCadastro.titulo}</h2>
                </div >     

                <p class="descricao">
                ${ultimoCadastro.descricao}
                </p>
            </div>    
            `
            break;

        case false:

            let ultimoCadastro = cadastros[cadastros.length-1];

            conteudoPrincipalReference.innerHTML += `
            <div class="item">
                <div class="img_container">
                    <img src="${ultimoCadastro.imagem}">
                </div>  

                <div class="titulo">                  
                    <h2>${ultimoCadastro.titulo}</h2>
                </div>
                <p class="descricao">
                ${ultimoCadastro.descricao}
                </p>
            </div>    
            `
            break;

        
    }   
})
//https://uploads.jovemnerd.com.br/wp-content/uploads/2022/03/vingadores-x-men-eternos-marvel-hq-760x428.jpg