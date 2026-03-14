function register(username, password, users) {
  const exists = users.some(u => u.username === username);
  if (exists) return null; // usuario duplicado
  const newUser = { username, password };
  users.push(newUser);
  return newUser;
}

test("registro exitoso", () => {
  const users = [];
  const result = register("juan", "1234", users);
  expect(result).toBeDefined();
  expect(users.length).toBe(1);
  expect(users[0].username).toBe("juan");
});

test("usuario duplicado", () => {
  const users = [{ username: "juan", password: "1234" }];
  const result = register("juan", "abcd", users);
  expect(result).toBeNull();
  expect(users.length).toBe(1);
});

test("registro de múltiples usuarios", () => {
  const users = [];
  register("juan", "1234", users);
  register("maria", "abcd", users);
  expect(users.length).toBe(2);
  expect(users.some(u => u.username === "maria")).toBe(true);
});

test("registro con contraseña vacía", () => {
  const users = [];
  const result = register("pedro", "", users);
  expect(result).toBeDefined();
  expect(users.length).toBe(1);
});

test("registro con usuario inexistente", () => {
  const users = [];
  const result = register("ana", "pass", users);
  expect(result).toBeDefined();
  expect(users[0].username).toBe("ana");
});
