# 🔗 Encurtador de URL

## 📌 Descrição

Projeto completo de **encurtador de URLs** com front-end e back-end.

Permite que usuários criem URLs curtas de **6 dígitos**, acompanhem o número de acessos e recebam um **email de aviso** caso a URL fique inativa por 30 dias.

O front-end é feito com **React, TypeScript, Vite, Tailwind CSS, react-hook-form, Zod, Axios e Toastify**, enquanto o back-end utiliza **Node.js, Express, TypeScript, Prisma e PostgreSQL**, além de integração com **SendGrid** para envio de emails.

---

## 🛠️ Tecnologias Utilizadas

### 🎨 Front-end

- React
- TypeScript
- Vite
- Tailwind CSS
- react-hook-form
- Zod
- Axios
- Toastify

### ⚙️ Back-end

- Node.js
- TypeScript
- Express
- Prisma (PostgreSQL)
- Zod (validação)
- SendGrid (envio de email)

---

## 💻 Funcionalidades

- Criação de URLs curtas com **6 dígitos aleatórios**
- Contagem de acessos por URL curta
- Exclusão automática de URLs **após 30 dias de inatividade**
- Envio de **email de aviso** antes da exclusão usando SendGrid
- Front-end com formulários validados via react-hook-form e Zod
- Notificações visuais com Toastify

---

## 📁 Estrutura do Projeto

```
├── FrontEnd/          # Projeto React com Vite
├── BackEnd/           # API Node.js com Express e Prisma
├── .gitignore
├── package-lock.json
└── package.json
```

---

## 📷 Capturas de Tela

![alt text](image.png)

## ![alt text](image-1.png)

## 🚀 Como Rodar o Projeto

### 🔧 Requisitos

- Node.js 16.x ou superior
- npm
- PostgreSQL

### 📌 Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/dkrausz/encurtador_de_URL.git
   cd encurtador_de_URL
   ```

2. Instale as dependências do **back-end**:

   ```bash
   cd BackEnd
   npm install
   ```

3. Configure o arquivo `.env` com as variáveis:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/db_name
   API_KEY_SEND_GRID=your_sendgrid_api_key
   ```

4. Rode as migrations do Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o back-end:

   ```bash
   npm run dev
   ```

6. Em outro terminal, vá para o front-end e instale as dependências:

   ```bash
   cd ../FrontEnd
   npm install
   npm run dev
   ```

7. Acesse o front-end no navegador:  
   👉 `http://localhost:5173`

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.  
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
