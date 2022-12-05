//DADOS FAKES
const dbMock = {
    pessoas: [
        {id: 1, nome:'Gabriel Lima', idade:'18', idPosicao: 1, posicao:'Linha', idHabilidade: 4, habilidade:'Ruim', foto:'https://i.pinimg.com/236x/4b/0d/2f/4b0d2f927a308bda620705650913a2fc.jpg'},
        {id: 2, nome:'Arthur Gonçalves', idade:'19', idPosicao: 2, posicao:'Goleiro', idHabilidade: 3, habilidade:'Mediano', foto:'https://i.pinimg.com/564x/3a/16/41/3a164189477b003cb6d9e8c245908d91.jpg'},
        {id: 3, nome:'Lucas Moreira', idade:'18', idPosicao: 2, posicao:'Goleiro', idHabilidade: 2, habilidade:'Bom', foto:'https://i.pinimg.com/564x/3f/de/81/3fde81edc13dcb04420e2ddc91781341.jpg'},
        {id: 4, nome:'Otávio Martins', idade:'17', idPosicao: 1, posicao:'Linha', idHabilidade: 2, habilidade:'Bom', foto:'https://i.pinimg.com/564x/c2/bd/3c/c2bd3ccc69ebcba8a340c9a5059919ba.jpg'},
        {id: 5, nome:'Samuel Ribeiro', idade:'20', idPosicao: 2, posicao:'Goleiro', idHabilidade: 1, habilidade:'Muito Bom', foto:'https://i.pinimg.com/564x/48/05/e4/4805e40ee9d9bb49f401e4c6850ea92e.jpg'},
        {id: 6, nome:'Icaro Queiroz', idade:'17', idPosicao: 1, posicao:'Linha', idHabilidade: 4, habilidade:'Ruim', foto:'https://i.pinimg.com/564x/89/de/05/89de05eac2b6e1a84d371a2488da2169.jpg'},
        {id: 7, nome:'Diego Pacheco', idade:'19', idPosicao: 1, posicao:'Linha', idHabilidade: 3, habilidade:'Mediano', foto:'https://i.pinimg.com/564x/6b/a5/3b/6ba53ba3a5d551acced7b4d808fa7a79.jpg'},
        {id: 8, nome:'Pietro Guimarães', idade:'19', idPosicao: 1, posicao:'Linha', idHabilidade: 3, habilidade:'Mediano', foto:'https://i.pinimg.com/564x/e9/96/6d/e9966dbe903a7c221f0357adc0743af0.jpg'},
        {id: 9, nome:'Isaac Ferraz', idade:'19', idPosicao: 1, posicao:'Linha', idHabilidade: 1, habilidade:'Muito Bom', foto:'https://i.pinimg.com/564x/5e/e1/16/5ee1168fc24fb1642c852803dfbc4901.jpg'},
        {id: 10, nome:'Leonardo Gonçalves', idade:'21', idPosicao: 1, posicao:'Linha', idHabilidade: 3, habilidade:'Mediano', foto:'https://i.pinimg.com/564x/3c/3d/20/3c3d20e3046a7451ad677d2627e3060e.jpg'},
        {id: 11, nome:'João Marcos', idade:'20', idPosicao: 1, posicao:'Linha', idHabilidade: 4, habilidade:'Ruim', foto:'https://i.pinimg.com/564x/d8/df/d8/d8dfd803579f1d54b429039d8549040e.jpg'},
        {id: 12, nome:'Pedro Costa', idade:'21', idPosicao: 1, posicao:'Linha', idHabilidade: 4, habilidade:'Ruim', foto:'https://i.pinimg.com/564x/c4/ea/4a/c4ea4af3ea3d57634729a4a6ede7c530.jpg'},
        {id: 13, nome:'Mateus Arcanjo', idade:'17', idPosicao: 1, posicao:'Linha', idHabilidade: 3, habilidade:'Mediano', foto:'https://i.pinimg.com/564x/74/05/24/74052423936b7aecec085bdcff2beaef.jpg'},
        {id: 14, nome:'Noah Gerard', idade:'22', idPosicao: 1, posicao:'Linha', idHabilidade: 4, habilidade:'Ruim', foto:'https://i.pinimg.com/564x/e7/07/90/e7079044bb9c13c92fceaebd83252299.jpg'},
        {id: 15, nome:'Marcus Santana', idade:'20', idPosicao: 1, posicao:'Linha', idHabilidade: 4, habilidade:'Ruim', foto:'https://i.pinimg.com/564x/1b/ad/48/1bad48e75c91c294515bafc247e9d901.jpg'},
        {id: 16, nome:'Caio Câmara', idade:'20', idPosicao: 2, posicao:'Goleiro', idHabilidade: 2, habilidade:'Bom', foto:'https://i.pinimg.com/564x/8e/c2/ff/8ec2ffd05a01810c86b7ddc7ba978bec.jpg'},
    ],
    posicoes: [
      {id: 1, descricao:'Linha'},
      {id: 2, descricao:'Goleiro'},
    ],
    habilidades: [
      {id: 1, descricao:'Muito Bom'},
      {id: 2, descricao:'Bom'},
      {id: 3, descricao:'Mediano'},
      {id: 4, descricao:'Ruim'},
    ]
}

// As imagens pegas foram do site pinterest e foi usado a pesquisa "meninos fakes" no site para usar imagens de pessoas
// aleatórias e não causar problemas de uso de imagem
let filtro_posicao = 0
let filtro_habilidade = 0

//MOSTRAR PESSOAS e FILTROS
function perfilPessoas () {
    let str = ''
    for(let i = 0; i < dbMock.pessoas.length; i++){
        let pessoa = dbMock.pessoas[i]

        if((!filtro_posicao || pessoa.idPosicao == filtro_posicao) &&
        (!filtro_habilidade || pessoa.idHabilidade == filtro_habilidade)) {
        str = str + `<div id="card" class="card mb-3" style="max-width: 660px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${pessoa.foto}" id="imagem" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${pessoa.nome}</h5>
              <p class="card-text">Idade: ${pessoa.idade}</p>
              <p class="card-text">Posição: ${pessoa.posicao}</p>
              <p class="card-text">Habilidade: ${pessoa.habilidade}</p>
              <a href="verPerfil.html?id=${pessoa.id}" class="btn btn-primary">Ver pefil</a>
            </div>
          </div>
        </div>
      </div>`

        }else if((!filtro_posicao || pessoa.idPosicao == filtro_posicao) && (filtro_habilidade == 0)){
          str = str + `<div id="card" class="card mb-3" style="max-width: 660px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${pessoa.foto}" id="imagem" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${pessoa.nome}</h5>
              <p class="card-text">Idade: ${pessoa.idade}</p>
              <p class="card-text">Posição: ${pessoa.posicao}</p>
              <p class="card-text">Habilidade: ${pessoa.habilidade}</p>
              <a href="verPerfil.html?id=${pessoa.id}" class="btn btn-primary">Ver pefil</a>
            </div>
          </div>
        </div>
      </div>`

        }else if((filtro_posicao == 0) && (!filtro_habilidade || pessoa.idHabilidade == filtro_habilidade)){
          str = str + `<div id="card" class="card mb-3" style="max-width: 660px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${pessoa.foto}" id="imagem" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${pessoa.nome}</h5>
              <p class="card-text">Idade: ${pessoa.idade}</p>
              <p class="card-text">Posição: ${pessoa.posicao}</p>
              <p class="card-text">Habilidade: ${pessoa.habilidade}</p>
              <a href="verPerfil.html?id=${pessoa.id}" class="btn btn-primary">Ver pefil</a>
            </div>
          </div>
        </div>
      </div>`


     }else if(filtro_posicao == 0 && filtro_habilidade == 0) {
      str = str + `<div id="card" class="card mb-3" style="max-width: 660px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${pessoa.foto}" id="imagem" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${pessoa.nome}</h5>
              <p class="card-text">Idade: ${pessoa.idade}</p>
              <p class="card-text">Posição: ${pessoa.posicao}</p>
              <p class="card-text">Habilidade: ${pessoa.habilidade}</p>
              <a href="verPerfil.html?id=${pessoa.id}" class="btn btn-primary">Ver pefil</a>
            </div>
          </div>
        </div>
      </div>`

     }
    }
    document.querySelector('#tela').innerHTML = str
}

//VER DETALHES
function verPessoa(id) {
        let idx = dbMock.pessoas.findIndex (elem => elem.id == id)
        if (idx != -1){
          let pessoa = dbMock.pessoas[idx]
        let str = `<div id="card" class="card mb-3" style="max-width: 860px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${pessoa.foto}" id="imagem" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${pessoa.nome}</h5>
              <p class="card-text">Idade: ${pessoa.idade}</p>
              <p class="card-text">Posição: ${pessoa.posicao}</p>
              <p class="card-text">Habilidade: ${pessoa.habilidade}</p>
              <a href="#" id=botaoVerPerfil class="btn btn-primary">Convidar</a>
            </div>
          </div>
        </div>
      </div>`
      document.querySelector('#tela').innerHTML = str
        } else {
          document.querySelector('#tela').innerHTML = '<h1>Pessoa não encontrada</h1>'
        }
      }
