const livrosDB = {
  "dom-casmurro": { titulo: "Dom Casmurro", autor: "Machado de Assis", capa: "assets/img/dom-casmurro.jpg", meta: "Publicado em 1899 • Romance Clássico", sinopse: "A história de Bento Santiago e seu amor por Capitu, narrada com dúvidas e ciúmes.", rating: "⭐⭐⭐⭐⭐ (4.8)" },
  "pequeno-principe": { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", capa: "assets/img/pequeno-principe.jpg", meta: "Publicado em 1943 • Infantojuvenil", sinopse: "Uma fábula poética sobre amizade, amor e responsabilidade, contada por um pequeno príncipe.", rating: "⭐⭐⭐⭐⭐ (4.9)" },
};

function updateHeaderOnLoad() {
  const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
  const headerTools = document.querySelector('.header-tools');

  if (loggedUser && headerTools) {
    const userProfileElement = `
      <div class="search-bar">
        <input type="text" placeholder="Pesquisar livros...">
      </div>
      <div class="profile-dropdown">
        <button class="dropdown-toggle" aria-label="Abrir menu do usuário">
          <img src="${loggedUser.foto}" alt="${loggedUser.nome}" class="profile-pic">
          <span class="caret"></span>
        </button>
        <div class="dropdown-menu">
          <a href="perfil.html" class="dropdown-item">Meu Perfil</a>
          <a href="#" class="dropdown-item" id="logout-btn">Sair</a>
        </div>
      </div>
    `;
    headerTools.innerHTML = userProfileElement;

    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('active');
    });

    window.addEventListener('click', () => {
      if (dropdownMenu.classList.contains('active')) {
        dropdownMenu.classList.remove('active');
      }
    });

    const logoutBtn = document.getElementById('logout-btn');
    if(logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('loggedUser');
        window.location.href = 'login.html';
      });
    }
  }
}

function handleRegister(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(user => user.email === email)) {
    alert("❌ Este e-mail já está em uso.");
    return;
  }

  const novoUsuario = { 
    nome, 
    username, 
    email, 
    senha,
    foto: `https://placehold.co/40x40/367BDE/FFF?text=${nome.charAt(0).toUpperCase()}`,
    bio: "Novo leitor no Alexandria!",
    listas: { lidos: [], queroLer: [], lendo: [], favoritos: [] }, 
    resenhas: [] 
  };
  
  users.push(novoUsuario);
  localStorage.setItem("users", JSON.stringify(users));

  alert("✅ Conta criada com sucesso! Faça o login para continuar.");
  window.location.href = "./login.html";
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = users.find(user => user.email === email && user.senha === senha);

  if (foundUser) {
    alert(`✅ Bem-vindo de volta, ${foundUser.nome}!`);
    delete foundUser.senha; 
    sessionStorage.setItem("loggedUser", JSON.stringify(foundUser));
    window.location.href = "./index.html";
  } else {
    alert("❌ Usuário ou senha inválidos.");
  }
}

function initAuthPage() {
  const loginForm = document.getElementById("login-form");
  const cadastroForm = document.getElementById("cadastro-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }
  if (cadastroForm) {
    cadastroForm.addEventListener("submit", handleRegister);
  }
}

function initBookPage() {
}

function initProfilePage() {
  const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));

  if (!loggedUser) {
    window.location.href = 'login.html';
    return;
  }

  function populateProfile() {
    document.getElementById('profile-pic').src = loggedUser.foto;
    document.getElementById('profile-name').innerText = loggedUser.nome;
    document.getElementById('profile-username').innerText = `@${loggedUser.username}`;
    document.getElementById('profile-bio').innerText = loggedUser.bio;
  }
  
  populateProfile();

  const editBtn = document.getElementById('edit-profile-btn');
  const modal = document.getElementById('edit-profile-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const editForm = document.getElementById('edit-profile-form');
  
  editBtn.addEventListener('click', () => {
    document.getElementById('edit-nome').value = loggedUser.nome;
    document.getElementById('edit-username').value = loggedUser.username;
    document.getElementById('edit-bio').value = loggedUser.bio;
    document.getElementById('edit-foto').value = loggedUser.foto;
    modal.classList.add('active');
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    loggedUser.nome = document.getElementById('edit-nome').value;
    loggedUser.username = document.getElementById('edit-username').value;
    loggedUser.bio = document.getElementById('edit-bio').value;
    loggedUser.foto = document.getElementById('edit-foto').value;

    sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));

    let allUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = allUsers.findIndex(user => user.email === loggedUser.email);
    if(userIndex !== -1) {
      allUsers[userIndex].nome = loggedUser.nome;
      allUsers[userIndex].username = loggedUser.username;
      allUsers[userIndex].bio = loggedUser.bio;
      allUsers[userIndex].foto = loggedUser.foto;
      localStorage.setItem('users', JSON.stringify(allUsers));
    }
    
    populateProfile();
    updateHeaderOnLoad();
    closeModal();
    alert('Perfil atualizado com sucesso!');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderOnLoad();

  const pageId = document.body.id;

  switch (pageId) {
    case 'page-login':
    case 'page-cadastro':
      initAuthPage();
      break;
    case 'page-livro':
      initBookPage();
      break;
    case 'page-perfil':
      initProfilePage();
      break;
  }
});