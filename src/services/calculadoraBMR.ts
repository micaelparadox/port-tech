/**
 * Classe para calcular o Basal Metabolic Rate (BMR).
 */
export class CalculadoraBMR {
    /**
     * Cria uma instância da CalculadoraBMR.
     * @param {number} peso - O peso em quilogramas.
     * @param {number} altura - A altura em centímetros.
     * @param {number} idade - A idade em anos.
     * @param {'masculino' | 'feminino'} genero - O gênero da pessoa.
     */
    constructor(private peso: number, private altura: number, private idade: number, private genero: 'masculino' | 'feminino') {
    }

    /**
     * Define ou atualiza os detalhes do usuário.
     * @param {number} peso - O peso em quilogramas.
     * @param {number} altura - A altura em centímetros.
     * @param {number} idade - A idade em anos.
     * @param {'masculino' | 'feminino'} genero - O gênero da pessoa.
     */
    public definirDetalhes(peso: number, altura: number, idade: number, genero: 'masculino' | 'feminino'): void {
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
        this.genero = genero;
    }

    /**
     * Calcula o BMR com base nos detalhes do usuário.
     * @return {number} O BMR calculado.
     */
    public calcularBMR(): number {
        if (this.genero === 'masculino') {
            return 88.362 + (13.397 * this.peso) + (4.799 * this.altura) - (5.677 * this.idade);
        } else {
            return 447.593 + (9.247 * this.peso) + (3.098 * this.altura) - (4.330 * this.idade);
        }
    }
}

export default CalculadoraBMR;