

const cityname = document.getElementById("cityname");
const City_Name = document.getElementById("City_Name");

const submitbtn = document.getElementById("submitbtn");

const temp_val = document.getElementById("temp_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

var date = new Date();
var samah = date.getHours();

const getInfo = async (event) => {
  event.preventDefault();
  let cityval = cityname.value;

  if (cityval === "") {
    City_Name.innerText = "please write the name before search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=d5a37432a71305bd81bc02eeb8dc8493&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      temp_val.innerText = Math.ceil(arrData[0].main.temp);
      City_Name.innerText = `${arrData[0].name} ${arrData[0].sys.country}  ||  ${arrData[0].weather[0].description}`;
      // temp_status.innerText = arrData[0].weather[0].main;
      var tempmood = arrData[0].weather[0].main;
      var desc = arrData[0].weather[0].description;

      //cloudy rainy sunny images condition
      if (tempmood == "Clear") {
        if (samah >= 19 || samah < 6) {
          temp_status.innerHTML = temp_status.innerHTML =
            "<i class='bi bi-moon'></i>";
        } else {
          temp_status.innerHTML =
            "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
      } else if (tempmood == "Clouds") {
        if (desc == "overcast clouds") {
          temp_status.innerHTML = "<i class='bi bi-cloud-fill'></i>";
        } else {
          if (samah >= 19 || samah < 6) {
            temp_status.innerHTML = "<i class='bi bi-cloud-moon-fill'></i>";
          } else {
            temp_status.innerHTML = "<i class='bi bi-cloud-sun-fill'></i>";
          }
        }
      } else if (tempmood == "Rain") {
        if (desc == "heavy intensity rain")
          temp_status.innerHTML = "<i class='bi bi-cloud-lightning-rain'></i>";
        else temp_status.innerHTML = "<i class='bi bi-cloud-drizzle'></i>";
      } else if (tempmood == "Mist" || tempmood == "Haze") {
        temp_status.innerHTML = "<i class='bi bi-cloud-fog-fill'></i>";
      } else {
        temp_status.innerHTML = "<i class='bi bi-sun-fill'></i>";
      }

      datahide.classList.remove("data_hide");
    } catch (error) {
      console.log(error);
      City_Name.innerText = "please enter the correct city spelling";
      datahide.classList.add("data_hide");
    }
  }
};

const timeweather = () => {
  var today_date = document.getElementById("today_date");

  var dayname = document.getElementById("dayname");

  var weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var weekday = date.getDay();
  // console.log(weekday)
  var daynaam = weeks[weekday];
  // var daynaam = weeks[date.getDay() - 1];
  // console.log(daynaam)

  let mahine = [
    "JAN",
    "FEB",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  let tareek = date.getDate();
  let mahina = date.getMonth() + 1;
  dayname.innerText = `${daynaam}`;
  today_date.innerText = `${tareek} ${mahine[mahina - 1]}`;
};

if (submitbtn) {
  submitbtn.addEventListener("click", getInfo);
}

//  console.log(samah);

const hamburger = document.querySelector(".hamburger-lines");
// const navbar = document.querySelector(".navbar");
// const dropDownMenu = document.querySelector(".drop-down-menu-items");
hamburger.onclick = function () {
  let menuitems = document.querySelector(".menu-items");
  menuitems.classList.toggle("open");
};
timeweather();
