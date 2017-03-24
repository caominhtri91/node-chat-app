class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var resUser;
    this.users = this.users.filter((user) => {
      if (user.id === id) {
        resUser = user;
      }
      return user.id !== id;
    });

    return resUser;
  }

  getUser(id) {
    var resUsers = this.users.filter((user) => user.id === id);
    return resUsers[0];
  }

  getUserList(room) {
    var namesArray = this.users
      .filter((user) =>  user.room === room)
      .map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};
