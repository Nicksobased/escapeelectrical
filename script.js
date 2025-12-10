document.getElementById("Ambient").play();
document.getElementById("Ambient").loop = true;

const darkness = document.getElementById("darkness");
let glowSize = 200;

document.addEventListener("mousemove", (e) => {
  const offsetX = 16; // adjust if your cursor hotspot isn't exactly centered
  const offsetY = 16;
  darkness.style.setProperty("--x", `${e.clientX}px`);
  darkness.style.setProperty("--y", `${e.clientY}px`);
  darkness.style.setProperty("--size", `${glowSize}px`);
});

function showModal() {
  // https://www.w3schools.com/howto/howto_css_modals.asp
  // https://www.w3schools.com/css/css_positioning.asp
  // essentially you have a second page that is "position: fixed" filling up the screen, but it is in "display: none" so you can't see it!
  document.getElementById("myModal").style.display = "flex";
  const amongvent = document.getElementById("vent");
  amongvent.currentTime = 0;
  amongvent.play();
}

function showModal2() {
  document.getElementById("myModal2").style.display = "flex";
}

function hideModal() {
  document.getElementById("myModal").style.display = "none";
  const amongvent = document.getElementById("vent");
  amongvent.currentTime = 0;
  amongvent.play();
}

let i = 1;
let t = 1;
let f = 1;

const slots1 = [
  "images/one.png",
  "images/two.png",
  "images/three.png",
  "images/four.png",
  "images/five.png",
  "images/six.png",
  "images/seven.png",
  "images/eight.png",
  "images/nine.png",
  "images/ten.png",
];

function change1() {
  document.getElementById("slot1").src = slots1[i];

  i = i + 1;
  if (i >= 10) {
    i = 0;
  }
}

function change2() {
  document.getElementById("slot2").src = slots1[t];

  t = t + 1;
  if (t >= 10) {
    t = 0;
  }
}

function change3() {
  document.getElementById("slot3").src = slots1[f];

  f = f + 1;
  if (f >= 10) {
    f = 0;
  }
}

function CheckJackpot() {
  let s1 = document.getElementById("slot1");
  let s2 = document.getElementById("slot2");
  let s3 = document.getElementById("slot3");

  if (
    s1.src.includes("five") &&
    s2.src.includes("nine") &&
    s3.src.includes("two")
  ) {
    s1.style.opacity = "0.2";
    s2.style.opacity = "0.2";
    s3.style.opacity = "0.2";

    s1.onclick = null;
    s2.onclick = null;
    s3.onclick = null;

    document.getElementById("darkness").style.display = "none";

    document.getElementById("onesquare").src = "";
    document.getElementById("yessquare").src = "";
    document.getElementById("threequare").src = "";
    document.getElementById("nine9").src = "";
    document.getElementById("threee").src = "";
    document.getElementById("one").src = "";
    document.getElementById("noti").src = "";
    document.getElementById("doorr").src = "";
    document.getElementById("slot1").src = slots1[i];
    const amongcomplete = document.getElementById("complete");
    amongcomplete.currentTime = 0;
    amongcomplete.play();
    document.getElementById("myModal").style.display = "none";

    setTimeout(() => {
      document.getElementById("completed").style.display = "flex";
      const typing = document.getElementById("Typing");
      typing.currentTime = 0;
      typing.play();
    }, 1000);
    const amongtype = document.getElementById("typing");
    amongtype.currentTime = 0;
    amongtype.play();
    clearInterval(countdown);
    timerText.style.display = "none"; // hide the timer when they win
  } else {
    triggerJumpscare();
    const amongscare = document.getElementById("scareSound");
    amongscare.currentTime = 0;
    amongscare.play();
    const amongyell = document.getElementById("wrong");
    amongyell.currentTime = 0;
    amongyell.play();
  }
}

let jumpscareTriggered = false;

function triggerJumpscare() {
  if (jumpscareTriggered) return; // don't run twice
  jumpscareTriggered = true;

  const screen = document.getElementById("darkness");
  const jumpscareModal = document.getElementById("jumpscareModal");
  const wrong = document.getElementById("wrong");
  const scareSound = document.getElementById("scareSound");

  console.log("triggerJumpscare called:", screen, jumpscareModal);

  if (!screen || !jumpscareModal) {
    console.warn("Missing #darkness or #jumpscareModal in HTML");
    return;
  }

  // 🔴 Flash red
  screen.style.display = "block";
  screen.style.background = "rgba(255, 0, 0, 0.6)";

  if (wrong) {
    wrong.currentTime = 0;
    wrong.play();
  }

  // 👻 After 2 seconds → show jumpscare
  setTimeout(() => {
    jumpscareModal.style.display = "flex";

    if (scareSound) {
      scareSound.currentTime = 0;
      scareSound.play();
    }

    // ⚡ White impact flash
    screen.style.background = "rgba(255, 255, 255, 1)";
    setTimeout(() => {
      screen.style.transition = "background 1s ease-out";
      screen.style.background = "rgba(0, 0, 0, 1)";
    }, 150);

    // 🔄 Reset level after fade
    setTimeout(() => {
      jumpscareModal.style.display = "none";
      location.reload();
    }, 1500);
  }, 2000);
}

function showImage() {
  document.getElementById("onesquare").src = "images/five.png";
}

function showImage2() {
  document.getElementById("yessquare").src = "images/nine.png";
}

function showImage3() {
  document.getElementById("threequare").src = "images/two.png";
}

// Show the map modal
// Show the map modal
function showMap() {
  document.getElementById("myMap").style.display = "flex";
}

// Hide the map modal
function hideMap() {
  document.getElementById("myMap").style.display = "none";
}

// Toggle the map modal with the same image
function toggleMap() {
  const modal = document.getElementById("myMap");
  if (modal.style.display === "flex" || modal.style.display === "") {
    modal.style.display = "none";
    const amongclick = document.getElementById("click");
    amongclick.currentTime = 0;
    amongclick.play();
  } else {
    modal.style.display = "flex";
    const amongclick = document.getElementById("click");
    amongclick.currentTime = 0;
    amongclick.play();
  }
}

function goToCafeteria() {
  window.location.href = "https://kspysj.csb.app/";
}

function goToReactor() {
  window.location.href = "https://github.com/doribolas/escape3.git";
}

function goToOxygen() {
  window.location.href = "https://your-team-oxygen-page.com";
}

function goToAdmin() {
  window.location.href = "https://your-team-admin-page.com";
}

function goToElectrical() {
  window.location.href = "https://p8xfmx.csb.app/";
}

function goToWeapons() {
  window.location.href = "https://wsy38n.csb.app/";
}

function randomizeNumberPositions() {
  const hitboxes = document.querySelectorAll(".hitbox");

  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  // Elements we want to protect (no numbers over them)
  const protectedIds = ["noti", "doorr", "open"];

  // Get their rectangles
  const protectedRects = protectedIds
    .map((id) => document.getElementById(id))
    .filter((el) => el) // skip nulls
    .map((el) => el.getBoundingClientRect());

  // Helper: check if a rectangle overlaps any protected element
  function overlapsProtected(x, y, w, h) {
    return protectedRects.some((rect) => {
      const rectLeft = rect.left;
      const rectRight = rect.right;
      const rectTop = rect.top;
      const rectBottom = rect.bottom;

      const candidateLeft = x;
      const candidateRight = x + w;
      const candidateTop = y;
      const candidateBottom = y + h;

      const horizontalOverlap =
        candidateLeft < rectRight && candidateRight > rectLeft;
      const verticalOverlap =
        candidateTop < rectBottom && candidateBottom > rectTop;

      return horizontalOverlap && verticalOverlap;
    });
  }

  hitboxes.forEach((hitbox) => {
    const boxW = hitbox.offsetWidth || 200;
    const boxH = hitbox.offsetHeight || 200;

    const maxX = Math.max(0, viewportW - boxW);
    const maxY = Math.max(0, viewportH - boxH);

    let tries = 0;
    let randX, randY;

    // Try up to 30 times to find a position that doesn't overlap UI
    do {
      randX = Math.random() * maxX;
      randY = Math.random() * maxY;
      tries++;
    } while (overlapsProtected(randX, randY, boxW, boxH) && tries < 30);

    hitbox.style.left = randX + "px";
    hitbox.style.top = randY + "px";
  });
}

window.onload = randomizeNumberPositions;

let timeLeft = 45.0; // starts at 45 seconds
const timerText = document.getElementById("timerText");

timerText.innerText = timeLeft.toFixed(1); // "45.0"

const countdown = setInterval(() => {
  timeLeft -= 0.1; // subtract 0.1 seconds
  if (timeLeft < 0) timeLeft = 0;

  // Update text with 1 decimal place
  timerText.innerText = timeLeft.toFixed(1);

  // Color logic
  if (timeLeft > 30) {
    timerText.style.color = "green";
  } else if (timeLeft > 10) {
    timerText.style.color = "yellow";
  } else if (timeLeft > 0) {
    timerText.style.color = "red";
  }

  // Time's up
  if (timeLeft <= 0) {
    clearInterval(countdown);
    triggerJumpscare();
  }
}, 100); // every 100ms (0.1 sec)

