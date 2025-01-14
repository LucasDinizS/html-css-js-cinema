const express = require('express');
const cors = require('cors'); // Importar o pacote CORS
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY; // Obter a API Key do .env

// Permitir requisições de origens diferentes
app.use(cors());

app.use(express.json());

// Rota simples
app.get('/', (req, res) => {
    res.json({ apiKey: API_KEY });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
