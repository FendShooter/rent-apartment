let getlink = document.querySelectorAll('.smooth--bg');
let heartState = []

window.addEventListener("DOMContentLoaded", () => {
if (localStorage.getItem('heart')) {
  
  const loader = JSON.parse(localStorage.getItem('heart'))
  
  // console.log(loader);
  // heartState.push(loader)
}
  
})

let pic = document.querySelector('.pic')


pic.addEventListener('click', () => {
  console.log('f');
  
  let showHideProfile = document.querySelector('.profile__setting')
  showHideProfile.classList.toggle('show')
})

// let heart = document.querySelector('svg.heart');
// heart.addEventListener('click', heartBeat);

// function heartBeat(){
//   let svgPath = document.querySelector('svg > path.first');
//   if (!svgPath.hasAttribute('fill')) {
//     svgPath.setAttribute('fill', '#F00');
//     const config = {fill:'#fOO'}
//     heartState.push(config)

//   localStorage.setItem('heart', JSON.stringify(heartState));

//   } else {
//     svgPath.removeAttribute('fill');
//     heartBeat = []
//  localStorage.removeItem('heart')
//   }
// };


