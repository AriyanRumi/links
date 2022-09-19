let pbtn =document.querySelector('.pbtn')
let inputText =document.querySelector('.inputText')
let ptext =document.querySelector('.ptext')
let close =document.querySelector('.cbtn')
let popup =document.querySelector('.popup')
let setting =document.querySelector('.settingsContent')
let rbtn =document.querySelector('.rbtn')


pbtn.addEventListener('click',()=>{
    let val =inputText.value
    localStorage.setItem("name", val);
    popup.classList.add('active')
    location.reload()
})


let newData =localStorage.getItem("name");
ptext.innerHTML=newData

if(localStorage.getItem("name")){
    popup.classList.add('active')
}else{
    popup.classList.remove('active')
}

rbtn.addEventListener('click',()=>{
    localStorage.removeItem('name')
    location.reload();
})


close.addEventListener('click',()=>{
    popup.classList.add('active')
})

function myfun(){
    setting.classList.toggle('active')
}





let linkbtn =document.querySelectorAll('.linkBtn')
let audi =document.querySelector('.audi')
let dclose =document.querySelector('.dclose')
let docu =document.querySelector('.document')
let tbtn =document.querySelector('.toggleSize')
linkbtn.forEach((curEle)=>{
    curEle.addEventListener('click',()=>{
        audi.play();
        audi.currentTime=0;
    })
})

tbtn.addEventListener('click',()=>{
    docu.classList.add('active')
})

dclose.addEventListener('click',()=>{
    docu.classList.remove('active')
})