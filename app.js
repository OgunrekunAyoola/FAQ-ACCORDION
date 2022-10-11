// const accordion = document.getElementById('information');

// accordion.addEventListener('click', e => {
//     const targetClass = e.target.classList;
//     //cambio clases css
//     if(targetClass.contains('accordion-question')) {
//       e.target.nextElementSibling.classList.toggle('accordion-answer--active');
//       e.target.classList.toggle('accordion-question--active');
//     }
// });

let accTitle = document.getElementsByClassName("accordion-question");
let accContent = document.getElementsByClassName("accordion-answer");
let singleMode = true;

for (let j=0; j<accContent.length; j++){
  let realHeight = accContent[j].offsetHeight;
  accContent[j].setAttribute("data-height", realHeight + 'px');
  accContent[j].style.height = 0;
}

for ( let i=0; i<accTitle.length; i++ ){
  accTitle[i].onclick = function(){
  let openedAcc = this.getAttribute('href').replace('#', '');

    if(this.classList.contains('active') ){
            this.classList.remove('active');
            document.getElementById(openedAcc).style.height = 0;

            return false;
        }

        if(singleMode){
            for(let k=0; k<accTitle.length; k++){
                accTitle[k].classList.remove("active");
          }

      for(let j=0; j<accContent.length; j++){
        accContent[j].style.height =0;
      }
    }
    this.classList.add("active");
        
    document.getElementById(openedAcc).style.height = accContent[i].getAttribute("data-height");
    return false;
  }
}

