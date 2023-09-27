// Objeto que simula una base de datos de usuarios (esto es simplificado y no seguro en la práctica).
const fakeDatabase = {
  users: [],
};

// Función para registrar un nuevo usuario.
function registerUser(username, password) {
  // Verificar si el usuario ya existe.
  const existingUser = fakeDatabase.users.find((user) => user.username === username);
  
  if (existingUser) {
    return "El nombre de usuario ya está en uso.";
  }
  // Si no existe el username, entonces se agrega a fakeDatabase
  // Almacenar el nuevo usuario (esto es simplificado y no seguro en la práctica).
  fakeDatabase.users.push({ username, password });
  return "Registro exitoso. Ahora puedes iniciar sesión.";
}

// Función para autenticar a un usuario.
function authenticateUser(username, password) {
  // Buscar al usuario en fakeDatabase.
  const user = fakeDatabase.users.find((user) => user.username === username);

  if (!user) { // Si no hay usuario
    return "Usuario no encontrado.";
  }

  if (user.password === password) { // Verifica la contrasena del usuario
    return "Inicio de sesión exitoso. ¡Bienvenido!";
  } else {
    return "Contraseña incorrecta. Inténtalo de nuevo.";
  }
}

// Ejemplo de uso:
// Agregamos usuarios
console.log(registerUser("usuario1", "contraseña123")); // Registro exitoso. Ahora puedes iniciar sesión.
// Casos de error
console.log(authenticateUser("usuario1", "contraseña123")); // Inicio de sesión exitoso
console.log(authenticateUser("usuario2", "contraseña456")); // Usuario no encontrado.
console.log(authenticateUser("usuario1", "contraseña456")); // Usuario encontrado y contraseña incorrecta.
console.log(fakeDatabase.users) // Contenido de fakeDatabase