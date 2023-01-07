// Display current date and time at the top of the webpage
const currentDay = $("#currentDay");
let now = dayjs().format("dddd MMMM DD YYYY, h:mm A");
let currentHour = dayjs().format("H");

currentDay.text("Today is " + now + ".")

// Colour-code the timeblocks
$(".time-block").each(function (index) {

  let currentTimeblock = $(this);
  let timeblockHour = $(this).attr('id').split("-")[1];

  if (Number(timeblockHour) < Number(currentHour)) {
    currentTimeblock.removeClass("present");
    currentTimeblock.removeClass("future");
    currentTimeblock.addClass("past");
  } else if (Number(timeblockHour) == Number(currentHour)) {
    currentTimeblock.removeClass("past");
    currentTimeblock.removeClass("future");
    currentTimeblock.addClass("present");
  } else if (Number(timeblockHour) > Number(currentHour)) {
    currentTimeblock.removeClass("past");
    currentTimeblock.removeClass("present");
    currentTimeblock.addClass("future");
  }

});

// Display existing events from local storage
$("textarea").each(function (index) {
  let timeblockID = $(this).parent().attr('id');
  console.log(timeblockID);
  $(this).html(localStorage.getItem(timeblockID));
});

// Save new event input to local storage
$(".saveBtn").click(function () {

  let saveKey = $(this).parent().attr('id');
  let saveContent = $(this).parent().contents()[3];
  let saveDesc = saveContent.value;

  localStorage.setItem(saveKey, saveDesc);
});
