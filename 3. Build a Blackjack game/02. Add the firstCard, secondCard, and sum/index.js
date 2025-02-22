// Define the deck with arrays for suits and ranks
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

// Choose a random index from each array

function drawCard() {
    // Random index for the suits (0 to 3)
    const suitIndex = Math.floor(Math.random() * suits.length)
    // Random index for the ranks (0 to 12)
    const rankIndex = Math.floor(Math.random() * ranks.length)
    // Get the suit and the rank
    const suit = suits[suitIndex] 
    const rank = ranks[rankIndex] 
    // Return the card as an object
    return { rank: rank, suit: suit }   
}

// Function to get the card value
function getCardValue(card) {
    if (card.rank === "Ace") {
        return 11;
    } else if (["Jack", "Queen", "King"].includes(card.rank)) {
        return 10;
    } else {
        return parseInt(card.rank)
    }
}

// Playerhand
const playerHand = [drawCard(), drawCard()]
console.log("Your hand: ", playerHand)
let total = getCardValue(playerHand[0]) + getCardValue(playerHand[1])
console.log("Total: ", total)
