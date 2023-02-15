async function listaVideos (){
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaoConvertida = await conexao.json();
  
    return conexaoConvertida;   
}

async function criaVideo(){
    const conexao = await fetch("http://localhost:3000", {
       method: "POST",
       headers: {
        "Content-type": "application/json"
       },
       body: JSON.stringify({
        titulo: titulo,
        descricao: `${descricao} mil visualizações`,
        url: url,
        imagem: imagem
       })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;


}

export const conectaAPI = {
    listaVideos,
    criaVideo
}