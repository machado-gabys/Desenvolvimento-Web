
// bloco para adicionar um novo usuário na lista
function addUser() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    // aqui ele verifica se todos os campos foram preenchidos
    if (name === "" || phone === "" || email === "") {
        alert("Favor, preencha todos os campos para adicionar um usuário.");
        return;
    }

    // aqui ele verifica se o e-mail é válido
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        alert("E-mail inválido");
        return;
    }
    //aqui ele já pega o que tem no localStorage
    var userList = JSON.parse(localStorage.getItem("userList")) || [];

    var user = {
        name: name,
        phone: phone,
        email: email
    };

        //aqui adiciona novo usuário na lista
        userList.push(user);

        localStorage.setItem("userList", JSON.stringify(userList)); //atualiza a lista no localStorage

        // limpar o form
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";

        // atualizar a lista de usuários exibida na página
        displayUserList();
    s
}

// bloco para exibir a lista de usuários na página
function displayUserList() {
    // obter a lista de usuários do armazenamento local
    var userList = JSON.parse(localStorage.getItem("userList")) || [];

    var ul = document.getElementById("userList");

    // limpa a lista atual de usuários exibida na página
    ul.innerHTML = "";

    userList.forEach(function(user) {
        var li = document.createElement("li");
        li.innerHTML = "<b>Nome:</b> " + user.name + "<br><b>Telefone:</b> " + user.phone + "<br><b>E-mail:</b> " + user.email;
        ul.appendChild(li);
    });
}

// exibi a lista de usuários quando a página carrega
window.onload = function() {
    displayUserList();
};


//localStorage.clear(); //Limpar se necessário
