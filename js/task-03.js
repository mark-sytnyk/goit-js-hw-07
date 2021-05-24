const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery')

const image = images.forEach(image => {
  const item = document.createElement('li');
  const picture = document.createElement('img');
  picture.src = image.url;
  picture.alt = image.alt;
  picture.width = 450;
  picture.style.display = 'flex';
  picture.style.marginBottom = '20px';
  item.appendChild(picture)
  const itemToString = item.innerHTML

  galleryEl.insertAdjacentHTML('beforeend', itemToString)
  return item;
})






