let classmates
// undefined
classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[2]
// '훈이'
classmates.includes["훈이"]
// undefined
classmates.includes["훈이"]
// undefined
classmates.includes("훈이")
// true
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates
// (4) ['철수', '영희', '훈이', '맹구']
classmates.pop()
// '맹구'
classmates


const email = "codecamp@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
let userMail
// undefined
userMail = email.split("@")[0]
// undefined
let company = email.split("@")[1]
// undefined
company
// 'gmail.com'
userMail
// 'codecamp'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("")
// 'code****'
let result = maskingMail + "@" + company
// undefined
result
// 'c,o,d,e,*,*,*,*@gmail.com'
result = maskingMail.join("") + "@" + company
// undefined
result
// 'code****@gmail.com