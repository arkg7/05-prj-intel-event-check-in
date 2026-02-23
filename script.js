const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const group = document.getElementById("teamSelect");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //input values
  const attendeeName = nameInput.value;
  const team = group.value;
  const teamName = group.selectedOptions[0].text;

  //increment count
  count++;
  const currentCountElement = document.getElementById("attendeeCount");
  currentCountElement.textContent = count;

  //calculate percentage
  const percentage = Math.round((count / maxCount) * 100) + "%";
  //console.log(`Percentage: ${percentage}`);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  //update team count
  const teamCountElement = document.getElementById(team + "Count");
  const teamCount = parseInt(teamCountElement.textContent) || 0;
  teamCountElement.textContent = teamCount + 1;

  //greet attendee
  const greeting = `Welcome, ${attendeeName}! You have checked in for ${teamName}. 🎉`;
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = greeting;
  greetingElement.style.display = "block";

  //reset form
  form.reset();
});
