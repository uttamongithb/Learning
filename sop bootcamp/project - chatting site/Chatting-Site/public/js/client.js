document.addEventListener("DOMContentLoaded", () => {
    const socket = io();
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
        window.location.href = "index.html";
        return;
    }

    // DOM elements
    const logoutButton = document.getElementById("logout-button");
    const userList = document.getElementById("user-list");
    const chatWith = document.getElementById("chat-with");
    const chatStatus = document.getElementById("chat-status");
    const chatContent = document.getElementById("chat-content");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatInputContainer = document.getElementById("chat-input-container");

    chatInputContainer.style.display = 'none';
    let currentRecipient = null;

    socket.emit('join', currentUser);

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        socket.disconnect();
        window.location.href = "index.html";
    });

    sendButton.addEventListener("click", (e) => {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (message && currentRecipient) {
            socket.emit('chatMessage', {
                message: message,
                recipient: currentRecipient
            });
            messageInput.value = '';
        }
    });

    messageInput.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendButton.click();
        }
    });

    socket.on('userList', (users) => {
        userList.innerHTML = '';
        users.forEach(user => {
            if (user.username !== currentUser) {
                const userElement = document.createElement("div");
                userElement.classList.add("username");
                userElement.innerHTML = `
                    <span class="name">${user.username}</span>
                    <span class="status ${user.status === 'online' ? 'online' : 'offline'}">
                        ${user.status}
                    </span>
                `;

                userElement.addEventListener("click", () => {
                    console.log('Selected user:', user.username);
                    currentRecipient = user.username;
                    chatWith.textContent = user.username;
                    chatStatus.textContent = user.status;

                    chatInputContainer.style.display = 'flex';
                    messageInput.disabled = false;
                    sendButton.disabled = false;
                    messageInput.focus();

                    chatContent.innerHTML = '';
                    socket.emit('getHistory', { withUser: user.username });
                });

                userList.appendChild(userElement);
            }
        });
    });

    socket.on('message', (data) => {
        if ((data.sender === currentRecipient) || 
            (data.isOwn && data.recipient === currentRecipient)) {
            displayMessage(data.sender, data.message, data.isOwn);
        }
    });

    function displayMessage(sender, message, isOwnMessage) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("chat-message",
            isOwnMessage ? "user-message" : "incoming-message");

        messageElement.innerHTML = `
            <span class="message-sender">${sender}: </span>
            <span class="message-content">${message}</span>
        `;

        chatContent.appendChild(messageElement);
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    socket.on('connect_error', (error) => {
        console.error('Connection Error:', error);
        alert('Connection error. Please refresh the page.');
    });

    socket.on('disconnect', (reason) => {
        if (reason === 'io server disconnect') {
            alert('Server disconnected. Please login again.');
            window.location.href = "index.html";
        }
    });
});
