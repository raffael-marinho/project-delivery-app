import React from 'react';

function Navbar() {
  return (
    <section>
      <button
        data-testid="customer_products__element-navbar-link-products"
        type="button"
      >
        Produtos
      </button>
      <button
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
      >
        Meus Pedidos
      </button>
      <button
        data-testid="customer_products__element-navbar-user-full-name"
        type="button"
      >
        Nome da Pessoa
      </button>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Logout
      </button>
    </section>
  );
}

export default Navbar;

/*
  1 - Quando tiver as rotas para os botões, mudar a tag button para Link do react-router-dom
  2 - No botão "Nome da Pessoa" inserir o nome da pessoa logada, pelo database
*/
