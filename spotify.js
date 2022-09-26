function cancel(){
    let top_nav = document.getElementById('top-nav')
     top_nav.style.display = "none"
}



let accordion = document.querySelectorAll('.accordion-content')
accordion.forEach(function(e){
    e.addEventListener('click',()=>{
     e.classList.toggle('active')
    })
})


let anchor = document.getElementById('anchor')






// let hamburger = document.getElementById('hamburger')



// function ham(){
//  let none = document.getElementById('none')
//  none.style.display ='block'
//  alert('hi')
// }
// hamburger.addEventListener('click',ham)