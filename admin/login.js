var x = document.getElementById("inputEmail");
var p = document.getElementById("inputPassword");

document.getElementById("form").addEventListener("submit", (ee)=>{
   ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if(x.value == "admin@gmail.com" && p.value == "qwerty") {
        swal.fire({
        title: 'Welcome',
        html: 'Access granted',
        type: 'success'
    });
    setTimeout(() => {
        loadPage();
    }, 300);
} else {
    swal.fire({
        title: 'ERROR',
        html: 'Access denied',
        type: 'error'
    });
}
    function loadPage() {
        window.location.href="./admin.html";
    }
});