# 🏀 EBAC Sports

Aplicação desenvolvida em **React + Redux Toolkit**, configurada com **Vite**.  
O projeto consome dados diretamente de uma API (não usa `json-server`).

---

## 🚀 Tecnologias utilizadas
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)

---

## 📂 Estrutura do projeto
```
ebac_sports/
│── index.html
│── package.json
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

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/ebac_sports.git
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
     baseURL: "https://sua-api-aqui.com" // substitua pela URL da API real
   });
   ```

5. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

6. Abra no navegador:
   ```
   http://localhost:5173
   ```

---

## 📌 Observações importantes
- O projeto **não utiliza json-server**.  
- Certifique-se de que o `package.json` está presente antes de rodar `npm install`.  
- Caso dê erro de lockfile, remova o `package-lock.json` e rode novamente:
  ```bash
  rm -f package-lock.json
  npm install
  ```

---

✍️ Desenvolvido por **Murilo Henrique Santana Rodrigues**
