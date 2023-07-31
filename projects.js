

// import { hhh,data } from "./library.js"
// // alert(hhh)
// console.table(data.data2)


let bars = document.getElementsByClassName('fa-bars')[0];

bars.addEventListener("click",()=>{
   document.getElementsByClassName("menus")[0].classList.toggle('collapse')
   
})
let topImage = document.getElementsByClassName('scrollToTop')[0];

window.addEventListener("scroll",()=>{
 if(scrollY > 222){
    topImage.style.display = "block";
 }else{
    topImage.style.display = "none";
    topImage.onclick = ()=>{
    scroll(0,0)
    }
 }

 if(scrollY > 100){
 //  let hb = ;

    document.getElementsByClassName("header")[0].style.boxShadow = `0px 0px 10px #00000034`

 }else{
    document.getElementsByClassName("header")[0].style.boxShadow = "none"
 }
})





let pro_data = document.querySelectorAll('.projectImage');
let thambnails;



for(let i = 0; i < pro_data.length; i++){
    pro_data[i].addEventListener("click",(e)=>{
        thambnails = e.target.src;
        document.getElementsByClassName('projectViewer')[0].style.display = 'block';
        document.getElementById('displayThamnail').src = thambnails;
        document.getElementById('tittleOftitle').innerHTML = `${e.target.title} <br> <b class="ownerName">CodeWithPrince</b>`;
   
        
   
      })
    }
    document.getElementsByClassName('fa-arrow-left')[0].onclick = ()=>{
      document.getElementsByClassName('projectViewer')[0].style.display = 'none';

    }

let ownerImages = document.querySelectorAll('.ownerImages');
ownerImages.forEach((images)=>{
   images.src = "images/prince.jpg"
})

let syntaxData = document.querySelectorAll("#image1");

for(let i=0; i<syntaxData.length; i++){
   syntaxData[i].addEventListener("click",(e)=>{
      let data =e.target.className;

      document.getElementById('preImage').src = data;
      
   })
}