class Solution {
  addOne(node)
  {
    let num = ''
    while(node) {
      num += node.data
      node = node.next
    }
    num = BigInt(num) + 1n
    // console.log(num % 10n)
    // num = 218729081793941999 + 1
    let head = null
    while (num > 0) {   
      let nextNode = {data: parseInt(num % 10n), next: head}
      head = nextNode 
      num = num/10n
    }
    return head
  }
}

const c = {data: 9, next: null}
const b = {data: 9, next: c}
const a = {data: 8, next: b}

s = new Solution()
let res = s.addOne(a)

while (res) {
  console.log(res.data)
  res = res.next
}
