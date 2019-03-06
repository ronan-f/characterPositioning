function characterPosition(string){
  let output = {};
  trimmedString = string.replace(/\s/g, "");
  for (let i = 0; i < trimmedString.length; i ++){
    let character = trimmedString.charAt(i);
    if(output[character]){
      output[character].push(i);
    } else {
    output[character] = [];

    output[character].push(i);
    }
  } return output;
}

console.log(characterPosition('hello lighthouse labs'));