function AvioesMilitares (tipoAeronave) {
    this.tipoAeronave = tipoAeronave;
}

function Combate (tipoAeronave, funcao, comandoMilitar, numAeronaves, armamento) {
    AvioesMilitares.call(this,tipoAeronave)

    this.tipodefuncao = funcao;
    this.localizacao = comandoMilitar;
    this.numAeronaves = numAeronaves;
    this.armamento = armamento;
    this.logSys = function () {
        console.log("Sistema de rastreamento acionado.");
    }
}

function Transporte(tipoAeronave, funcao, comandoMilitar, numAeronaves, armamento) {
    AvioesMilitares.call(this, tipoAeronave)

    this.tipodefuncao = funcao;
    this.localizacao = comandoMilitar;
    this.numAeronaves = numAeronaves;
    this.armamento = armamento;
    this.logSys = function () {
        console.log("Sistema de rastreamento acionado.");
    }
}

const F5_E = new Combate("F5-Northrop", "combate", "Sul, Centro e Norte", 36 , true);
console.log(F5_E);

const KC_390 = new Transporte("KC-390_M", "transporte", "Centro e Norte", 12 , false);
console.log(KC_390);

