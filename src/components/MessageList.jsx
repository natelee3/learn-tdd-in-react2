const MessageList = ({messages}) => (
    <ul>
        {messages.map((message, index) => (
            <li key={`${index}-${message}`}>{message}</li>
        ))}
    </ul>
);

export default MessageList;