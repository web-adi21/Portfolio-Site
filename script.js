let person;
const startBtn = document.querySelector(".start-btn");

if (startBtn) {
  startBtn.addEventListener("click", check);
}

function check() {
  let name = document.querySelector("#input").value;
  
  if(name == "Tanishka") {
    alert("Welcome Little nugget"); 
    person = true;
  } else if(name == "Ipsha") {
    document.querySelector(".nameCheck").innerText = "I am sorry but its for your sister D:";
    person = false;
  } else if(name == "Vishakha") {
    document.querySelector(".nameCheck").innerText = "Why u do this I am sorry for liking the story D: she made me do it and now you bully me I am veryyy innocent!!";
    person = false;
  } else {
    document.querySelector(".nameCheck").innerText = "Go away you stranger!!";
    person = false;
  }
  
  if(person == true) {
    window.location.href = "activitystart.html";
  }
}

const noBtn = document.querySelector(".noBtn");

if (noBtn) {
  noBtn.addEventListener("click", no);
}

function no() {
  document.querySelector(".img3div").innerHTML = "<img src='Sad Scream GIF.gif' alt='sad'>";
  document.querySelector(".finaltextdiv").innerText = "Noo You cant do this to me D:";
  
  const b = document.querySelector('.noBtn');
  b.style.position = 'fixed';
  b.style.transition = 'all 300ms ease';
  
  // Get current scale from transform or default to 1
  const currentScale = parseFloat(b.style.transform?.match(/scale\(([\d.]+)\)/)?.[1] || 1);
  const newScale = currentScale / 2;
  
  // Move to random position and scale down
  const rect = b.getBoundingClientRect();
  b.style.left = Math.floor(Math.random() * (window.innerWidth - rect.width)) + 'px';
  b.style.top = Math.floor(Math.random() * (window.innerHeight - rect.height)) + 'px';
  b.style.transform = `scale(${newScale})`;
  
  // If button becomes very small, hide it
  if (newScale < 0.05) {
    b.style.display = 'none';
    document.querySelector(".finaltextdiv").innerText = "Ziddiii ladkiiii krdee naa yes click :C"
  }
}
const yesBtn = document.querySelector(".yesBtn");
if (yesBtn) {
  yesBtn.addEventListener("click", yes);
}

function yes() {
  document.querySelector(".img3div").innerHTML = "<img src='Happy I Love You GIF by jerseycouple.gif' alt='happy'>";
  document.querySelector(".finaltextdiv").innerText = "Yayyyy I love you too!! <3";
  const y = document.querySelector(".yesBtn");
  const n = document.querySelector(".noBtn");
  
  // Hide both buttons
  y.style.display = 'none';
  n.style.display = 'none';
}