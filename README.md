# Black Next.js E-commerce

Este é um projeto de e-commerce desenvolvido com [Next.js](https://nextjs.org), inicializado com [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Sobre o Projeto

Este projeto é uma aplicação de e-commerce que permite aos usuários:
- Visualizar uma lista de produtos
- Ver detalhes de produtos específicos
- Adicionar produtos ao carrinho de compras
- Gerenciar itens no carrinho (adicionar/remover quantidades)
- Visualizar o valor total da compra

## Tecnologias Utilizadas

- **Next.js 15**: Framework React com renderização híbrida (SSR/SSG)
- **React 19**: Biblioteca para construção de interfaces
- **TypeScript**: Linguagem tipada para desenvolvimento mais seguro
- **Bootstrap 5 / Reactstrap**: Framework CSS para estilização responsiva
- **Context API**: Para gerenciamento de estado do carrinho de compras
- **Local Storage**: Para persistência do carrinho entre sessões

## Estrutura do Projeto

```
├── pages/                  # Rotas e páginas da aplicação
│   ├── api/                # Rotas da API
│   ├── products/           # Páginas de produtos
│   ├── _app.tsx            # Componente principal da aplicação
│   ├── cart.tsx            # Página do carrinho
│   └── index.tsx           # Página inicial
├── src/
│   ├── components/         # Componentes reutilizáveis
│   ├── hooks/              # Hooks personalizados
│   └── services/           # Serviços para comunicação com API
├── database.json           # Banco de dados simulado
└── public/                 # Arquivos estáticos
```

## Como Iniciar

Primeiro, instale as dependências:

```bash
npm install
# ou
yarn install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Funcionalidades Principais

### Listagem de Produtos
A página principal exibe todos os produtos disponíveis com imagem, nome e preço.

### Detalhes do Produto
Ao clicar em um produto, o usuário é direcionado para uma página com detalhes completos, incluindo descrição e disponibilidade em estoque.

### Carrinho de Compras
- Adição de produtos ao carrinho
- Visualização de itens no carrinho
- Ajuste de quantidades
- Cálculo automático do valor total
- Persistência do carrinho usando localStorage

## Desenvolvimento

Você pode começar a editar a página modificando `pages/index.tsx`. A página atualiza automaticamente conforme você edita o arquivo.

As rotas da API podem ser acessadas em [http://localhost:3000/api/products](http://localhost:3000/api/products). Este endpoint pode ser editado em `pages/api/products.ts`.

O diretório `pages/api` é mapeado para `/api/*`. Os arquivos neste diretório são tratados como rotas da API em vez de páginas React.

## Implantação

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Consulte a [documentação de implantação do Next.js](https://nextjs.org/docs/pages/building-your-application/deploying) para mais detalhes.
