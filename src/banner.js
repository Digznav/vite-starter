import photo from './images/steve-after-a-workshop.jpg?height=400?format=webp';
import styles from './banner.module.css';

console.log(photo);

export const addBanner = (text) => {
  const banner = document.querySelector('#content');
  banner.textContent = text;

  const image = new Image(300, 400);
  image.src = photo;
  banner.appendChild(image);

  banner.classList.add(styles.banner);
};
