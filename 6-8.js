/* 
=========================================================
RELATÓRIO DE AUDITORIA (SERIALIZAÇÃO E RE-HIDRATAÇÃO)
Auditores: Rafaella Eduarda do Carmo Arizono

1. Por que o formato JSON (JSON.stringify) não consegue salvar "métodos" (funções) de uma classe, salvando apenas os "atributos" (dados textuais)?
R: Porque o JSON armazena somente dados (texto, números, listas e objetos). Métodos são funções e não fazem parte do formato JSON.

2. O que o JavaScript perde na memória quando converte um Objeto para JSON? (Explique o que é o Prototype).
R: Ele perde o Prototype, que é a ligação do objeto com sua classe e onde ficam os métodos. Por isso, o objeto recuperado não consegue usar funções como decolar().

3. Defina o que é "Re-hidratar um Objeto". Como nós consertamos o código do Júnior aplicando essa técnica?
R: Re-hidratar é recriar um objeto da classe usando os dados do JSON. Fizemos isso com new Voo(...) e depois restauramos os demais atributos, fazendo os métodos voltarem a funcionar.
=========================================================
*/

class Voo {
    constructor(codigo, origem) {
        this.codigo = codigo;
        this.origem = origem;
        this.status = "No Solo";
    }

    decolar() {
        this.status = "Em Voo";
        console.log(`🛫 O voo ${this.codigo} acabou de decolar de ${this.origem}!`);
    }
}

console.log("=== SALVANDO O VOO NO DISCO ===");

let vooOriginal = new Voo("G3-777", "Curitiba");

console.log("Teste antes de salvar:");
vooOriginal.decolar();

localStorage.setItem("meuLogbook", JSON.stringify(vooOriginal));

console.log("Voo salvo com sucesso no LocalStorage!");

console.log("\n=== LENDO O VOO NO DIA SEGUINTE ===");

let dadosDoDisco = localStorage.getItem("meuLogbook");
let vooRecuperado = JSON.parse(dadosDoDisco);

console.log("Dados recuperados do disco:", vooRecuperado);
console.log("Código recuperado:", vooRecuperado.codigo);

// ==============================
// RE-HIDRATAÇÃO DO OBJETO
// ==============================

let vooHidratado = new Voo(
    vooRecuperado.codigo,
    vooRecuperado.origem
);

// Restaurando outros atributos
vooHidratado.status = vooRecuperado.status;

console.log("Tentando decolar o voo re-hidratado...");
vooHidratado.decolar();

console.log("Status atual:", vooHidratado.status);