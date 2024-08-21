# Usando uma imagem base oficial do Node.js
FROM node:18-alpine

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiando o package.json e o package-lock.json
COPY package*.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando o código da aplicação para dentro do contêiner
COPY . .

# Compilando o TypeScript para JavaScript
RUN npm run build

# Expondo a porta que a aplicação vai rodar
EXPOSE 3000

# Definindo o comando padrão para iniciar a aplicação
CMD ["npm", "run", "dev"]
