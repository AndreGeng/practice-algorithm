// 这种方式要比直接split,reverse,join来的更高效
function isPalindrome(s: string) {
  let i=0;
  let j=s.length-1;
  while(i<j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++;
    j--;
  }
  return true
}
// console.log(isPalindrome("a"))
// console.log(isPalindrome("ab"))
// console.log(isPalindrome("aba"))
//
// 暴力求解，时间复杂度O(n3)
function longestPalindrome0(s: string) {
  let result = ""
  for (let i=0;i<s.length;i++) {
    for (let j=i;j<s.length;j++) {
      const str = s.slice(i,j+1)
      if (isPalindrome(str)) {
        if (str.length > result.length) {
          result = str
        }
      }
    }
  }
  return result
};
// 滑动窗口, 时间复杂度O(n3)
function longestPalindrome1(s: string) {
  for (let i=s.length;i>=0;i--) {
    for (let j=0;j+i<=s.length;j++) {
      const str = s.slice(j, i + j)
      if (isPalindrome(str)) {
        return str
      }
    }
  }
  return ""
};

/**
 * @see https://leetcode.com/problems/longest-palindromic-substring/solution/  
 * Approach 4: Expand around center
 * 时间复杂度O(n2)
 */
export function longestPalindrome(s: string) {
  function longestPalindromeByCenter(s: string, left: number, right: number) {
    while(left >= 0 && right<s.length) {
      if (s[left] !== s[right]) {
        break;
      }
      left--;
      right++
    }
    return s.slice(left + 1, right)
  }
  let result = ""
  for (let i=0;i<s.length;i++) {
    const oddPalindrome = longestPalindromeByCenter(s, i, i)
    const evenPalindrome = longestPalindromeByCenter(s, i, i+1)
    if (oddPalindrome.length > result.length) {
      result = oddPalindrome
    }
    if (evenPalindrome.length > result.length) {
      result = evenPalindrome
    }
  }
  return result
}

// console.time("perf")
// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
// console.log(longestPalindrome("a"))
// console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"))
// console.log(longestPalindrome("0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"))
// console.timeEnd("perf")
