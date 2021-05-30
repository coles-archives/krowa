const krowa = require('../lib/index')
const user = krowa.github.users.getUser('colenh')

console.log(user.username)
