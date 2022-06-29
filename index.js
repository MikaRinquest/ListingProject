// Filter

// Properties Array
const cards = JSON.parse(localStorage.getItem("item"))
  ? JSON.parse(localStorage.getItem("item"))
  : [
      {
        id: 1,
        CardName: "Blue-Eyes Chaos MAX Dragon",
        ATK: "4000",
        DEF: "0",
        Desc: "You can Ritual Summon this card with Chaos Form. Must be Ritual Summoned. Your opponent cannot target this card with card effects, also it cannot be destroyed by your opponent's card effects. If this card attacks a Defense Position monster, inflict double piercing battle damage.",
        Type: "Monster",
        Image: "https://ygoprodeck.com/pics/55410871.jpg",
        Rarity: "UR",
      },
      {
        id: 2,
        CardName: "Obelisk The Tormentor",
        ATK: "4000",
        DEF: "4000",
        Desc: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Neither player can target this card with card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated.",
        Type: "Monster",
        Image: "https://ygoprodeck.com/pics/10000000.jpg",
        Rarity: "UR",
      },
      {
        id: 3,
        CardName: "Lyrilusc - Independent Nightingale",
        ATK: "1000",
        DEF: "0",
        Desc: "Lyrilusc - Assembled Nightingale + 1 Lyrilusc monster. If this card is Fusion Summoned using an Xyz Monster on the field as Fusion Material whose original name includes Lyrilusc: You can increase this card's Level by the number of Xyz Materials that monster(s) had. This card gains ATK equal to its Level x 500. Unaffected by other cards effects. Once per turn: You can inflict damage to your opponent equal to this card's Level x 500.",
        Type: "Monster",
        Image: "https://ygoprodeck.com/pics/76815942.jpg",
        Rarity: "SR",
      },
      {
        id: 4,
        CardName: "Heroic Champion - Jarngreipr",
        ATK: "700",
        DEF: "1800",
        Desc: "2 Level 1 Warrior monster. The first time each Warrior monster you control would be destroyed by battle or card effect each turn, it is not destroyed. You can only use each of the following effects of Heroic Champion - Jarngreipr once per turn. You can detach 2 materials from this card, then target 1 Level/Rank 4 Warrior monster in your GY; Special Summon it, and if you do, this card gains ATK equal to that monster's original ATK. When an attack is declared involving an opponent's monster: You can gain LP equal to half its ATK.",
        Type: "Monster",
        Image: "https://ygoprodeck.com/pics/23848752.jpg",
        Rarity: "C",
      },
      {
        id: 5,
        CardName: "Dark Magician",
        ATK: "2500",
        DEF: "2100",
        Desc: "The ultimate wizard in terms of attack and defense.",
        Type: "Monster",
        Image: "https://ygoprodeck.com/pics/46986414.jpg",
        Rarity: "UR",
      },
      {
        id: 6,
        CardName: "Elemental HERO Neos",
        ATK: "2500",
        DEF: "2000",
        Desc: "A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed.",
        Type: "Monster",
        Image: "https://ygoprodeck.com/pics/89943723.jpg",
        Rarity: "UR",
      },
      {
        id: 7,
        CardName: "Stardust Dragon",
        ATK: "2500",
        DEF: "2000",
        Desc: "1 Tuner + 1or more non-Tuner monsters.When a card or effect is activated that would destroy a card(s) on the field (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your GY.",
        Type: "Monster",
        Image: "https://ygoprodeck.com/pics/44508094.jpg",
        Rarity: "UR",
      },
      {
        id: 7,
        CardName: "Number 39: Utopia",
        ATK: "2500",
        DEF: "2000",
        Desc: "2 Level 4 monsters.When a monster declares an attack: You can detach 1 material from this card; negate the attack.If this card is targeted for an attack, while it has no material: Destroy this card.",
        Type: "Monster",
        Image: "https://ygoprodeck.com/pics/84013237.jpg",
        Rarity: "UR",
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
        <p>Rarity:${card.Rarity}</p>
    </span>
        </div>
      </div>
        `;
  });
}

// Show array in HTML
showItems(cards);

// Add to local storage function
// function addToStorage(cards) {
//   localStorage.setItem("items", JSON.stringify(cards));
// }
