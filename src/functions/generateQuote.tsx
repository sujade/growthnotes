const quotes = [
    "You look great today!",
    "Take the first step!",
    "Take a deep breath.",
    "One day at a time.",
    "It's not overreacting to ask for what you need.",
    "Slowing down is a part of being productive.",
    "Treat yourself with some good time today.",
    "You have enough to succeed.",
    "Take care of yourself to take care of others.",
    "Even now, you're held."
]

export function generateQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuoteIndex];
}