import Spawn from './node_modules/@nurvus/spawn/index.js';
// import particleground from './node_modules/particleground/jquery.particleground.min.js';
// const el = Spawn('You have spawned something!');
const el = Spawn({
  className: 'particles',
  style: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }
});

document.body.appendChild(el);
particleground(el);
