function somaNumeros(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    });
}

const arr = [1, 2];

console.log(somaNumeros(arr));

const lista = [
    {
        name: 'sabão em pó',
        price: 30
    },
    {
        name: 'cereal',
        price: 12
    },
    {
        name: 'toalha',
        price: 22
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({ prev })
        console.log({ current })
        return prev - current.price;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));