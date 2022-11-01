//? Dependencies
require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development', //? Dasarrollo, Testing, Produccion
    jwtSecret: process.env.JWT_SECRET,
    db: {
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'admin',
        host: process.env.DB_HOST || 'localhost',
        name:process.env.DB_NAME
    }
}

module.exports = config




