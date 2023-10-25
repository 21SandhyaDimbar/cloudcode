let str = "This is a sunny day";

function WordReverse(str) {
    // Split the str into words
    let ch = str.split(' ');
  
    let revs = ch.map(function(word) {
      let str1 = '';

      for (let i = word.length - 1; i >= 0; i--) {
        str1 += word[i];
      }
      return str1;
    });
  
    let revsStr =revs.join(' ');
  
    return revsStr;
  }
  let revSentence = WordReverse(str);
  console.log(revSentence); 
