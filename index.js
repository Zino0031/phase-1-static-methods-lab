class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }
  static titleize(string) {
    const Cap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');
    const mapW = words.map((word, index) => {
        if (index === 0 || !Cap.includes(word.toLowerCase())) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word.toLowerCase();
        }
    });
    return mapW.join(' ');
  }
}