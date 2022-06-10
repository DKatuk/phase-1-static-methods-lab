class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    const lower = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    const words = str.split(' ');
    const result = [];

   for(let i = 0; i < words.length; i++) {
    if (i == 0) {
      result.push(this.capitalize(words[i]));
    } else {
      if (lower.includes(words[i])) {
        result.push(words[i]);
      } else {
        result.push(this.capitalize(words[i]));
      }
    }
  } return result.join(" ");

   }
}

  