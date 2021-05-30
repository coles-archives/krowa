const axios = require('axios').default

// docs
/**
 * returns id from username
 * @category Github
 * @alias getUser
 * @returns {Object<data>} user info
 * @param {string} username - a username
 * @example const krowa = require('krowa')
 * const res = krowa.GitHub.users.getUser('colenh')
 * console.log(res)
**/

async function getUser (username) {
  const uri = `https://api.github.com/users/${username}`
  const data = await (await axios.get(uri)).data
  console.log(data.login)
  return {
    username: data.login,
    id: data.id,
    avatar: data.avatar_url,
    name: data.name,
    website: data.blog
  }
}

module.exports = getUser
