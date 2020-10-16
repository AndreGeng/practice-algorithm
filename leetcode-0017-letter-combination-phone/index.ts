function letterCombinations(digits: string): string[] {
  const map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  } as { [key: string]: string[] }
  function pool (digits: string): string[] {
    if (!digits) {
      return []
    }
    const num = digits[0]
    const rest = digits.slice(1)
    const restComb = pool(rest)
    return map[num].reduce((acc: string[], l: string) => {
      if (restComb.length <= 0) {
        acc.push(l)
        return acc
      }
      return acc.concat(restComb.map((str: string) => (l + str)))
    }, [])
  }
  return pool(digits)
};

console.log(letterCombinations("23"))
console.log(letterCombinations(""))
console.log(letterCombinations("2"))
