function login(){
    let login = document.getElementById("login");
    let username = login.username.value;
    let password = login.pass.value;

    if(username == "ahmadadmin" && password == "nicenf"){
        location.href = "../backend/backend.html";
        alert("Login Sukses");
        return false;
    }else{
        alert("Login Gagal")
    }
}