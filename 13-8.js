/*
=========================================================
RELATÓRIO DE AUDITORIA (DESIGN PATTERN - SINGLETON)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. O que é um "Design Pattern" (Padrão de Projeto) e, especificamente, o que o padrão Singleton garante para a nossa aplicação?
R: Design Pattern é uma solução reutilizável para problemas comuns de projeto de software. O Singleton garante que uma classe possua apenas uma única instância durante a execução da aplicação e fornece uma forma de acessar essa mesma instância. No nosso caso, isso garante que todos os setores utilizem a mesma Torre de Controle e compartilhem o mesmo estado da pista.

2. O que a palavra-chave 'static' (estático) faz em uma classe JavaScript? Qual a diferença de uma variável estática para uma variável comum (this)?
R: Uma propriedade static pertence à própria classe, e não às instâncias criadas com new. Já uma propriedade criada com this pertence a cada objeto individualmente. Por isso, TorreDeControle.instancia pode armazenar e controlar a única instância compartilhada pela classe.

3. Como você comprova no código que 'torreSetorNorte' e 'torreSetorSul' são exatamente o mesmo objeto na memória após a correção?
R: Podemos utilizar a comparação de igualdade estrita (===). O resultado será true, comprovando que as duas variáveis apontam para exatamente o mesmo objeto na memória.

=========================================================
*/

class TorreDeControle {
    static instancia;

    constructor() {
        if (TorreDeControle.instancia) {
            return TorreDeControle.instancia;
        }

        this.pistaOcupada = false;
        this.nomeDaTorre =
            "Torre Central " + Math.floor(Math.random() * 1000);

        TorreDeControle.instancia = this;
    }

    autorizarPouso(codigoVoo) {
        if (this.pistaOcupada) {
            console.log(
                `❌ [RECUSADO] Pista ocupada! Voo ${codigoVoo} aguarde.`
            );
        } else {
            this.pistaOcupada = true;
            console.log(
                `✅ [AUTORIZADO] Voo ${codigoVoo} pousando via ${this.nomeDaTorre}.`
            );
        }
    }
}

// ========================================================
let torreSetorNorte = new TorreDeControle();
let torreSetorSul = new TorreDeControle();

console.log("--- INICIANDO APROXIMAÇÃO ---");

torreSetorNorte.autorizarPouso("LATAM-100");

torreSetorSul.autorizarPouso("GOL-200");

console.log(torreSetorNorte === torreSetorSul);