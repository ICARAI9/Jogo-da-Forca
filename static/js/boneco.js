function desenharBoneco(tentativasRestantes) {
    const forca = document.getElementById("forca");

    // Limpar o boneco antes de redesenhar 
    forca.innerHTML = "";

    // Base da forca
    const palo = document.createElement("div");
    palo.style.position = "absolute";
    palo.style.bottom = "0px";
    palo.style.left = "83%";
    palo.style.transform = "translateX(-50%)";
    palo.style.width = "2px";
    palo.style.height = "223px";
    palo.style.backgroundColor = "#333";
    forca.appendChild(palo);

    const travessa = document.createElement("div");
    travessa.style.position = "absolute";
    travessa.style.top = "27px";
    travessa.style.left = "88px";
    travessa.style.transform = "translateX(-50%)";
    travessa.style.width = "70px";
    travessa.style.height = "2px";
    travessa.style.backgroundColor = "#333";
    forca.appendChild(travessa);

    const travessaSuperior = document.createElement("div");
    travessaSuperior.style.position = "absolute";
    travessaSuperior.style.bottom = "100px";
    travessaSuperior.style.left = "83%";
    travessaSuperior.style.transform = "translateX(-50%)";
    travessaSuperior.style.width = "2px";
    travessaSuperior.style.height = "68px";
    travessaSuperior.style.backgroundColor = "#333";
    forca.appendChild(travessaSuperior);

    // Adiciona a cabeça se restam 5 ou menos tentativas
    if (tentativasRestantes <= 5) {
        const cabeca = document.createElement("div");
        cabeca.style.position = "absolute";
        cabeca.style.bottom = "160px";
        cabeca.style.left = "50%";
        cabeca.style.transform = "translateX(-50%)";
        cabeca.style.width = "50px";
        cabeca.style.height = "60px";
        cabeca.style.border = "2px solid blue";
        cabeca.style.borderRadius = "50%";
        forca.appendChild(cabeca);
    }

    // Adiciona o corpo se restam 4 ou menos tentativas
    if (tentativasRestantes <= 4) {
        const corpo = document.createElement("div");
        corpo.style.position = "absolute";
        corpo.style.bottom = "100px";
        corpo.style.left = "50%";
        corpo.style.transform = "translateX(-50%)";
        corpo.style.width = "2px";
        corpo.style.height = "60px";
        corpo.style.backgroundColor = "blue";
        forca.appendChild(corpo);
    }

    // Adiciona os braços se restam 3 ou menos tentativas
    if (tentativasRestantes <= 3) {
        // Braço esquerdo
        const bracoEsquerdo = document.createElement("div");
        bracoEsquerdo.style.position = "absolute";
        bracoEsquerdo.style.bottom = "130px";
        bracoEsquerdo.style.left = "16%";
        bracoEsquerdo.style.transform = "translateY(-50%) rotate(-45deg)";
        bracoEsquerdo.style.width = "60px";
        bracoEsquerdo.style.height = "2px";
        bracoEsquerdo.style.backgroundColor = "blue";
        forca.appendChild(bracoEsquerdo);
    }

    if (tentativasRestantes <= 2) {
        // Braço direito
        const bracoDireito = document.createElement("div");
        bracoDireito.style.position = "absolute";
        bracoDireito.style.bottom = "129px";
        bracoDireito.style.right = "12%";
        bracoDireito.style.transform = "translateY(-50%) rotate(45deg)";
        bracoDireito.style.width = "68px";
        bracoDireito.style.height = "2px";
        bracoDireito.style.backgroundColor = "blue";
        forca.appendChild(bracoDireito);
    }

    // Adiciona as pernas se restam 1 ou menos tentativas
    if (tentativasRestantes <= 1) {
        // Perna esquerda
        const pernaEsquerda = document.createElement("div");
        pernaEsquerda.style.position = "absolute";
        pernaEsquerda.style.top = "170px";
        pernaEsquerda.style.left = "17%";
        pernaEsquerda.style.transform = "translateY(6%) rotate(-45deg)";
        pernaEsquerda.style.width = "60px";
        pernaEsquerda.style.height = "2px";
        pernaEsquerda.style.backgroundColor = "blue";
        forca.appendChild(pernaEsquerda);
    }

    if (tentativasRestantes <= 0) {
        // Perna direita
        const pernaDireita = document.createElement("div");
        pernaDireita.style.position = "absolute";
        pernaDireita.style.top = "168px";
        pernaDireita.style.left = "45%";
        pernaDireita.style.transform = "translateY(60%) rotate(45deg)";
        pernaDireita.style.width = "55px";
        pernaDireita.style.height = "2px";
        pernaDireita.style.backgroundColor = "blue";
        forca.appendChild(pernaDireita);
    }
}