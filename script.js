document.querySelectorAll('.comprar').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
        // Lógica para adicionar o produto ao carrinho
        // Aqui você pode criar uma variável para contar os itens no carrinho
        let count = localStorage.getItem('cartCount') || 0;
        count++;
        localStorage.setItem('cartCount', count);

        // Exemplo de como poderia mostrar o número de itens no carrinho
        console.log(`Você tem ${count} itens no carrinho.`);
    });
});
