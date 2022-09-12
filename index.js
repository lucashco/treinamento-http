const api = require('./api')


// user data
// id: string 
// name: string
// age: string


async function addUser() {
  const newUser = {
    id: new Date().getTime().toString(),
    name: 'Lucas Castilho',
    age: 28
  }

  const result = await api.post('/users', newUser)

  console.log({result})
}

async function getUser(userId) {
  const user = await api.get('/users?id=1663003749290')

  console.log(user.data)
}

async function getUsers() {
  const user = await api.get('/users')

  console.log(user.data)
}

async function updateUser() {
  const user = await api.put('/users/1663003749290', { age: 29, name: 'Lucas Castilho' })

  console.log(user.data)
}

async function deleteUser(userId) {
  const user = await api.delete('/users/1663003749290')

  console.log(user)
}

// addUser()
// getUser('1663003749290')
// getUsers()
// updateUser().catch(error => console.log(error))
deleteUser()