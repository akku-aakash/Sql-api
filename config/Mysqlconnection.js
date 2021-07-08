const mysql = require('mysql')

const connectDb = async () => {
    const db = await mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    })
    await db.connect((err) => {
        if (err) {
            throw err;
        } else {
            console.log('connected as id ' + db.threadId);
        }
    })
}

module.exports = connectDb