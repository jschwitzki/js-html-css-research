function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new ReferenceError("O Array deve ser um tipo Object");

        if (typeof num !== 'number') throw new ReferenceError("Num precisa ser do tipo Number");

        if (arr.length !== num) throw new RangeError("O tamanho do array é diferente do parâmetro");

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Erro é do tipo ReferenceError");
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Erro é do tipo TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Erro é do tipo RangeError");
            console.log(e.message);
        } else {
            console.log("Erro não esperado: " + e);
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));