var qoutes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus",
    "Every moment is a fresh beginning",
    "Aspire to inspire before we expire.",
    "Love For All, Hatred For None",
    "Die with memories, not dreams",
    "Try to be a rainbow in someone’s cloud. – Maya Angel",
    "Strive for greatness. – Lebron Jame"
]
function qouteGen (str) {
    let random = Math.floor(Math.random() * str.length);
    return str[random];
} 

console.log(qouteGen(qoutes));