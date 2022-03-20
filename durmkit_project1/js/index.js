// window.addEventListener('keydown', function(e){
  // const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  // const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`);
//  / console.log(audio);
  // if(!audio) return;
  // audio.currentTime = 0;
  // audio.play();
  // key.classList.add('playing');
// });

// const removeTransistion = (e)=>{
//    if(e.propertyName !== "Transform") return;
//    let key = document.querySelectorAll(`.key[data-key ="${e.keyCode}"]`);
//    key.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key =>key.addEventListener('transitioned' , removeTransistion));


window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key =   document.querySelector(`.key[data-key ="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  console.log(audio)
})