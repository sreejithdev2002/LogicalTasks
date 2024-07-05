function palindrome(name) {
    let result = "";
  
    let str = name.toLowerCase();
    const reversedString = str.split("").reverse().join("");
  
    if (str === reversedString) {
      result = "Palindrome";
    } 
    else {
      result = "Not Palindrome";
    }
    console.log(result)
  }
  
  palindrome("Sreejith");
  palindrome("Malayalam");