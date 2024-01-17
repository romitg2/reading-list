function genrateIndexFromString(str: string, len: number): number {
  // Combine the string and convert it to a unique number
  let combinedValue = 0;
  for (let i = 0; i < str.length; i++) {
    combinedValue += str.charCodeAt(i);
  }

  // Use the combined value to generate a random number within the specified range
  const randomIndex: number = combinedValue % len;
  return randomIndex;
}

export default genrateIndexFromString;
