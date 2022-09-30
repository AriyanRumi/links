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

// toolbar
let settingsToolbar =document.querySelector('.settingsToolbar')
let toolbar =document.querySelector('.toolbar')
let toolbarClose=document.querySelector('.toolbarClose')




settingsToolbar.addEventListener('click',()=>{
toolbar.classList.toggle('active')
})

toolbarClose.addEventListener('click',()=>{
    toolbar.classList.remove('active')
})





//note

let note =document.querySelector('.note')

note.addEventListener('click',()=>{
    window.location.assign('note.html')

})

 




let aboutusBtn =document.querySelector('.aboutusBtn')
let aboutus =document.querySelector('.aboutus')
let closeAbout =document.querySelector('.closeAbout')
aboutusBtn.addEventListener('click',()=>{
    aboutus.classList.toggle('active')
 })

 
closeAbout.addEventListener('click',()=>{
    aboutus.classList.remove('active')
 })







let filterCloseBtn =document.querySelector('.filterCloseBtn')
 let searchFilter =document.querySelector('.searchFilter')
 function myFunction() {
  searchFilter.classList.add('active')
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
            
        }
    }
}


filterCloseBtn.addEventListener('click',()=>{
    searchFilter.classList.remove('active')
})




// download

let dl =document.querySelector('.dl')
let dlpanel =document.querySelector('.dlpanel')
let dlclose =document.querySelector('.dlclose')
dl.addEventListener('click',()=>{
    dlpanel.classList.toggle('active')
})


dlclose.addEventListener('click',()=>{
    dlpanel.classList.remove('active')
})



