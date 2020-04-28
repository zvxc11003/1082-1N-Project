let links = document.querySelectorAll('#heading a');
let tkuLinkTexts = document.querySelector('#main ul');
let tkuLinks = document.querySelectorAll('#main a');

const heading = document.querySelector('#heading');
const main = document.querySelector('#main');
const section = document.querySelector('#section');
const iframeContainer = document.querySelector('.iframe-container');
const player = document.querySelectorAll('#player');
const tkuImg = document.querySelector('.tku-images');
const footer = document.querySelector('#footer');

// For tku links

const changeVideo = (index) => {
  console.log('cv', index);
  switch (index) {
    case 1:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 3:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
};

// For Link1

const changeColor = () => {
  heading.style.backgroundColor = '#9AADBF';
  main.style.backgroundColor = '#D3B99F';
  section.style.backgroundColor = '#6D98BA';
  footer.style.backgroundColor = '#210203';
};

// For Link2

const showImages = () => {
  // iframeContainer.classList.toggle('invisible');
  tkuImg.classList.toggle('invisible');
};

// For Link3

const addTkuLink = () => {
  tkuLinkTexts.innerHTML = `
  <li><a onclick="changeVideo(1)">淡江大戲 1</a></li>
  <li><a onclick="changeVideo(2)">淡江大戲 2</a></li>
  `;
};

// For Link4
const addAllLinks = () => {
  tkuLinkTexts.innerHTML = `
  <li><a onclick="changeVideo(1)">淡江大戲 1</a></li>
  <li><a onclick="changeVideo(2)">淡江大戲 2</a></li>
  <li><a onclick="changeVideo(3)">淡江大戲 3</a></li>
  <li><a onclick="changeVideo(4)">淡江大戲 4</a></li>
  <li><a onclick="changeVideo(5)">淡江大戲 5</a></li>
  `;
};

// Watch Link1
links[0].addEventListener('click', changeColor);

// Watch Link2
links[1].addEventListener('click', showImages);

// Watch Link3
links[2].addEventListener('click', addTkuLink);

// Watch Link4
links[3].addEventListener('click', addAllLinks);
