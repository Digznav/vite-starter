// import { initializeCounter } from './counter.js';

console.log('Hello, world!');

import('./counter.js').then(({ initializeCounter }) => {
  initializeCounter();
});
