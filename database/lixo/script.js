const { readFile, writeFile } = require('fs/promises');
const knex = require('knex');

const db = knex({
  client: 'mysql2', 
  connection: {
    host: 'localhost', // o endereço do servidor de banco de dados
    user: 'root', // o nome do usuário do banco de dados
    password: '123456', // a senha do usuário do banco de dados
    database: 'gymapp' // o nome do banco de dados que você está usando
    ,port:3306
  }
});

const getFileData = async () => {
    return await readFile('./inserts.json', 'utf-8');
}

const inserir = (exercicio, db) => {
    const inserirExercicio = async () => {

    }

    const inserirAgonistas = async () => {

    }

    const inserirAntagonistas = async () => {

    }

    const inserirSinergistas = async () => {

    }
}

async function main() {
    const file = JSON.parse(await getFileData())
    
    for await (const exercise of file) {
        const exercises = exercise.insertExercise
        const agonists = exercise.insertAgonist
        const antagonists = exercise.insertAntagonist
        const sinergysts = exercise.insertSinergyst

        await db.raw(exercises)

        for await (const agonist of agonists) {
            await db.raw(agonist)
        }

        for await (const antagonist of antagonists) {
            await db.raw(antagonist)
        }

        for await (const sinergyst of sinergysts) {
            await db.raw(sinergyst)
        }

        console.log("\n ", exercises)
    }

}

const makeInsert = async () => {
    const file = JSON.parse(await readFile('./maisTop.json', 'utf-8'));
    
    const result = file.map((exercise, index) => {
        return {
            insertExercise: `insert into exercicios (id, name) values (${index+1}, '${exercise.name}')`,
            insertAgonist:  exercise.agonist.map( muscle_portion_id => {
                return `insert into exercicios_muscle_portion (exercise_id, muscle_portion_id, role) values (${index+1}, ${muscle_portion_id}, 'agonist')`
            }),
            insertAntagonist: exercise.antagonist.map( muscle_portion_id => {
                return `insert into exercicios_muscle_portion (exercise_id, muscle_portion_id, role) values (${index+1}, ${muscle_portion_id}, 'antagonist')`
            }),
            insertSinergyst: exercise.synergist.map( muscle_portion_id => {
                return `insert into exercicios_muscle_portion (exercise_id, muscle_portion_id, role) values (${index+1}, ${muscle_portion_id}, 'synergist')`
            })
        }
    })

    await writeFile('./inserts.json', JSON.stringify(result))
}

main() 

