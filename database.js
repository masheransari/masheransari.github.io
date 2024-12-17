const createUser = user =>{
  if (!user.name) throw new Error('Name is required');
  console.log(`user ${user.name} created`)
  return Promise.resolve(user);
}

const deleteUser = user =>{
  if (!user.name) throw new Error('Name is required');
  console.log(`user ${user.name} deleted`)
  return Promise.resolve(user);
}

module.exports = {
  createUser,
  deleteUser
}



