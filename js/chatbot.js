// CHATBOT
function sendMessage() {
    const input = document.getElementById("chatInput");
    const msg = input.value;

    const chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += `<div class="user">${msg}</div>`;
    input.value = "";

    setTimeout(() => {
        chatBox.innerHTML += `<div class="bot">Ask about UI/UX design 🎨</div>`;
    }, 500);
}

// EXPORT HTML
function exportHTML() {
    const code = document.getElementById("codeOutput").innerText;

    const blob = new Blob([code], { type: "text/html" });
    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "velora-ui.html";
    a.click();
}
