import favicon from './images/favicon-16x16.png';
import { name } from './characters/gandorf.json';

console.log(name);

const img = new Image(16, 16);
img.src = favicon;

document.querySelector('#content')?.appendChild(img);

import('./counter.js').then(({ initializeCounter }) => {
  initializeCounter();
});

const modules = import.meta.glob('./logos/**/*.svg', { eager: true });

for (const [, img] of Object.entries(modules)) {
  const lazyImg = new Image(100);
  lazyImg.src = img.default;
  document.querySelector('#content')?.appendChild(lazyImg);
}
