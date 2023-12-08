import mysql from 'mysql2/promise';

export class MysqlService {
    private conexao?: mysql.Connection;

    public async conectar(): Promise<mysql.Connection> {
        if (!this.conexao) {
            try {
                this.conexao = await mysql.createConnection({
                    host: process.env.MYSQL_HOST,
                    user: process.env.MYSQL_USER,
                    password: process.env.MYSQL_PASSWORD,
                    database: process.env.MYSQL_DATABASE
                });
                console.log('Conectado ao MySQL/MariaDB!');
            } catch (error) {
                console.error('Erro ao conectar ao MySQL/MariaDB:', error);
                throw error;
            }
        }
        return this.conexao;
    }
}
