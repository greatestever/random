function alphabetical(word1, word2, ratio)
{
  ratio = ratio || 0.5;
  var first, second, letter, midpoint = "";

  var max = word1.length;

  if (max < word2.length)
  {
    max = word2.length;
  }

  for(var i = 0; i < max; i++)
  {
    first = word1.charCodeAt(i);
    second = word2.charCodeAt(i);

    letter = String.fromCharCode(Math.round((second - first) * ratio) + first);

    if ((i + 1) == max)
    {
      letter = String.fromCharCode(Math.floor((second - first) * ratio) + first);
      midpoint += letter;
    }
    else if (first != second)
    {
      midpoint += letter;
      break;
    } 
    else
    {
      midpoint += letter;
    }
  }

  if (word1 != word2 && word1.localeCompare(midpoint) === 0)
  {
    first = "a".charCodeAt(0);
    second = "z".charCodeAt(0);
    letter = String.fromCharCode(Math.floor((second - first) * ratio) + first);
    midpoint += letter;
  }

  return midpoint;
}

// Tests
window.alert(alphabetical('a', 'a'));        // return 'a'
window.alert(alphabetical('a', 'e', 0.5));   // return 'c'
window.alert(alphabetical('a', 'e', 0.8));   // return 'd'
window.alert(alphabetical('aaa', 'ccc'));    // return 'b'
window.alert(alphabetical('aa', 'ac'));      // return 'ab'
window.alert(alphabetical('aaa', 'aac'));    // return 'aab'
window.alert(alphabetical('aa', 'ab'));      // return 'aam'
window.alert(alphabetical('aabb', 'aacc'));  // return 'aac'
