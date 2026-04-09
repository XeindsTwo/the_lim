const spanValue = 40;
const decor = document.querySelector('.partners__decor');
for (let i = 0; i < 50; i++) {
  const div = document.createElement('div');
  div.classList.add('partners__item');
  if (i < spanValue) {
    div.classList.add('partners__item--green');
  }
  decor.appendChild(div);
}