import Voo from "./Voo.js";
import { salvarVoo } from "./StorageService.js";
import { renderizarTela } from "./PainelView.js";


document.getElementById("btnCadastrar")
.addEventListener("click", () => {

    let codigo = document.getElementById("inputCod").value;
    let destino = document.getElementById("inputDest").value;


    let novoVoo = new Voo(codigo, destino);


    salvarVoo(novoVoo);

    renderizarTela();

});