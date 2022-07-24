const progress = document.getElementById(`progress`)
const next = document.getElementById(`next`)
const prev = document.getElementById(`prev`)
const circles = document.querySelectorAll(`.circle`)

let contador = 1

next.addEventListener(`click`, ()=>{
     contador++
     if(contador>circles.length){
           contador = circles.length
     } 

     update()
})

prev.addEventListener(`click`, ()=>{
     contador--
     if(contador < 1){
           contador = 1
     } 

     update()
})

function update() {
      circles.forEach((circle, idx) =>{
         if (idx < contador){
               circle.classList.add(`active`)
         }else {
               circle.classList.remove(`active`)
         }   
      })

      const actives = document.querySelectorAll(`.active`)

      progress.style.width = (actives.length - 1) / (circles.length - 1 ) * 100 + (`%`) 

      if (contador === 1){
            prev.disabled = true
      }else if (contador === circles.length){
            next.disabled = true
      }else{
            prev.disabled = false
            next.disabled = false
      }
}

