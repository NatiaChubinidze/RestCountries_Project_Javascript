const form = document.getElementById("signUpForm");


class errorsCheck {
  errorsString = null;
  check(item = {}) {
    for (let key in item) {
      if (item[key] == "") {
        this.errorsString += `Error! ${key} is empty. `;
      }
    }
    return this.errorsString;
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userInfo = {
    email: document.getElementById("inputEmail").value,
    password: document.getElementById("inputPassword").value,
  };
  const checkError = new errorsCheck();
  const checkResult = checkError.check(userInfo);
  if (checkResult) {
    console.log(checkError.errorsString);
  } else {
    const result = await window.Api.register(userInfo);
    if (result) {
      storeToken(result.token);
      navigateToDashboard();
    }
  }
});

form.addEventListener("click",event=>{
    if(event.target.classList.contains("btn-link")){
        navigateToIndex();
    }
})
