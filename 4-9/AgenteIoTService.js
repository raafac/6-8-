/* 
=========================================================
RELATÓRIO DE AUDITORIA DE TEMPO REAL (EVENT LOOP E IOT)
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Por que um laço infinito comum (while true) congela a aba do navegador, impedindo o usuário de clicar em qualquer botão?
R: Isso acontece porque o JavaScript trabalha principalmente em uma única linha de execução, ou seja, ele é Single Thread. Quando usamos um while(true), o código fica sendo executado sem parar e ocupa a Call Stack. Como essa tarefa nunca termina, o JavaScript não consegue executar outras ações, como cliques, atualizações da tela ou outros eventos, fazendo o navegador travar.

2. Como o 'Event Loop' e o 'setInterval' trabalham juntos para executar a nossa varredura de voos a cada 5 segundos sem travar a tela principal?
R: O setInterval envia a contagem do tempo para as Web APIs do navegador. Enquanto o navegador conta os 5 segundos, o JavaScript fica livre para executar outras tarefas. Quando o tempo termina, a função do setInterval fica pronta para ser executada. O Event Loop verifica quando a Call Stack está livre e então permite que essa função seja executada novamente. Assim, o sistema atualiza os voos de 5 em 5 segundos sem travar a página.

3. Pensando em um sistema do mundo real (IoT), qual o perigo de deixar um setInterval rodando para sempre se fecharmos o painel do aeroporto? (Dica: pesquise sobre clearInterval e Memory Leak).
R: Se um setInterval continuar funcionando mesmo quando não é mais necessário, ele pode continuar consumindo memória e processamento do sistema. Isso pode causar desperdício de recursos e até problemas de Memory Leak. Por isso, é importante guardar o identificador do intervalo e usar clearInterval quando o monitoramento não for mais necessário, desligando corretamente o agente.
=========================================================
*/

export default class AgenteIoTService {
    constructor(frota, funcaoRenderizar) {
        this.frota = frota;
        this.renderizar = funcaoRenderizar;

        this.intervalo = null;
    }

    iniciarMonitoramentoIncorreto() {
        console.log("Iniciando monitoramento...");

        /*
        while (true) {
            this.frota.forEach(voo => {
                if (voo.tempoParaDecolagem > 0) {
                    voo.tempoParaDecolagem -= 1;
                } else {
                    voo.status = "Decolado";
                }
            });

            this.renderizar();
        }
        */

        console.log("O código acima travou a 'Call Stack' (Pilha de Chamadas).");
    }

    iniciarMonitoramentoCorreto() {
        console.log("Agente IoT iniciado!");

        this.intervalo = setInterval(() => {

            this.frota.forEach(voo => {

                if (voo.tempoParaDecolagem > 0) {
                    voo.tempoParaDecolagem -= 1;
                }

                if (voo.tempoParaDecolagem === 0) {
                    voo.status = "Decolado";
                }

            });

            this.renderizar();

        }, 5000);
    }

    pararMonitoramento() {
        clearInterval(this.intervalo);

        console.log("Agente IoT desligado!");
    }
}
setInterval(() => {

    this.frota.forEach(voo => {

        if (voo.tempoParaDecolagem > 0) {
            voo.tempoParaDecolagem -= 1;
        }

        if (voo.tempoParaDecolagem === 0) {
            voo.status = "Decolado";
        }

    });

    this.renderizar();

}, 5000);