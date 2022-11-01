const  { getUserByEmail } = require('../users/users.controller')
const { comparePassword } = require('../utils/crypto')

const loginUser = async (email, password) => {
    try {
       const user = await getUserByEmail(email)
       const verifyPassword = comparePassword(password, user.password)
       
        if (verifyPassword) {
            return user
        } 
        return false

    } catch {
        return false
    }
}

module.exports = {
    loginUser
}

