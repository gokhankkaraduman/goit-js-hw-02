function checkForSpam(message){
    const lowerMessage = message.toLowerCase();//mesajı küçük harfe çeviriyoruz 
    const forbidden1 = "spam"; // yasaklı kelimeleri tanımlıyorum
    const forbidden2 = "sale";
    return lowerMessage.includes(forbidden1) || lowerMessage.includes(forbidden2); // Yasaklı kelimeleri includes methodu ile arayabiliriz
}
// Test Aşaması
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
