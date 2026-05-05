const API_KEY = "YOUR_API_KEY";

// CALL AI
async function generateUI(prompt) {
    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash:generateContent?key=${API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        }
    );

    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
}

// BUTTON CLICK
document.getElementById("generateBtn").onclick = async () => {
    const idea = document.getElementById("ideaInput").value;

    const code = await generateUI(idea);

    document.getElementById("codeOutput").innerText = code;
    document.getElementById("previewFrame").srcdoc = code;
};
