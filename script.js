document.getElementById("draw-button").addEventListener("click", () => {
    const drawType = document.getElementById("draw-type").value;
    const tarotContainer = document.getElementById("tarot-container");
    const meaningsContainer = document.getElementById("cards-meanings");
  
    // Limpar os resultados anteriores
    tarotContainer.innerHTML = "";
    meaningsContainer.innerHTML = "";
  
    let numCards = 1;
    switch (drawType) {
      case "three-linear":
      case "three-triangle":
      case "three-cross":
        numCards = 3;
        break;
      case "diamond":
      case "peladan":
        numCards = 5;
        break;
      case "aphrodite":
        numCards = 7;
        break;
    }
  
    // Selecionar cartas aleatórias
    const selectedCards = cards.sort(() => Math.random() - 0.5).slice(0, numCards);
  
    selectedCards.forEach((card, index) => {
      // Exibir carta
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.innerHTML = `<div class="card-title">${card.title}</div>`;
      tarotContainer.appendChild(cardElement);
  
      // Exibir significados completos
      const meaningElement = document.createElement("div");
      meaningElement.className = "meaning";
      meaningElement.innerHTML = `
        <h3>${card.title}</h3>
        <p><strong>Geral:</strong> ${card.meaning.general}</p>
        <p><strong>Amor:</strong> ${card.meaning.love}</p>
        <p><strong>Profissão:</strong> ${card.meaning.profession}</p>
        <p><strong>Finanças:</strong> ${card.meaning.finances}</p>
        <p><strong>Saúde:</strong> ${card.meaning.health}</p>
        <p><strong>Espiritualidade:</strong> ${card.meaning.spirituality}</p>
        <p><strong>Temporalidade:</strong> ${card.meaning.temporality}</p>
      `;
      meaningsContainer.appendChild(meaningElement);
    });
  });  