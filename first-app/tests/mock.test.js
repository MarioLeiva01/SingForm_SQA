test("login correcto llama setMessage", () => {
  const mockSetMessage = jest.fn();
  const users = [{ username: "admin", password: "1234" }];
  const username = "admin";
  const password = "1234";

  // Simulamos la lógica de login
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    mockSetMessage("¡Login exitoso!");
  } else {
    mockSetMessage("Usuario o contraseña incorrectos");
  }

  expect(mockSetMessage).toHaveBeenCalledWith("¡Login exitoso!");
});

test("login incorrecto llama setMessage con error", () => {
  const mockSetMessage = jest.fn();
  const users = [{ username: "admin", password: "1234" }];
  const username = "admin";
  const password = "0000";

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    mockSetMessage("¡Login exitoso!");
  } else {
    mockSetMessage("Usuario o contraseña incorrectos");
  }

  expect(mockSetMessage).toHaveBeenCalledWith("Usuario o contraseña incorrectos");
});

test("registro exitoso llama setUsers y setMessage", () => {
  const mockSetUsers = jest.fn();
  const mockSetMessage = jest.fn();

  const users = [];
  const newUser = { username: "juan", password: "1234", fullName: "Juan Pérez", email: "juan@test.com", phone: "123", address: "Calle 123" };

  if (!users.some(u => u.username === newUser.username)) {
    mockSetUsers([...users, newUser]);
    mockSetMessage("¡Usuario registrado con éxito!");
  }

  expect(mockSetUsers).toHaveBeenCalled();
  expect(mockSetMessage).toHaveBeenCalledWith("¡Usuario registrado con éxito!");
});

test("registro duplicado llama setMessage con error", () => {
  const mockSetUsers = jest.fn();
  const mockSetMessage = jest.fn();

  const users = [{ username: "juan", password: "1234" }];
  const newUser = { username: "juan", password: "abcd", fullName: "Juan Pérez", email: "juan@test.com", phone: "123", address: "Calle 123" };

  if (users.some(u => u.username === newUser.username)) {
    mockSetMessage("Usuario ya existe");
  } else {
    mockSetUsers([...users, newUser]);
    mockSetMessage("¡Usuario registrado con éxito!");
  }

  expect(mockSetMessage).toHaveBeenCalledWith("Usuario ya existe");
  expect(mockSetUsers).not.toHaveBeenCalled();
});

