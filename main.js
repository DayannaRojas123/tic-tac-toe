let arr = [0, 0, 0, 0, 0, 0, 0]

let arr1 = []


let inicio
let mitad
let fin

let vertical1 = new Array(3)
let vertical2 = new Array(3)
let vertical3 = new Array(3)


let diagonalizquierda = new Array(3)
let diagonalderecha = new Array(3)


function usuario(index) {

   let div = document.getElementById('ficha' + index)

   if (div.textContent == '') {


      div.textContent = 'X'

      arr[index] = 1


      random(index)

   }


}


function random(index) {


   let indexbot = Math.round((Math.random() * (8 - 0) + 0))

   bot(index, indexbot)
   console.log(indexbot)


}


function bot(index, indexbot) {


   let comprobar = document.getElementsByClassName('cuadro')


   for (let h = 0; h < comprobar.length; h++) {

      if (comprobar[h].textContent == 'X') {

         arr1[h] = 1
      }


      if (comprobar[h].textContent == 'O') {
         arr1[h] = 2
      }


   }


   inicio = arr1.slice(0, 3)
   mitad = arr1.slice(3, 6)
   fin = arr1.slice(6, 9)

   vertical1[0] = inicio[0]
   vertical1[1] = mitad[0]
   vertical1[2] = fin[0]

   vertical2[0] = inicio[1]
   vertical2[1] = mitad[1]
   vertical2[2] = fin[1]

   vertical3[0] = inicio[2]
   vertical3[1] = mitad[2]
   vertical3[2] = fin[2]

   diagonalizquierda[0] = inicio[0]
   diagonalizquierda[1] = mitad[1]
   diagonalizquierda[2] = fin[2]

   diagonalderecha[0] = inicio[2]
   diagonalderecha[1] = mitad[1]
   diagonalderecha[2] = fin[0]


   ganardiagonalderecha = 0
   ganardiagonalizquierda = 0


   perderdiagonalderecha = 0
   perderdiagonalizquierda = 0

   ganarvertical1 = 0
   ganarvertical2 = 0
   ganarvertical3 = 0

   perdervertical1 = 0
   perdervertical2 = 0
   perdervertical3 = 0


   ganariniciohorizontal = 0
   ganarmitadhorizontal = 0
   ganarfinhorizontal = 0

   perderiniciohorizontal = 0
   perdermitadhorizontal = 0
   perderfinhorizontal = 0

   let empates=0

   

   for (let n = 0; n < vertical1.length; n++) {

      if (vertical1[n] == 1) {
         ganarvertical1++
         empates++

      } else if (vertical1[n] == 2) {

         perdervertical1++
         empates++
      }


   }


   if (ganarvertical1 >= 3) {

      setTimeout(win,600)

      setTimeout(reset,2000)
      

   }

   else if (perdervertical1 >= 3) {
      
      setTimeout(lose,600)

      setTimeout(reset,2000)

   }

   for (let z = 0; z < vertical2.length; z++) {

      if (vertical2[z] == 1) {
         ganarvertical2++
         empates++

      } else if (vertical2[z] == 2) {

         perdervertical2++
         empates++
      }


   }


   if (ganarvertical2 >= 3) {
     
      setTimeout(win,600)

      setTimeout(reset,1000)

   }

   else if (perdervertical2 >= 3) {
      
      setTimeout(lose,600)

      setTimeout(reset,1000)

   }


   for (let b = 0; b < vertical3.length; b++) {

      if (vertical3[b] == 1) {
         ganarvertical3++
         empates++

      } else if (vertical3[b] == 2) {
         perdervertical3++
         empates++
      }

   }


   if (ganarvertical3 >= 3) {
     
      setTimeout(win,600)

      setTimeout(reset,1000)

   }

   else if (perdervertical3 >= 3) {
     
      setTimeout(lose,600)

      setTimeout(reset,1000)
   }


   for (let e = 0; e < inicio.length; e++) {

      if (inicio[e] == 1) {
         ganariniciohorizontal++
         empate++

      } else if (inicio[e] == 2) {

         perderiniciohorizontal++
         empates++
      }
   }


   if (ganariniciohorizontal >= 3) {
     
      setTimeout(win,600)

      setTimeout(reset,1000)

   }

   else if (perderiniciohorizontal >= 3) {

     
      setTimeout(lose,600)

      setTimeout(reset,1000)

   }


   for (let b = 0; b < mitad.length; b++) {

      if (mitad[b] == 1) {
         ganarmitadhorizontal++
         empates++

      } else if (mitad[b] == 2) {

         perdermitadhorizontal++
         empates++
      }
   }


   if (ganarmitadhorizontal >= 3) {
     

      setTimeout(win,600)

      setTimeout(reset,1000)
   }


   else if (perdermitadhorizontal >= 3) {

     
      setTimeout(lose,600)

      setTimeout(reset,1000)


   }

   for (let c = 0; c < fin.length; c++) {

      if (fin[c] == 1) {
         ganarfinhorizontal++
         empates++

      } else if (fin[c] == 2) {

         empates++
         perderfinhorizontal++
      }
   }

   if (ganarfinhorizontal >= 3) {
     

      setTimeout(win,600)

      setTimeout(reset,1000)
   }

   else if (perderfinhorizontal >= 3) {

     
      setTimeout(lose,600)

      setTimeout(reset,1000)


   }



   for (let g = 0; g < diagonalderecha.length; g++) {

      if (diagonalderecha[g] == 1) {
         ganardiagonalderecha++
         empates++

      } else if (diagonalderecha[g] == 2) {

         empates++
         perderdiagonalderecha++
      }


   }


    


   if (ganardiagonalderecha >= 3) {

      setTimeout(win,600)

      setTimeout(reset,2000)

   }

   else if (perderdiagonalderecha >= 3) {
     
      setTimeout(lose,600)

      setTimeout(reset,2000)


   }

   for (let v = 0; v < diagonalizquierda.length; v++) {

      if (diagonalizquierda[v] == 1) {
         ganardiagonalizquierda++
         empates++

      } else if (diagonalizquierda[v] == 2) {

         empates++
         perderdiagonalizquierda++
      }


   }

   if (ganardiagonalizquierda >= 3 ) {
    
      setTimeout(win,600)

      setTimeout(reset,1000)



   }

   else if (perderdiagonalizquierda >= 3) {

      setTimeout(lose,600)

      setTimeout(reset,1000)


   }



   if (arr[indexbot] == '') {

      for (let i = 0; i < arr.length; i++) {

         if (arr[indexbot] == 0 && arr[indexbot] == '') {

            let divbot = document.getElementById('ficha' + indexbot)

            divbot.textContent = 'O'

            arr[indexbot] = 2


         }

      }

   } else if (arr[indexbot] != '') {


      if (arr1.length !== 9 || arr1.some(item => item == undefined || item !== '')) random(index)

   }


   if(empates<=0){

      setTimeout(empate,600)

      setTimeout(reset,1000)
   }


}


function reset() {

   location.reload()

}


function win() {

   let ganas=document.getElementById('ganas')
   ganas.style.visibility='visible'
   


}

function empate() {
   
   let empatas=document.getElementById('empatas')
   empatas.style.visibility='visible'
   console.log('empate')



}

function lose() {
   let pierdes=document.getElementById('pierdes')
   pierdes.style.visibility='visible'
   console.log('perdiste')
   

}