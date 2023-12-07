import { MongoClient } from 'mongodb';

export async function conectarMongoDB() {
    try {
        const cliente = new MongoClient(process.env.MONGODB_URI || '');
        await cliente.connect();
        console.log('Conectado ao MongoDB!');
        return cliente;
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        throw error;
    }
}
