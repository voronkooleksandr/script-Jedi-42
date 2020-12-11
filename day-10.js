// https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript

function alienLanguage(str) {
  const myString = str.split(" ");
  const result = [];
  for (i = 0; i < myString.length; i++) {
    const myStringMain = myString[i]
      .slice(0, myString[i].length - 1)
      .toUpperCase();
    const endLetter = myString[i].slice(-1).toLowerCase();
    const myStringNew = myStringMain + endLetter;
    result.push(myStringNew);
  }
  return result.join(" ");
}

// https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript

function topSecret(str){
  let chars = str.split("");
  for(var i = 0; i < chars.length; i++){
    if(chars[i].charCodeAt() >= 100 && chars[i].charCodeAt()  <= 123){
      chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
    }else if(chars[i].charCodeAt() >= 97 && chars[i].charCodeAt()  <= 99){
      chars[i] = String.fromCharCode(chars[i].charCodeAt() + 23);
    }else if(chars[i].charCodeAt() >= 68 && chars[i].charCodeAt()  <= 90){
      chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
    }else if(chars[i].charCodeAt() >= 65 && chars[i].charCodeAt()  <= 67){
      chars[i] = String.fromCharCode(chars[i].charCodeAt() + 23);
    }
  }
  return chars.join("") 
}

//question1: The top secret file number is...
answer1 = "4590";
//question2: Super agent's name is...
answer2 = "kzaiwy";
//question3: He stole the treasure is...
answer3 = "Marie's husband";

// https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
// працює) але сам вигляд кода мені не дуже через prettier

function fiveLine(s) {
  const d = s.trim();
  const result = `${d}\n${d.repeat(2)}\n${d.repeat(3)}\n${d.repeat(
    4
  )}\n${d.repeat(5)}`;
  return result;
}
