export function salvarVoo(voo) {
    let frota = JSON.parse(localStorage.getItem("frota")) || [];

    frota.push(voo);

    localStorage.setItem("frota", JSON.stringify(frota));

    console.log("Voo salvo no banco de dados local.");
}


export function buscarVoos() {
    return JSON.parse(localStorage.getItem("frota")) || [];
}