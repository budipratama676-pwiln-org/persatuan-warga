const chatBox = document.getElementById('chat-box');
const notifSound = document.getElementById('notifSound');
const bgMusic = document.getElementById('bgMusic');

function sendMessage() {
  const input = document.getElementById('userInput');
  const ai = document.getElementById('aiSelect').value;
  if (!input.value) return;

  appendMessage(`🧑 Kamu: ${input.value}`);
  
  setTimeout(() => {
    appendMessage(`🤖 ${ai.toUpperCase()}: (jawaban contoh untuk "${input.value}")`);
    if (notifEnabled) notifSound.play();
  }, 1000);

  input.value = '';
}

function appendMessage(msg) {
  const p = document.createElement('p');
  p.textContent = msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function clearChat() {
  chatBox.innerHTML = '';
}

function exportTXT() {
  let text = chatBox.innerText;
  let blob = new Blob([text], { type: 'text/plain' });
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'chat.txt';
  link.click();
}

function exportPDF() {
  let doc = new window.jspdf.jsPDF();
  let text = chatBox.innerText.split("\n");
  text.forEach((line, i) => {
    doc.text(line, 10, 10 + (i * 10));
  });
  doc.save('chat.pdf');
}

let musicPlaying = false;
function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
  } else {
    bgMusic.play();
  }
  musicPlaying = !musicPlaying;
}

let notifEnabled = true;
function toggleNotif() {
  notifEnabled = !notifEnabled;
  alert(notifEnabled ? '🔔 Notifikasi aktif' : '🔕 Notifikasi mati');
}
