const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Tri',
      room: 'example'
    }, {
      id: '2',
      name: 'Cao',
      room: 'real'
    }, {
      id: '3',
      name: 'Minh',
      room: 'example'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Tri Minh',
      room: 'example'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var resUser = users.removeUser('1');
    expect(resUser.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var resUser = users.removeUser('1234999');
    expect(resUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var resUser = users.getUser('2');
    expect(resUser.id).toBe(users.users[1].id);
  });

  it('should not find user', () => {
    var resUser = users.getUser('9999');
    expect(resUser).toNotExist();
  });

  it('should return names for example room', () => {
    var userList = users.getUserList('example');
    expect(userList).toEqual([users.users[0].name, users.users[2].name]);
  });

  it('should return names for real room', () => {
    var userList = users.getUserList('real');
    expect(userList).toEqual([users.users[1].name]);
  });
});
