function generateColorFromString(inputString: string): string {
  // Simple hash function to convert a string to a numeric value
  function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  // Convert the hash to an RGB color
  function intToRGB(i: number) {
    const c = (i & 0x00ffffff).toString(16).toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
  }

  const hash = hashCode(inputString);
  const color = intToRGB(hash);

  return `#${color}`;
}

export default generateColorFromString;
