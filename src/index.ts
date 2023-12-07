import mysql from 'mysql2/promise';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

async function conectarMySQL() {
  try {
    const conexao = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });
    console.log('Conectado ao MySQL/MariaDB!');
    return conexao;
  } catch (error) {
    console.error('Erro ao conectar ao MySQL/MariaDB:', error);
  }
}

async function conectarMongoDB() {
    try {
        const cliente = new MongoClient(process.env.MONGODB_URI || '');
        await cliente.connect();
        console.log('Conectado ao MongoDB!');
        return cliente;
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

async function bootstrap() {
    
    const dbMySQL = await conectarMySQL();
    const dbMongoDB = await conectarMongoDB();

    if (dbMySQL) await dbMySQL.end();
    if (dbMongoDB) await dbMongoDB.close();
}

bootstrap();
