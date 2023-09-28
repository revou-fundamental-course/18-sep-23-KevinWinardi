document.getElementById("button").addEventListener("click",function(){
    let name = document.forms["content-form"]["your-name"].value;
    let email = document.forms["content-form"]["email"].value;
    let interest = document.forms["content-form"]["interest"].value;
    if(name==""){
        document.getElementById("name-error").innerText="Nama tidak boleh kosong";
    } else {
        document.getElementById("name-error").innerText="";
    }

    if(email==""){
        document.getElementById("email-error").innerText="Email tidak boleh kosong";
    } else {
        document.getElementById("email-error").innerText="";
    }

    if(interest==""){
        document.getElementById("interest-error").innerText="Pilihan tidak boleh kosong";
    } else {
        document.getElementById("interest-error").innerText="";
    }

    if(name!="" && email!="" && interest!=""){
        alert("Data sudah kami terima, mohon tunggu konfirmasi berikutnya. Terima kasih.");
    }
})

let slideIndex=0;
showSlides();

function showSlides(){
    let i;
    let slides=document.getElementsByClassName("slider");
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if (slideIndex>slides.length){slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,3000);
    
}