function login() {
  const email = document.getElementById('email').value;

  apiGet(`action=login&email=${email}`)
    .then(user => {
      if (!user.sucesso) {
        alert('Usuário não encontrado');
        return;
      }

      localStorage.setItem('usuario', JSON.stringify(user));

      if (user.tipo === 'solicitante') location.href = 'solicitante.html';
      if (user.tipo === 'gestor') location.href = 'gestor.html';
      if (user.tipo === 'rh') location.href = 'rh.html';
    });
}

function getUsuario() {
  return JSON.parse(localStorage.getItem('usuario'));
}

function protegerTela(tipoPermitido) {
  const user = getUsuario();
  if (!user || user.tipo !== tipoPermitido) {
    location.href = 'index.html';
  }
}
