import Spawn from './node_modules/@nurvus/spawn/index.js';


// document.body.style.background = '#ffffff';
    // from : https://www.eggradients.com/category/purple-gradient
    document.body.style.backgroundColor = '#a4508b';
    document.body.style.backgroundImage = 'linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)';

const particlesEl = Spawn({
  parentEl: document.body,
  className: 'particles',
  style: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
});

Spawn({
  parentEl: document.body,
  className: 'app',
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  children: [
    Spawn({
      className: 'content',
      children: [
        Spawn({
          tag: 'h1',
          children: 'John Yagiz'
        }),
        Spawn({
          tag: 'p',
          children: 'Front-End Engineer, Design Systems'
        }),
        Spawn({
          tag: 'a',
          href: 'https://www.linkedin.com/in/john-yagiz-29413224/',
          className: 'btn',
          // IDEA: Provide links to Github, CodePen, Linkedin
          // Swap to DOWNLOAD when file is ready to share
          // children: 'Download Resume',
          children: 'Linkedin',
          events: {
            mouseenter: (e, el) => {
              el.style.backgroundColor = '#ffffff';
              el.style.borderColor = '#ffffff';
              el.style.color = '#5c61bd';
              el.style.borderRadius = '6px';
            },
            mousedown: (e, el) => {
              el.style.backgroundColor = '#ffffff';
              el.style.borderColor = '#ffffff';
              el.style.color = '#4347a3';
              el.style.borderRadius = '6px';
            },
            mouseup: (e, el) => {
              el.style.backgroundColor = '#ffffff';
              el.style.borderColor = '#ffffff';
              el.style.color = '#5c61bd';
              el.style.borderRadius = '6px';
            },
            mouseleave: (e, el) => {
              el.style.backgroundColor = 'transparent';
              el.style.borderColor = '#ffffff';
              el.style.color = '#ffffff';
              el.style.borderRadius = '0';
            }
          }
        })
      ],
      style: {
        textAlign: 'center'
      }
    })

  ]
});

// const el = Spawn({
//   parentEl: document.body,
//   className: 'particles',
//   style: {
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden'
//   },
// });




// Init the particles
const x = particleground(particlesEl, {
  dotColor: '#5cbdaa',
  // lineColor: '#5cbdaa'
  // dotColor: '#4370a3',
  lineColor: '#43a390'


});

