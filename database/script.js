const { readFile } = require('fs/promises');
const knex = require('knex');

const db = knex({
  client: 'mysql2', // o nome do banco de dados que você está usando (exemplo: mysql, postgresql, sqlite3, etc.)
  connection: {
    host: 'localhost', // o endereço do servidor de banco de dados
    user: 'root', // o nome do usuário do banco de dados
    password: '123456', // a senha do usuário do banco de dados
    database: 'gymapp' // o nome do banco de dados que você está usando
  }
});

const getFileData = async () => {
    return await readFile('./exercises-with-ids', 'utf-8');
}

console.log(await getFileData())