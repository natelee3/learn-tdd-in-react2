import { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const handleTextChange = (e) => {
        setInputText(e.target.value);
    }

    const handleSend = (e) => {
        e.preventDefault();
        onSend(inputText);
        setInputText('');
    }

  return (
      <div>
            <input
                type="text"
                data-testid="messageText"
                value={inputText}
                onChange={handleTextChange}
            />
            <button
                type="button"
                data-testid="sendButton"
                onClick={handleSend}
            >
                Send
            </button>
      </div>
  )  
};

export default NewMessageForm;