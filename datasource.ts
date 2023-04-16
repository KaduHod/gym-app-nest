const {DataSource} = require("typeorm")

const Conn = new DataSource({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "gymapp2",
})

module.exports = Conn
