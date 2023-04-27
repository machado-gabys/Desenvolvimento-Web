// função para adicionar um novo usuário na lista
function addUser() {
    // obter o nome do usuário do input
    var name = document.getElementById("name").value;

    if (name !== "") {
        // obter a lista de usuários do armazenamento local
        var userList = JSON.parse(localStorage.getItem("userList")) || [];

        // adicionar o novo usuário na lista
        userList.push(name);

        // atualizar a lista de usuários no armazenamento local
        localStorage.setItem("userList", JSON.stringify(userList));

        // limpar o input
        document.getElementById("name").value = "";

        // atualizar a lista de usuários exibida na página
        displayUserList();
    }
}

// função para exibir a lista de usuários na página
function displayUserList() {
    // obter a lista de usuários do armazenamento local
    var userList = JSON.parse(localStorage.getItem("userList")) || [];

    // obter o elemento <ul> da página
    var ul = document.getElementById("userList");

     // limpar a lista atual de usuários exibida na página
     ul.innerHTML = "";

    // adicionar cada usuário da lista ao elemento <ul>
    userList.forEach(function(name) {
        var li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    });
}

// exibir a lista de usuários quando a página carrega
window.onload = function() {
    displayUserList();
};