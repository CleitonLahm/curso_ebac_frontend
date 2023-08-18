function multiplicacao(a, b) {
    return a * b;
}
function saudacao(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
var resultadoMultiplicacao = multiplicacao(5, 3);
console.log("Resultado da multiplica\u00E7\u00E3o: ".concat(resultadoMultiplicacao));
var saudacaoMensagem = saudacao("João");
console.log(saudacaoMensagem);
