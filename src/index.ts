import dotenv from 'dotenv';
import express from 'express';
import apiRoutes from './api/routes';
import { conectarMySQL } from './database/mysql';
import { conectarMongoDB } from './database/mongodb';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

async function bootstrap() {
    try {
        const dbMySQL = await conectarMySQL();
        const dbMongoDB = await conectarMongoDB();

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('Erro durante a inicialização da aplicação:', error);
        process.exit(1);
    }
}

bootstrap();
