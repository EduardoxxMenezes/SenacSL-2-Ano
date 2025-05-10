let bemVindo = document.querySelector("#bemVindo");
let produtos = document.querySelectorAll(".servico");

let nome = prompt("Bem-vindo(a)! Qual o seu nome?");
let listaProdutos = [];


bemVindo.innerHTML = `BEM VINDA ${nome.toUpperCase()}!`;

produtos.forEach(produto => {
    let nome = produto.querySelector('h3').innerText.trim();
        let desc = produto.querySelector('p').innerText.trim();
        let preco = produto.getAttribute('data-preco');
       
    produto.addEventListener('click', () => {
        let interesse = confirm("nome: " + nome + "\n descrição: " + desc + "\n preço: " + preco + "\n \n Você tem interesse em comprar esta peça?");
        if (interesse) {
            alert("Peça adicionada ao seu carrinho!");
            let nomeProduto = produto.querySelector('h3').innerText.trim();
            listaProdutos.push(nomeProduto);
        }
    });
});

function listarProdutos() {
    if (listaProdutos.length === 0) {
        alert("Seu carrinho está vazio.");
    } else {
        alert("Seu carrinho contém:\n- " + listaProdutos.join("\n- "));
    }
}