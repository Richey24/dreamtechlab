const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const Eamil = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const gender = document.querySelectorAll("input[name=remember-password]");
const terms = document.querySelector(".terms");
const allInputs = document.querySelectorAll("input");
const buttonSave = document.querySelector(".submit_btn");

// console.log("gender", gender);
allInputs.forEach((el) => {
  const eventsFunction = (e) => {
    let checkedToo = true;
    gender.forEach((elemment) =>
      elemment.checked ? (checkedToo = false) : ""
    );

    // console.log(checkedToo);
    if (
      firstName.value === "" ||
      Eamil.value === "" ||
      phoneNumber.value === "" ||
      lastName.value === "" ||
      validEmail(Eamil.value) ||
      checkedToo||
      terms.checked === false
    ) {
      buttonSave.classList.add("disabled");
    } else {
      buttonSave.classList.remove("disabled");
    }
  };
  el.onkeyup = eventsFunction;
  el.onchange = eventsFunction;
});

const validEmail = (email) => {
  const reg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  if (reg.test(email)) {
    return false;
  } else {
    return true;
  }
};
