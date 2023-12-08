import dotenv from 'dotenv';
import express from 'express';
import apiRoutes from './api/routes';
import { MysqlService } from './database/mysqlService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRoutes);

async function bootstrap() {
    const mysqlService = new MysqlService();

    try {
        await mysqlService.conectar(); // Connects to MySQL
        console.debug("Connected to MySQL server!");

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('Error during application initialization:', error);
        process.exit(1);
    }
}

bootstrap();
