const beforeEl   = document.getElementById("before");
const command     = document.getElementById("typer");
const textarea    = document.getElementById("texter");
const terminal    = document.getElementById("terminal");
const contentscroll = document.getElementById("contentscroll");

let historyIndex = 0;
const history    = [];
let suggestedCommand   = null;
let awaitingConfirmation = false;

const commandMap = {
  help: "help",
  about: "about",
  whoami: "about",
  experience: "experience",
  work: "experience",
  projects: "projects",
  skills: "skills",
  tech: "skills",
  achievements: "achievements",
  awards: "achievements",
  social: "social",
  email: "email",
  resume: "resume",
  github: "github",
  linkedin: "linkedin",
  devpost: "devpost",
  history: "history",
  clear: "clear",
  snake: "snake",
  exit: "exit",
  quit: "exit",
  logout: "exit",
};

function scrollToBottom() {
  if (contentscroll) contentscroll.scrollTop = contentscroll.scrollHeight;
}

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
  scrollToBottom();
}, 100);

window.addEventListener("keyup",  (e) => { enterKey(e); scrollToBottom(); });
window.addEventListener("keydown", ()  => { textarea.focus(); scrollToBottom(); });
document.addEventListener("click", ()  => { textarea.focus(); scrollToBottom(); });
terminal.addEventListener("click", ()  => { textarea.focus(); scrollToBottom(); });
textarea.addEventListener("input", scrollToBottom);
textarea.value   = "";
command.innerHTML = "";

function enterKey(e) {
  textarea.focus();
  scrollToBottom();

  /* Tab completion */
  if (e.key === "Tab") {
    e.preventDefault();
    const partial  = textarea.value.toLowerCase();
    const matches  = Object.keys(commandMap).filter((c) => c.startsWith(partial));
    if (matches.length === 1) {
      textarea.value = command.innerHTML = matches[0];
    } else if (matches.length > 1) {
      addLine("<br>", "", 0);
      loopLines(matches, "color2", 80);
      addLine("<br>", "", matches.length * 80 + 100);
    }
    scrollToBottom();
    return;
  }

  /* Ctrl+R reverse search */
  if (e.ctrlKey && e.key === "r") {
    e.preventDefault();
    const search = prompt("Reverse search:");
    const match  = history.slice().reverse().find((c) => c.includes(search));
    if (match) {
      textarea.value = command.innerHTML = match;
    } else {
      addLine("No match found.", "error", 100);
    }
    scrollToBottom();
    return;
  }

  /* Enter */
  if (e.keyCode === 13) {
    const input = command.innerHTML.trim().toLowerCase();
    addLine("[amlan@portfolio ~]$ " + command.innerHTML, "index", 0);

    if (awaitingConfirmation && suggestedCommand) {
      if (input === "y") {
        commander(suggestedCommand);
      } else {
        addLine("Cancelled.", "color2", 80);
      }
      awaitingConfirmation = false;
      suggestedCommand     = null;
    } else {
      history.push(command.innerHTML);
      historyIndex = history.length;
      commander(input);
    }

    command.innerHTML = "";
    textarea.value    = "";
    scrollToBottom();
    return;
  }

  /* Arrow up: previous command */
  if (e.keyCode === 38 && historyIndex > 0) {
    historyIndex--;
    textarea.value = command.innerHTML = history[historyIndex];
    scrollToBottom();
  }

  /* Arrow down: next command */
  if (e.keyCode === 40 && historyIndex < history.length) {
    historyIndex++;
    textarea.value = command.innerHTML = history[historyIndex] || "";
    scrollToBottom();
  }
}

function commander(cmd) {
  switch (cmd) {
    case "help":
      loopLines(help, "", 80);
      break;
    case "about":
    case "whoami":
      loopLines(about, "", 80);
      break;
    case "experience":
    case "work":
      loopLines(experience, "", 80);
      break;
    case "projects":
      loopLines(projects, "", 80);
      break;
    case "skills":
    case "tech":
      loopLines(skills, "", 80);
      break;
    case "achievements":
    case "awards":
      loopLines(achievements, "", 80);
      break;
    case "social":
      loopLines(social, "", 80);
      break;
    case "email":
      addLine(`Opening mail client for <a href="mailto:amlannandy5@gmail.com">amlannandy5@gmail.com</a>...`, "color2", 80);
      openTab(emailUrl);
      break;
    case "resume":
      addLine("Opening resume...", "color2", 80);
      openTab(resumeUrl);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 80);
      openTab(githubUrl);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 80);
      openTab(linkedinUrl);
      break;
    case "devpost":
      addLine("Opening Devpost...", "color2", 80);
      openTab(devpostUrl);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(history, "index", 80);
      addLine("<br>", "", history.length * 80 + 50);
      break;
    case "clear":
      setTimeout(() => {
        terminal.querySelectorAll("p").forEach((p) => p.remove());
        loopLines(banner, "", 80);
        textarea.focus();
        scrollToBottom();
      }, 1);
      break;
    case "snake":
      runSnakeGame();
      break;
    case "exit":
    case "quit":
    case "logout":
      addLine("👋 Session terminated.", "color2", 0);
      setTimeout(closeWindow, 800);
      break;
    case "":
      break;
    default: {
      const closest = findClosest(cmd);
      if (closest) {
        suggestedCommand     = closest;
        awaitingConfirmation = true;
        addLine(
          `Command not found. Did you mean <span class="command">'${closest}'</span>? (y/n)`,
          "error",
          100,
        );
      } else {
        addLine(
          `Command not found. Type <span class="command">'help'</span> for available commands.`,
          "error",
          100,
        );
      }
    }
  }
  scrollToBottom();
}

function closeWindow() {
  window.open("", "_self");
  window.close();
  setTimeout(() => { window.location.href = "about:blank"; }, 100);
}

function openTab(link) {
  setTimeout(() => window.open(link, "_blank"), 400);
}

function addLine(text, style, time) {
  setTimeout(() => {
    const el = document.createElement("p");
    el.innerHTML = text;
    el.className = style;
    beforeEl.parentNode.insertBefore(el, beforeEl);
    scrollToBottom();
  }, time);
}

function loopLines(lines, style, time) {
  lines.forEach((line, i) => addLine(line, style, i * time));
  setTimeout(scrollToBottom, lines.length * time + 50);
}

function findClosest(input) {
  const threshold = 3;
  let minDist = Infinity;
  let closest = null;
  for (const cmd of Object.keys(commandMap)) {
    const d = levenshtein(input, cmd);
    if (d < minDist && d <= threshold) { minDist = d; closest = cmd; }
  }
  return closest;
}

function levenshtein(a, b) {
  const m = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      m[i][j] = a[i-1] === b[j-1]
        ? m[i-1][j-1]
        : 1 + Math.min(m[i-1][j], m[i][j-1], m[i-1][j-1]);
  return m[a.length][b.length];
}

/* ── Snake easter egg ── */

function runSnakeGame() {
  const W = 20, H = 10;
  let snake = [{ x: 5, y: 5 }];
  let food  = { x: 10, y: 5 };
  let dir   = "right";
  let score = 0;
  let interval;
  let gameEl;

  function draw() {
    let screen = `Score: ${score}\n`;
    for (let y = 0; y < H; y++) {
      let row = "";
      for (let x = 0; x < W; x++) {
        if (x === food.x && y === food.y)              row += "*";
        else if (snake.some((s) => s.x === x && s.y === y)) row += "O";
        else                                           row += ".";
      }
      screen += row + "\n";
    }
    if (!gameEl) {
      gameEl = document.createElement("p");
      gameEl.className = "color2";
      gameEl.innerHTML = `<pre>${screen}</pre>`;
      beforeEl.parentNode.insertBefore(gameEl, beforeEl);
    } else {
      gameEl.innerHTML = `<pre>${screen}</pre>`;
    }
    scrollToBottom();
  }

  function move() {
    const head = { ...snake[0] };
    if (dir === "up")    head.y--;
    if (dir === "down")  head.y++;
    if (dir === "left")  head.x--;
    if (dir === "right") head.x++;

    if (head.x < 0 || head.x >= W || head.y < 0 || head.y >= H ||
        snake.some((s) => s.x === head.x && s.y === head.y)) {
      clearInterval(interval);
      gameEl.innerHTML += `<br><span class="error">💀 Game Over! Score: ${score}</span>`;
      window.removeEventListener("keydown", keyHandler);
      return;
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score++;
      food = { x: Math.floor(Math.random() * W), y: Math.floor(Math.random() * H) };
    } else {
      snake.pop();
    }
    draw();
  }

  function keyHandler(e) {
    if (e.key === "ArrowUp"    && dir !== "down")  dir = "up";
    if (e.key === "ArrowDown"  && dir !== "up")    dir = "down";
    if (e.key === "ArrowLeft"  && dir !== "right") dir = "left";
    if (e.key === "ArrowRight" && dir !== "left")  dir = "right";
    if (e.key === "Escape" || e.key === "q") {
      clearInterval(interval);
      window.removeEventListener("keydown", keyHandler);
      gameEl.innerHTML += `<br><span class="color2">🛑 Snake exited.</span>`;
    }
  }

  window.addEventListener("keydown", keyHandler);
  addLine("🎮 Use arrow keys to move. Press q or Esc to quit.", "color2", 0);
  draw();
  interval = setInterval(move, 250);
}
