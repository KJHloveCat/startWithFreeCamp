function greeting() {


    document.getElementById("target").innerText = document.getElementById("input").value

    // document.getElementById("target").innerText = "World"


}

function send() {

    let tokenNum = String(Math.floor( Math.random() * 1000000 )).padStart(6, "0")

    document.getElementById("token").innerText = tokenNum
    
}