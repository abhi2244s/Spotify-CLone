function cancel(){
    let top_nav = document.getElementById('top-nav')
     top_nav.style.display = "none"
}



let accordion = document.querySelectorAll('.accordion-content')
console.log(accordion)

for(let i=0; accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active') 
    })
}