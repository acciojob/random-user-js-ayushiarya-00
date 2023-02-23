//your code here
const userImg = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const ageBtn = document.getElementById("age-btn");
const emailBtn = document.getElementById("email-btn");
const phoneBtn = document.getElementById("phone-btn");
const infoDiv = document.getElementById("info");
const additionalInfoDiv = document.getElementById("additional-info");
const getUserBtn = document.getElementById("get-user");

// Helper function to fetch user data from the API
async function getUserData() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data.results[0];
}

// Helper function to display the user info
function displayUserInfo(user) {
  userImg.src = user.picture.large;
  userImg.alt = `${user.name.first} ${user.name.last}`;
  userName.textContent = `${user.name.first} ${user.name.last}`;
}

// Helper function to display additional user info
function displayAdditionalInfo(user, attr) {
  let info;
  switch (attr) {
    case "age":
      info = user.dob.age;
      break;
    case "email":
      info = user.email;
      break;
    case "phone":
      info = user.phone;
      break;
    default:
      info = "";
  }
  infoDiv.textContent = info;
  additionalInfoDiv.style.display = "block";
}

// Display initial user info
getUserData().then((user) => {
  displayUserInfo(user);
});

// Add event listeners to buttons
ageBtn.addEventListener("click", () => {
  getUserData().then((user) => {
    displayAdditionalInfo(user, "age");
  });
});

emailBtn.addEventListener("click", () => {
  getUserData().then((user) => {
    displayAdditionalInfo(user, "email");
  });
});

phoneBtn.addEventListener("click", () => {
  getUserData().then((user) => {
    displayAdditionalInfo(user, "phone");
  });
});

// Add event listener to get user button
getUserBtn.addEventListener("click", () => {
  getUserData().then((user) => {
    displayUserInfo(user);
    additionalInfoDiv.style.display = "none";
  });
});
