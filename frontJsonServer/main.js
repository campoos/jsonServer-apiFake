"use strict"

const containerFotos = document.getElementById("containerFotos")

async function pegarFotos(){
    const response = await fetch("http://localhost:3000/fotos")
    const data = await response.json()

    return data
}

async function carregarFotos() {
    const fotos = await pegarFotos()

    let index = 0
    setInterval(() =>{
        console.log(fotos[index])
        
        containerFotos.replaceChildren()

        let foto = document.createElement("img")
        foto.src = fotos[index].imagem

        let legenda = document.createElement("p")
        legenda.textContent = fotos[index].legenda

        containerFotos.appendChild(foto)
        containerFotos.appendChild(legenda)


        index = (index + 1) % fotos.length
    }, 4000)
}

carregarFotos()

