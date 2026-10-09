const messages = [
	["NOVA SYSTEMS // AUTONOMOUS CORE", "muted"],
	["Power-on self test initiated...", ""],
	["CPU     : QUANTUM-8 @ 4.2 GHz", "ok"],
	["MEMORY  : 64,000 MB ........ OK", "ok"],
	["Checking memory integrity", ""],
	["  0x00000000 - 0x03FFFFFF  PASS", "ok"],
	["  0x04000000 - 0x07FFFFFF  PASS", "ok"],
	["Storage : NVMe array detected", ""],
	["  /dev/nvme0 .............. READY", "ok"],
	["Loading kernel modules", ""],
	["  [####################] 100%", "ok"],
	["Network : secure link established", "ok"],
	["Calibrating sensor matrix...", ""],
	["  IMU ............... ONLINE", "ok"],
	["  OPTICAL ARRAY ..... ONLINE", "ok"],
	["  THERMAL CONTROL ... NOMINAL", "ok"],
	["Verifying system signature", ""],
	["  SHA-256: 7F3A-91C2-BOOT-OK", "ok"],
	["All systems nominal.", "ok"],
	["Welcome back, operator.", "ok"]
];
const log = document.getElementById("log");
const screen = document.querySelector(".screen");
const fill = document.getElementById("fill");
const percent = document.getElementById("percent");
const phase = document.getElementById("phase");
let index = 0;

function addLine() {
	if (index === messages.length) {
		phase.textContent = "SYSTEM READY";
		log.append(" ");
		const cursor = document.createElement("span");
		cursor.className = "cursor";
		log.append(cursor);
		return;
	}
	const [text, style] = messages[index++];
	const line = document.createElement("span");
	line.className = `line ${style}`;
	line.textContent = `> ${text}`;
	log.append(line);
	const progress = Math.round(index / messages.length * 100);
	fill.style.width = `${progress}%`;
	percent.textContent = `${progress}%`;
	phase.textContent = progress > 70 ? "STARTING SERVICES" : progress > 35 ? "LOADING KERNEL" : "INITIALIZING";
	screen.scrollTop = screen.scrollHeight;
	setTimeout(addLine, 220 + Math.random() * 260);
}
setTimeout(addLine, 500);
