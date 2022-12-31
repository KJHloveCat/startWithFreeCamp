let auth = false;

const token__send = () => {
  isStarted = false;

  if (isStarted === false) {
    isStarted = true;
    let tokenNum = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("token__num").innerText = tokenNum;
    document.getElementById("token__send__btn").disabled = true;
    document.getElementById("token__send__btn").style.color = "#828282";
    document.getElementById("token__send__btn").style.cursor = "default";
    document.getElementById("token__send__btn").style.backgroundColor =
      "#FFFFFF";
    document.getElementById("token__ok__btn").style.color = "#FFFFFF";
    document.getElementById("token__ok__btn").style.backgroundColor = "#0068FF";
    document.getElementById("token__ok__btn").disabled = false;
    document.getElementById("token__ok__btn").style.cursor = "pointer";
    let time = 6;
    let token__send__btn;

    token__send__btn = setInterval(() => {
      if (time >= 0 && auth == false) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("token").innerText = min + ":" + sec;
        time = time - 1;
      } else if (auth == true) {
        document.getElementById("token__send__btn").disabled = true;
        document.getElementById("token__send__btn").style.color = "#828282";
        document.getElementById("token__send__btn").style.backgroundColor =
          "#FFFFFF";
        document.getElementById("token__send__btn").style.cursor = "default";
        document.getElementById("token__ok__btn").disabled = true;
        document.getElementById("token__ok__btn").style.color = "#828282";
        document.getElementById("token__ok__btn").style.cursor = "default";
        document.getElementById("token__ok__btn").style.backgroundColor =
          "#FFFFFF";
        clearInterval(token__send__btn);
      } else {
        isStarted = false;
        auth = false;
        document.getElementById("token__send__btn").disabled = false;
        document.getElementById("token__send__btn").style.color = "#FFFFFF";
        document.getElementById("token__send__btn").style.backgroundColor =
          "#0068FF";
        document.getElementById("token__send__btn").style.cursor = "pointer";
        document.getElementById("token__ok__btn").disabled = true;
        document.getElementById("token__ok__btn").style.color = "#828282";
        document.getElementById("token__ok__btn").style.cursor = "default";
        document.getElementById("token__ok__btn").style.backgroundColor =
          "#FFFFFF";

        clearInterval(token__send__btn);
      }
    }, 1000);
  } else {
  }
};

const token__ok = () => {
  auth = true;
  alert("인증이 확인되었습니다.");
  document.getElementById("token__num").innerText = "000000";
  document.getElementById("token").innerText = "0:06";
  document.getElementById("token__ok__btn").innerText = "인증완료";
  document.getElementById("signup").disabled = false;
  document.getElementById("signup").style.cursor = "pointer";
  document.getElementById("signup").style.color = "#0068FF";
  document.getElementById("signup").style.backgroundColor = "#FFFFFF";
  document.getElementById("signup").style.border = "1px solid #0068FF";
};

const changeFocus01 = () => {
  let phone01 = document.getElementById("textbox02").value;

  if (phone01.length == 3) {
    document.getElementById("textbox03").focus();
  }
};

const changeFocus02 = () => {
  let phone01 = document.getElementById("textbox03").value;

  if (phone01.length == 4) {
    document.getElementById("textbox04").focus();
  }
};

const enableTokenSend = () => {
  let phone1 = document.getElementById("textbox02").value;
  let phone2 = document.getElementById("textbox03").value;
  let phone3 = document.getElementById("textbox04").value;

  if (phone1.length == 3 && phone2.length == 4 && phone3.length == 4) {
    document.getElementById("token__send__btn").style.cursor = "pointer";
    document.getElementById("token__send__btn").style.backgroundColor =
      "#0068FF";
    document.getElementById("token__send__btn").style.color = "#FFFFFF";
    document.getElementById("token__send__btn").disabled = false;
  }
};

const signup = () => {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let passwordre = document.getElementById("passwordre").value;

  if (
    email !== "" &&
    email.includes("@") &&
    name !== "" &&
    password !== "" &&
    passwordre !== "" &&
    password == passwordre &&
    document.getElementById("select_lo").value !== "지역을 선택하세요" &&
    (document.getElementById("ch_female").checked ||
      document.getElementById("ch_male").checked)
  ) {
    console.log("가입성공 !");
    document.getElementById("error_email").innerText = "";
    document.getElementById("error_name").innerText = "";
    document.getElementById("error_password").innerText = "";
    document.getElementById("error_passwordre").innerText = "";
    document.getElementById("error_location").innerText = "";
    document.getElementById("error_gender").innerText = "";
  } else {
    if (email == "" || !email.includes("@")) {
      document.getElementById("error_email").innerText =
        "이메일이 올바르지 않습니다";
    } else {
      document.getElementById("error_email").innerText = "";
    }

    if (name == "") {
      document.getElementById("error_name").innerText =
        "이름이 올바르지 않습니다";
    } else {
      document.getElementById("error_name").innerText = "";
    }

    if (password == "") {
      document.getElementById("error_password").innerText =
        "패스워드가 올바르지 않습니다";
    } else {
      document.getElementById("error_password").innerText = "";
    }

    if (passwordre == "") {
      document.getElementById("error_passwordre").innerText =
        "패스워드가 올바르지 않습니다.";
    } else {
      document.getElementById("error_passwordre").innerText = "";
    }

    if (passwordre !== password) {
      document.getElementById("error_password").innerText =
        "패스워드가 일치하지않습니다";
      document.getElementById("error_passwordre").innerText =
        "패스워드가 일치하지않습니다";
    } else {
      document.getElementById("error_password").innerText = "";
      document.getElementById("error_passwordre").innerText = "";
    }

    if (document.getElementById("select_lo").value == "지역을 선택하세요") {
      document.getElementById("error_location").innerText =
        "지역을 선택해주세요.";
    } else {
      document.getElementById("error_location").innerText = "";
    }

    if (
      !document.getElementById("ch_male").checked &&
      !document.getElementById("ch_female").checked
    ) {
      document.getElementById("error_gender").innerText =
        "성별을 선택해주세요.";
    } else {
      document.getElementById("error_gender").innerText = "";
    }
  }
};

const genderClick = (target) => {
  document
    .querySelectorAll(`input[type=checkbox]`)
    .forEach((el) => (el.checked = false));

  target.checked = true;
};
