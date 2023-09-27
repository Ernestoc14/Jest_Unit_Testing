// Objeto que simula una base de datos de usuarios.
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
  if ( username === "" || password === "") {
    return "El nombre de usuario y la contraseña son requeridos.";
    // fakeDatabase.users = [];
    // return "Se limpio el array.";
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
  // console.log(fakeDatabase.users)
  
  if (!user) { // Si no hay usuario registrado
    return "Usuario no registrado. Inténtalo de nuevo.";
  }

  if ((user.password === password) && (user.username === username)) { // Verifica la contrasena del usuario
    return "Inicio de sesión exitoso. ¡Bienvenido!";
  } else {
    return "Contraseña incorrecta. Inténtalo de nuevo.";
  }
}


module.exports = {
  registerUser, 
  authenticateUser
}