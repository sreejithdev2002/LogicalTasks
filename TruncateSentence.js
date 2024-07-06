function truncateSentence(string){
    let words = string.split(" ")
    let result = words.slice(0, 3).join(" ")
     console.log(result);
}

truncateSentence("Hello Rahul, how are you");