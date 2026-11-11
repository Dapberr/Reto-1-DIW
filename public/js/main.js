// Simulación de formularios (sin backend todavía).
function simular(formId, mensajeId, validar, texto) {
  const form = document.getElementById(formId);
  if (!form) return;
  const caja = document.getElementById(mensajeId);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const error = validar(form);
    caja.hidden = false;
    if (error) {
      caja.style.background = 'rgba(224, 82, 82, .15)';
      caja.style.borderColor = '#e05252';
      caja.textContent = error;
      return;
    }
    caja.style.background = '';
    caja.style.borderColor = '';
    caja.textContent = texto;
    form.reset();
  });
}

const vacio = (v) => !v || !v.trim();

simular(
  'form-login',
  'mensaje-login',
  (f) => (vacio(f.usuario.value) || vacio(f.password.value))
    ? 'Introduce tu usuario y tu contraseña.'
    : null,
  'Inicio de sesión simulado correctamente. (La autenticación real llegará en la siguiente entrega.)'
);

simular(
  'form-contacto',
  'mensaje-contacto',
  (f) => {
    if (vacio(f.nombre.value) || vacio(f.email.value) || vacio(f.mensaje.value)) {
      return 'Rellena todos los campos.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value)) {
      return 'Introduce un correo electrónico válido.';
    }
    return null;
  },
  'Mensaje enviado (simulado). ¡Gracias por escribirnos!'
);
