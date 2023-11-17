import React, { useState } from 'react';
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: '¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?',
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      text: inputText,
      isUser: true,
    };

    // Envía el mensaje al chatbot y recibe una respuesta
    // Agrega aquí la lógica para la respuesta del chatbot

    setMessages([...messages, newMessage]);
    setInputText('');

    // Simulemos una respuesta del chatbot después de 1 segundo
    setTimeout(() => {
      const botResponse = {
        text: 'Gracias por tu mensaje. Estoy procesando tu solicitud.',
        isUser: false,
      };
      setMessages([...messages, botResponse]);
    }, 1000);
  };

  return (
    <Paper elevation={3} className="chatbot-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <TextField
          fullWidth
          type="text"
          value={inputText}
          onChange={handleInputChange}
          label="Escribe un mensaje..."
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
        >
          Enviar
        </Button>
      </div>
    </Paper>
  );
};

export default Chatbot;
