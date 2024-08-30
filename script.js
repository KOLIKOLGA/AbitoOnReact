const btnSearch = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Первый товар",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./images/card-img.png",
  },
  {
    id: 1,
    title: "Второй товар",
    price: "171 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./images/card-img.png",
  },
  {
    id: 2,
    title: "Третий товар",
    price: "172 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./images/card-img.png",
  },
  {
    id: 3,
    title: "Четвертый товар",
    price: "173 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./images/card-img.png",
  },
  {
    id: 4,
    title: "Пятый товар",
    price: "174 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./images/card-img.png",
  },
  {
    id: 5,
    title: "Шестой товар",
    price: "175 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./images/card-img.png",
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = "";
  cardList.forEach((item, index) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <a href="/product.html" class="content-main__list-item">
            <div class="content-main__list-item_image">
                <img src="${item.img}" alt="${item.title}" />
            </div>
            <h5 class="content-main__list-item-title">${item.title}</h5>
             <strong>${item.price}</strong>
            <div class="content-main__list-item_descr-block">
              <span>${item.address}</span>
              <span>${item.date}</span>
            </div>
        </a>
      `
    );
  });
};
render(cardArray);

const filterArray = (array, value) => {
  console.log(array);
  console.log(value);
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value);
  });
  //filter возвращает true или false
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.gap = "30px";

btnSearch.addEventListener("click", () => {
  render(filterArray(cardArray, searchInput.value));
});
