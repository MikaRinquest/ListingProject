// Filter

// Properties Array
let cards = JSON.parse(localStorage.getItem("cards"))
  ? JSON.parse(localStorage.getItem("cards"))
  : [
      {
        id: 1,
        CardName: "Blue-Eyes Chaos MAX Dragon",
        ATK: "4000",
        DEF: "0",
        Desc: "You can Ritual Summon this card with Chaos Form. Must be Ritual Summoned. Your opponent cannot target this card with card effects, also it cannot be destroyed by your opponent's card effects. If this card attacks a Defense Position monster, inflict double piercing battle damage.",
        Type: "Effect",
        Deck: "Main",
        Image: "https://ygoprodeck.com/pics/55410871.jpg",
        Rarity: "UR",
      },
      {
        id: 2,
        CardName: "Obelisk The Tormentor",
        ATK: "4000",
        DEF: "4000",
        Desc: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Neither player can target this card with card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated.",
        Type: "Effect",
        Deck: "Main",
        Image: "https://ygoprodeck.com/pics/10000000.jpg",
        Rarity: "UR",
      },
      {
        id: 3,
        CardName: "Lyrilusc - Independent Nightingale",
        ATK: "1000",
        DEF: "0",
        Desc: "Lyrilusc - Assembled Nightingale + 1 Lyrilusc monster. If this card is Fusion Summoned using an Xyz Monster on the field as Fusion Material whose original name includes Lyrilusc: You can increase this card's Level by the number of Xyz Materials that monster(s) had. This card gains ATK equal to its Level x 500. Unaffected by other cards effects. Once per turn: You can inflict damage to your opponent equal to this card's Level x 500.",
        Type: "Effect",
        Deck: "Extra",
        Image: "https://ygoprodeck.com/pics/76815942.jpg",
        Rarity: "SR",
      },
      {
        id: 4,
        CardName: "Heroic Champion - Jarngreipr",
        ATK: "700",
        DEF: "1800",
        Desc: "2 Level 1 Warrior monster. The first time each Warrior monster you control would be destroyed by battle or card effect each turn, it is not destroyed. You can only use each of the following effects of Heroic Champion - Jarngreipr once per turn. You can detach 2 materials from this card, then target 1 Level/Rank 4 Warrior monster in your GY; Special Summon it, and if you do, this card gains ATK equal to that monster's original ATK. When an attack is declared involving an opponent's monster: You can gain LP equal to half its ATK.",
        Type: "Effect",
        Deck: "Extra",
        Image: "https://ygoprodeck.com/pics/23848752.jpg",
        Rarity: "N",
      },
      {
        id: 5,
        CardName: "Dark Magician",
        ATK: "2500",
        DEF: "2100",
        Desc: "The ultimate wizard in terms of attack and defense.",
        Type: "Normal",
        Deck: "Main",
        Image: "https://ygoprodeck.com/pics/46986414.jpg",
        Rarity: "UR",
      },
      {
        id: 6,
        CardName: "Elemental HERO Neos",
        ATK: "2500",
        DEF: "2000",
        Desc: "A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed.",
        Type: "Normal",
        Deck: "Main",
        Image: "https://ygoprodeck.com/pics/89943723.jpg",
        Rarity: "UR",
      },
      {
        id: 7,
        CardName: "Stardust Dragon",
        ATK: "2500",
        DEF: "2000",
        Desc: "1 Tuner + 1or more non-Tuner monsters.When a card or effect is activated that would destroy a card(s) on the field (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your GY.",
        Type: "Effect",
        Deck: "Extra",
        Image: "https://ygoprodeck.com/pics/44508094.jpg",
        Rarity: "UR",
      },
      {
        id: 8,
        CardName: "Number 39: Utopia",
        ATK: "2500",
        DEF: "2000",
        Desc: "2 Level 4 monsters.When a monster declares an attack: You can detach 1 material from this card; negate the attack.If this card is targeted for an attack, while it has no material: Destroy this card.",
        Type: "Effect",
        Deck: "Extra",
        Image: "https://ygoprodeck.com/pics/84013237.jpg",
        Rarity: "UR",
      },
      {
        id: 9,
        CardName: "Odd-Eyes Pendulum Dragon",
        ATK: "2500",
        DEF: "2000",
        Desc: "[ Pendulum Effect ] You can reduce the battle damage you take from an attack involving a Pendulum Monster you control to 0. During your End Phase: You can destroy this card, and if you do, add 1 Pendulum Monster with 1500 or less ATK from your Deck to your hand. You can only use each Pendulum Effect of Odd-Eyes Pendulum Dragon once per turn.[Monster Effect ] If this card battles an opponent's monster, any battle damage this card inflicts to your opponent is doubled.",
        Type: "Effect",
        Deck: "Main",
        Image: "https://ygoprodeck.com/pics/16178681.jpg",
        Rarity: "UR",
      },
      {
        id: 10,
        CardName: "Firewall Dragon",
        ATK: "2500",
        DEF: "0",
        Desc: "2+ monsters. Once while face-up on the field (Quick Effect): You can target monsters on the field and/or GY up to the number of monsters co-linked to this card; return them to the hand. If a monster this card points to is destroyed by battle or sent to the GY: You can Special Summon 1 Cyberse monster from your hand. You can only use each effect of Firewall Dragon once per turn.",
        Type: "Effect",
        Deck: "Extra",
        Image: "https://ygoprodeck.com/pics/5043010.jpg",
        Rarity: "UR",
      },
      {
        id: 11,
        CardName: "Labyrinth Wall",
        ATK: "0",
        DEF: "3000",
        Desc: "These walls form a labyrinth with no exit for enemies..",
        Type: "Normal",
        Deck: "Main",
        Image: "https://ygoprodeck.com/pics/67284908.jpg",
        Rarity: "N",
      },
      {
        id: 12,
        CardName: "Manju of the Ten Thousand Hands  ",
        ATK: "1400",
        DEF: "1000",
        Desc: "When this card is Normal or Flip Summoned: You can add 1 Ritual Monster or 1 Ritual Spell from your Deck to your hand.",
        Type: "Effect",
        Deck: "Main",
        Image: "https://ygoprodeck.com/pics/95492061.jpg",
        Rarity: "R",
      },
    ];

// Looping Array
function showItems(cards) {
  document.querySelector("#container").innerHTML = "";
  cards.forEach((card) => {
    console.log(card);
    document.querySelector("#container").innerHTML += `   
    <div class="list-item">
    <img src="${card.Image}" width="150" height="250">
    <div class="list-info">
    <span class="sword">
        <p>ATK:${card.ATK}</p>
        <p>DEF:${card.DEF}</p>
        <p>Rarity: ${card.Rarity}</p>
    </span>
        </div>
      </div>
        `;
  });
}

// Show array in HTML
showItems(cards);

// Add to local storage function
function addToStorage(cards) {
  localStorage.setItem("cards  ", JSON.stringify(cards));
}

// Filter functions

// Display All filter
document.querySelector("#filter-all").addEventListener("click", displayAll);

function displayAll() {
  showItems(cards); //Displays the array
}

// Display Effects filter
document.querySelector("#filter-eff").addEventListener("click", displayEff); //DON'T ADD BRACKETS INSIDE OF EVENT LISTENER

function displayEff() {
  //Tells the computer where to look for the keyword
  const foundEffect = cards.filter((card) => {
    return card.Type === "Effect"; //Returns all objects with the word "Effect" in the Type key
  });
  console.log(foundEffect);
  showItems(foundEffect); //Displays the array
}

// Display Normal filter
document.querySelector("#filter-norm").addEventListener("click", displayNorm);

function displayNorm() {
  const foundNormal = cards.filter((card) => {
    return card.Type === "Normal";
  });
  showItems(foundNormal);
}

// Display Main Deck Cards  
document.querySelector("#filter-main").addEventListener("click", displayMain);

function displayMain(Deck) {
  const foundMain = cards.filter((card) => {
    return card.Deck === "Main";
  });
  showItems(foundMain);
}

// Display Extra Deck Cards
document.querySelector("#filter-extra").addEventListener("click", displayExtra);

function displayExtra(Deck) {
  const foundExtra = cards.filter((card) => {
    return card.Deck === "Extra";
  });
  showItems(foundExtra);
}

