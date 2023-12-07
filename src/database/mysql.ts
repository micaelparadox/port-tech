import mysql from 'mysql2/promise';

export async function conectarMySQL() {
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
    throw error;
  }
}
