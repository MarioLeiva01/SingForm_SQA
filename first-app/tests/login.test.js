// tests/login.simple.test.js

// Función auxiliar para login
function login(username, password, users) {
  return users.find(u => u.username === username && u.password === password);
}

test("login correcto", () => {
  const users = [{ username: "admin", password: "1234" }];
  const result = login("admin", "1234", users);
  expect(result).toBeDefined();
});

test("login incorrecto - contraseña inválida", () => {
  const users = [{ username: "admin", password: "1234" }];
  const result = login("admin", "0000", users);
  expect(result).toBeUndefined();
});

test("login incorrecto - usuario inexistente", () => {
  const users = [{ username: "admin", password: "1234" }];
  const result = login("pepe", "1234", users);
  expect(result).toBeUndefined();
});

test("login incorrecto - usuario y contraseña inválidos", () => {
  const users = [{ username: "admin", password: "1234" }];
  const result = login("pepe", "0000", users);
  expect(result).toBeUndefined();
});

test("login correcto con múltiples usuarios", () => {
  const users = [
    { username: "admin", password: "1234" },
    { username: "juan", password: "abcd" },
    { username: "maria", password: "pass" }
  ];
  const result = login("juan", "abcd", users);
  expect(result).toBeDefined();
  expect(result.username).toBe("juan");
});
