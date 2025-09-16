# Ebac Sports

Este projeto foi desenvolvido como parte do curso da EBAC, utilizando **React + Redux Toolkit** e configurado com **Vite**.

## 🚀 Tecnologias
- React
- Redux Toolkit
- Axios
- Vite

## 📂 Estrutura do projeto
```
ebac_sports/
│── index.html
│── package.json
│── vite.config.js
│── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── sportsSlice.js
│   ├── components/
│   │   └── SportsList.jsx
│   └── services/
│       └── api.js
```

## ⚙️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ebac_sports.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd ebac_sports
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure a URL da API no arquivo `src/services/api.js`:
   ```javascript
   const api = axios.create({
     baseURL: "https://sua-api-aqui.com"
   });
   ```

5. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Acesse no navegador:
   ```
   http://localhost:5173
   ```

## 📌 Observações
- O projeto **não utiliza json-server**.
- As requisições são feitas diretamente para a API configurada em `api.js`.

---
✍️ Desenvolvido por Murilo Henrique Santana Rodrigues
