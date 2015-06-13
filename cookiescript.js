function saveContents() {
    localStorage.myname = document.forms['loginform'].user_name.value;
}
function saveContentsAccountCreate() {
    localStorage.myname = document.forms['form2'].username.value;
}
function restoreContents() {
   alert(localStorage.myname);
}