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



//change bg color
let bgBtn =document.querySelector('.bgBtn')

bgBtn.addEventListener('click',()=>{
    let bgArray =['#FFF5E4','#FFE3E1','#FFD1D1','#FF9494','#937DC2','#C689C6','#E8A0BF','#748DA6','#9CB4CC','#F2D7D9','#0a3d62','#0c2461','#6a89cc','#60a3bc','#079992','#20bf6b','#4b6584','#2d98da','#eb3b5a','#2f3542','#2c3e50','#bdc3c7']
    let random =Math.floor(Math.random()*21)
    let gen =bgArray[random]
   document.body.style.backgroundColor=gen
   localStorage.setItem('bg',gen)
})

let bgData =localStorage.getItem("bg");
document.body.style.backgroundColor=bgData



//note

let note =document.querySelector('.note')
let notepad =document.querySelector('.notepad')
let closeNoteBtn =document.querySelector('.closeNoteBtn')
let saveBtn =document.querySelector('.saveBtn')
let alerts =document.querySelector('.alerts')


note.addEventListener('click',()=>{
   notepad.classList.toggle('active')
})

closeNoteBtn.addEventListener('click',()=>{
    notepad.classList.remove('active')
 })

 
 saveBtn.addEventListener('click',()=>{

let notedown =document.querySelector('.notedown')
let notedownVal =notedown.value;
localStorage.setItem('note',notedownVal)
alerts.classList.add('active')
setTimeout(()=>{
    alerts.classList.remove('active')
 },2000)

 })



let copyBtn =document.querySelector('.copyBtn')

copyBtn.addEventListener('click',()=>{
    let notedown =document.querySelector('.notedown')
    let notedownVal =notedown.value;
    navigator.clipboard.writeText(notedownVal)
    alerts.classList.add('active')
setTimeout(()=>{
    alerts.classList.remove('active')
 },2000)
 })

let notedown =document.querySelector('.notedown')
let getNote =localStorage.getItem('note')
notedown.innerHTML=getNote;



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
