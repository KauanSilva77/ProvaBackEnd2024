# Content Manager API

Este projeto implementa uma API RESTful usando Node.js e TypeScript, permitindo a criação, leitura, atualização e exclusão (CRUD) de usuários, posts e comentários. O projeto utiliza MongoDB e MySQL para persistência de dados e é dockerizado para facilitar a configuração e a execução do ambiente.

## Sumário

- [Instalação](#instalação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Endpoints](#endpoints)

## Instalação

### Pré-requisitos

- Node.js
- Docker
- Docker Compose

### Passos para Instalação

1. Clone o repositório:

   git clone git@github.com:KauanSilva77/ProvaBackEnd2024.git

Navegue até o diretório do projeto:
-----------------------------------------------------------------------------------
Crie o arquivo .env com as seguintes variáveis de ambiente:

DB_NAME=content_manager_db
------------------------------------------------------------------------------------
DB_USER=root
------------------------------------------------------------------------------------
DB_PASSWORD=4815162342
------------------------------------------------------------------------------------
DB_HOST=db
------------------------------------------------------------------------------------
PORT=3000
------------------------------------------------------------------------------------
MONGO_URI=mongodb://mongo:27017/content_manager_db
------------------------------------------------------------------------------------

Execute o comando para construir e iniciar os containers Docker: docker-compose up --build
A API estará disponível em http://localhost:3000.
------------------------------------------------------------------------------------

## Tecnologias Utilizadas

Node.js: Ambiente de execução para JavaScript.

TypeScript: Superset do JavaScript que adiciona tipagem estática.

Express: Framework web para Node.js.

Mongoose: ODM (Object Data Modeling) para MongoDB.

Sequelize: ORM (Object-Relational Mapping) para MySQL.

Docker: Plataforma para criar, implantar e gerenciar containers.

Docker Compose: Ferramenta para definir e gerenciar multi-containers Docker.
------------------------------------------------------------------------------------

## Estrutura do Projeto
------------------------------------------------------------------------------------
src/
------------------------------------------------------------------------------------
├── config/
│   ├── db.ts             # Conexão com o banco de dados MongoDB e MySQL
│   ├── sequelize.ts      # Configuração do Sequelize
│   └── server.ts         # Inicialização do servidor
------------------------------------------------------------------------------------
├── models/
│   ├── mongo/
│   │   ├── User.ts       # Modelo do usuário para MongoDB
│   │   ├── Post.ts       # Modelo do post para MongoDB
│   │   └── Comment.ts    # Modelo de comentário para MongoDB
│   └── sequelize/
│       ├── User.ts       # Modelo do usuário para MySQL
│       ├── Post.ts       # Modelo do post para MySQL
│       └── Comment.ts    # Modelo de comentário para MySQL
------------------------------------------------------------------------------------
├── routes/
│   ├── user.ts           # Rotas relacionadas a usuários
│   ├── post.ts           # Rotas relacionadas a posts
│   └── comment.ts        # Rotas relacionadas a comentários
------------------------------------------------------------------------------------
├── utils/
│   ├── ResponseHandler.ts  # Classe para tratamento de respostas
│   └── RouteFunctions.ts   # Funções reutilizáveis para as rotas
------------------------------------------------------------------------------------
└── index.ts              # Ponto de entrada da aplicação
------------------------------------------------------------------------------------

## Endpoints

Dentro do repositório tem um arquivo: RotasProvaBackEnd.postman_collection.json é a collection das rotas para importar no postman.

Como importar collection no postman:

No canto superior esquerdo clique em import ao lado de new e selecione o arquivo json da collection. 

Abaixo estão os endpoints disponíveis na API(Todos presentes na collection):

------------------------------------------------------------------------------------
Usuários

POST /users/create: Cria um novo usuário.
GET /users/list: Lista todos os usuários.
PATCH /users/update/:id: Atualiza as informações de um usuário.
DELETE /users/delete/:id: Deleta um usuário.

------------------------------------------------------------------------------------
Posts

POST /posts/create: Cria um novo post.
GET /posts/list: Lista todos os posts.
PATCH /posts/update/:id: Atualiza as informações de um post.
DELETE /posts/delete/:id: Deleta um post.

------------------------------------------------------------------------------------
Comentários

POST /comments/create: Cria um novo comentário.
GET /comments/list: Lista todos os comentários.
PATCH /comments/update/:id: Atualiza as informações de um comentário.
DELETE /comments/delete/:id: Deleta um comentário
------------------------------------------------------------------------------------
