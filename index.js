const submitButton = document.getElementById("submitButton");
const YearInput = document.getElementById("YearInput");

const yearSpan = document.getElementById("yearSpan");
const monthSpan = document.getElementById("monthSpan");
const daySpan = document.getElementById("daySpan");

const currentyear = new Date().getFullYear();

function dateIsValid(date) {
  return date instanceof Date && !isNaN(date);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let DayInput = document.getElementById("DayInput");
  let MonthInput = document.getElementById("MonthInput");

  var dateOfBirth = new Date(
    `${YearInput.value}-${MonthInput.value}-${DayInput.value}`
  );

  if (dateIsValid(dateOfBirth) == false || YearInput.value > currentyear) {
    DayInput.value = "";
    MonthInput.value = "";
    YearInput.value = "";
    // alert("girl try again");
    document.body.classList.toggle("errorMode");
  } else {
    //  alert(`${YearInput.value}-${MonthInput.value}-${DayInput.value}`);

    //calculate month difference from current date in time
    //getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
    var month_diff = Date.now() - dateOfBirth.getTime();

    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);

    //extract year/month,datefrom date
    var year = age_dt.getUTCFullYear();
    var month = age_dt.getUTCMonth();
    var days = age_dt.getUTCDate();

    //now calculate the age of the user
    var yearAge = Math.abs(year - 1970);
    var MonthAge = Math.abs(month);
    var daysAge = Math.abs(days);

    yearSpan.innerHTML = yearAge;
    monthSpan.innerHTML = MonthAge;
    daySpan.innerHTML = daysAge;

    // DayInput.value ='';
    // MonthInput.value ='';
    // YearInput.value ='';

    // alert(yearAge);
    // alert(MonthAge);
    // alert(daysAge);
    // alert(age_dt)
  }
});
