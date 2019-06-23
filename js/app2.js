const cardTemplate = (emoji) =>  `
<li class="memory-card"><span class="card-emoji">${emoji}</span></li>
`;

const emojis = [ "😂", "😄", "😊", "😉", "😋", "😍", "😘", "😝", "😂", "😄", "😊", "😉", "😋", "😍", "😘", "😝",];

const emojiHTML = emojis.map((emoji) => cardTemplate(emoji)).join("");

const deck = document.querySelector(".deck");

deck.innerHTML = emojiHTML;
