const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


test('remove user that is not to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);  
    let usersBefore = [...userController.getUsers()];
    let user2 = new User(9876, "Panchito", "panchito@perez.com"); 
    userController.remove(user2);
    expect(userController.users).toEqual(usersBefore);
  });

  test('find user by email', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findByEmail("santiago@generation.org")).toStrictEqual(user);
  });

   test('fail to find user by email', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findByEmail("conchitacauich@generation.org")).toBeUndefined();
  });

    test('find user by Id', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findById(1234)).toStrictEqual(user);
  });

   test('fail to find user by Id', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findById("3689")).toBeUndefined();
  });

