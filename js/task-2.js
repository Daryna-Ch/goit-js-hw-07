const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const gallery = document.querySelector('.gallery');
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.gap = '16px';
gallery.style.justifyContent = 'center';
gallery.style.listStyle = 'none';
gallery.style.padding = '0';
gallery.style.margin = '0';

images.forEach(imageData => {
  const listItem = document.createElement("li");
  const image = document.createElement("img");

   image.src = imageData.url;
  image.alt = imageData.alt;

  listItem.appendChild(image);
  gallery.appendChild(listItem);
});

const listItems = gallery.querySelectorAll('li');
listItems.forEach(item => {
  item.style.maxWidth = '360px';

  const image = item.querySelector('img');
  image.style.width = '100%';
  image.style.height = 'auto';
  image.style.borderRadius = '8px';
});

