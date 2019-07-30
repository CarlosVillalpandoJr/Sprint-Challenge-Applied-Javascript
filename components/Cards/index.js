// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardsContainer = document.querySelector(".cards-container"),
  getData = axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
      const allArticles = Object.entries(response.data.articles);
      allArticles.map(topic => {
        topic[1].map(item => {
          cardsContainer.appendChild(Card(item));
        });
      });
    })
    .catch(err => {
        console.log(`Error: ${err}`);
      });


const Card = item => {
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardSpan = document.createElement("span");

  // Adding Class Names To Elements
  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container")

  // Adding Text Content
  cardHeadline.textContent = item.headline;
  cardImg.src = item.authorPhoto;
  cardSpan.textContent = item.authorName;

  // Appending elements to DOM
  cardAuthor.appendChild(cardSpan);
  card.appendChild(cardAuthor);
  card.appendChild(cardHeadline);
  cardImgContainer.appendChild(cardImg);
  cardAuthor.appendChild(cardImgContainer);

  return card;
}      




