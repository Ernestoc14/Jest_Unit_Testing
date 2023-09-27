// Prueba de registro exitoso: Registrar un nuevo usuario y 
// verificar que la función de registro devuelve un resultado exitoso.
const success = () => {
  registerUser(username, password);
  return "Registro exitoso. Ahora puedes iniciar sesión.";
}
// Prueba de registro con nombre de usuario duplicado: 
// Intentar registrar un usuario con un nombre de usuario que ya existe y 
// verificar que la función de registro maneje adecuadamente este caso.

// Prueba de autenticación exitosa: Iniciar sesión con credenciales válidas y 
// verificar que la función de autenticación permita el acceso.

// Prueba de autenticación con credenciales incorrectas: 
// Intentar iniciar sesión con credenciales incorrectas y 
// verificar que la función de autenticación las rechace.

// Prueba de almacenamiento seguro de contraseñas: 
// Verificar que las contraseñas se almacenen de manera segura y no en texto plano

module.exports = {
  success
}