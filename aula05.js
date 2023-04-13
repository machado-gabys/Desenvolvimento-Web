//verifica os usuários e adiciona eles na lista de exibição -- primeira coisa na tela
if(localStorage.getItem('users') !== null) {
    let users = JSON.parse(localStorage.getItem('users'));
    for(let i=0; i<users.length; i++) {
      addUserToList(users[i].name, users[i].email);
    }
  }
  
  //Add user: adicionar user
  function addUser() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    let user = {
      name: name,
      email: email
    };
    
    //adiciona os usuários criados no form na lista
    addUserToList(name, email);
    addUserToStorage(user);
    
    // reset dos campos
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  }
  
  //add user na lista (pegando storage também)
  function addUserToList(name, email) {
    let userList = document.getElementById('userList');
    let listItem = document.createElement('li');
    listItem.innerHTML = '<strong>' + name + ':</strong> ' + email;
    userList.appendChild(listItem);
  }
  
  //adicionando ao storage
  function addUserToStorage(user) {
    let users = [];
    if(localStorage.getItem('users') !== null) {
      users = JSON.parse(localStorage.getItem('users'));
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }