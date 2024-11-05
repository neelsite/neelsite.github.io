document.getElementById('send').addEventListener('click', function() {
    const messageInput = document.getElementById('message');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const outputDiv = document.getElementById('output');
        const newMessage = document.createElement('div');
        newMessage.textContent = messageText;
        outputDiv.appendChild(newMessage);

        messageInput.value = '';
        outputDiv.scrollTop = outputDiv.scrollHeight;  // Scroll to the bottom
    }
});

