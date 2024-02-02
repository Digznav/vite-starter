import favicon from './images/favicon-16x16.png';

const img = new Image(16, 16);
img.src = favicon;

document.querySelector('#content').appendChild(img);

import('./counter.js').then(({ initializeCounter }) => {
  initializeCounter();
});
