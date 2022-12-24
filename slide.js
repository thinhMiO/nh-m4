// --------------slider---------------
const leftbtn = document.querySelector('.fa-angle-left')
const rightbtn = document.querySelector('.fa-angle-right')
const imgNumber = document.querySelectorAll('.slider-left-top img')
console.log(imgNumber.length)
let index = 0
rightbtn.addEventListener("click", function(){
    index = index + 1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector('.slider-left-top').style.right = index *100+"%" 
})
leftbtn.addEventListener("click", function(){
    index = index - 1
    if(index<0){
        index=imgNumber.length-1
    }
    document.querySelector('.slider-left-top').style.right = index *100+"%" 
})


// phần slider auto

function sliderAuto(){
    index = index + 1
    if(index>imgNumber.length-1){
        index = 0
    }
    document.querySelector('.slider-left-top').style.right = index *100+"%"
}
setInterval(sliderAuto,3500)
