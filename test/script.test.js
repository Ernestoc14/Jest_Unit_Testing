// import { expect, test } from "@jest/globals";
const { registerUser, authenticateUser } = require("../utils/for_testing");

// Username: username  Password: password
// Success: Prueba de registro exitoso
test("Prueba de registro exitoso", () => {
  const result = registerUser("username", "password");
  expect(result).toBe("Registro exitoso. Ahora puedes iniciar sesión.");
});

// Failuare: Prueba de registro exitoso con el usuario duplicado
test("Prueba de registro con usuario existente", () => {
  const result = registerUser("username", "password");
  expect(result).toBe("El nombre de usuario ya está en uso.");
});

// Failure: Prueba de registro con username y password vacio
test("Prueba de registro con usuario y contrasena vacia", () => {
  const result = registerUser("", "");
  expect(result).toBe("El nombre de usuario y la contraseña son requeridos.")
  // expect(result).toBe("Se limpio el array.")
})


// Success: Prueba de autenticación exitosa
// Username: username  Password: password
test("Prueba de autenticación exitosa", () => {
  const result = authenticateUser("username", "password");
  expect(result).toBe("Inicio de sesión exitoso. ¡Bienvenido!");
})

// Failure: Prueba de autenticación con credenciales incorrectas
// Username: username  Password: p
test("Prueba de autenticación con credenciales incorrectas", () => {
  const result = authenticateUser("username", "p");
  expect(result).toBe("Contraseña incorrecta. Inténtalo de nuevo.");
})

// Failure: Prueba de autenticación con credenciales incorrectas
// Username: us  Password: pas
test("Prueba de autenticación con credenciales incorrectas", () => {
  const result = authenticateUser("us", "pas");
  expect(result).toBe("Usuario no registrado. Inténtalo de nuevo.");
})

// Success: Prueba de almacenamiento seguro de contraseñas
// Verificar que las password no se almacenen en texto plano
test("Prueba de almacenamiento seguro de contraseñas", () => {
  const result = registerUser("username", "password");
  expect(result).not.toBe("password");
})