
let auth = false

const token__send = () => {

    isStarted = false

    if (isStarted === false) {
        isStarted = true
        let tokenNum = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("token__num").innerText = tokenNum
        document.getElementById("token__send__btn").disabled = true
        document.getElementById("token__send__btn").style.color = '#828282'
        document.getElementById("token__send__btn").style.cursor = 'default'
        document.getElementById("token__send__btn").style.backgroundColor = '#FFFFFF'
        document.getElementById("token__ok__btn").style.color = '#FFFFFF'
        document.getElementById("token__ok__btn").style.backgroundColor = '#0068FF'
        document.getElementById("token__ok__btn").disabled = false
        document.getElementById("token__ok__btn").style.cursor = 'pointer'
        let time = 6
        let token__send__btn

        token__send__btn = setInterval(() => {
            if (time >= 0 && auth == false) {

                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("token").innerText = min + ':' + sec
                time = time - 1
            } else if (auth == true){
                document.getElementById("token__send__btn").disabled = true
                document.getElementById("token__send__btn").style.color = '#828282'
                document.getElementById("token__send__btn").style.backgroundColor = '#FFFFFF'
                document.getElementById("token__send__btn").style.cursor = 'default'
                document.getElementById("token__ok__btn").disabled = true
                document.getElementById("token__ok__btn").style.color = '#828282'
                document.getElementById("token__ok__btn").style.cursor = 'default'
                document.getElementById("token__ok__btn").style.backgroundColor = '#FFFFFF'
                clearInterval(token__send__btn)
            }else {
                isStarted = false
                auth = false
                document.getElementById("token__send__btn").disabled = false
                document.getElementById("token__send__btn").style.color = '#FFFFFF'
                document.getElementById("token__send__btn").style.backgroundColor = '#0068FF'
                document.getElementById("token__send__btn").style.cursor = 'pointer'
                document.getElementById("token__ok__btn").disabled = true
                document.getElementById("token__ok__btn").style.color = '#828282'
                document.getElementById("token__ok__btn").style.cursor = 'default'
                document.getElementById("token__ok__btn").style.backgroundColor = '#FFFFFF'

                clearInterval(token__send__btn)
            }
        }, 1000)

    } else {

    }

}

const token__ok = () => {
    auth = true 
    alert("인증이 확인되었습니다.")
    document.getElementById("token__num").innerText = '000000'
    document.getElementById("token").innerText = '0:06'
    document.getElementById("token__ok__btn").innerText = '인증완료'
    
}


const changeFocus01 = () => {
    let phone01 = document.getElementById("textbox02").value

    if (phone01.length == 3) {
        document.getElementById("textbox03").focus()
    }
}

const changeFocus02 = () => {
    let phone01 = document.getElementById("textbox03").value

    if (phone01.length == 4) {
        document.getElementById("textbox04").focus()
    }
}



const enableTokenSend = () => {
    
    let phone1 = document.getElementById("textbox02").value 
    let phone2 = document.getElementById("textbox03").value 
    let phone3 = document.getElementById("textbox04").value 

    if (phone1.length == 3 && phone2.length == 4 && phone3.length == 4){
        document.getElementById("token__send__btn").style.cursor = 'pointer'
        document.getElementById("token__send__btn").style.backgroundColor = '#0068FF'
        document.getElementById("token__send__btn").style.color = '#FFFFFF'
        document.getElementById("token__send__btn").disabled = false
    }
}