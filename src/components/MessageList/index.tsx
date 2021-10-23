import { useEffect, useState } from 'react';
import io from 'socket.io-client';

import { api } from '../../services/API';
import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

const socket = io('http://localhost:3000');
socket.on('new_message', (newMessage) => {
  console.log(newMessage);
});

export const MessageList = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    api.get<Message[]>('/messages/last3').then((res) => {
      setMessages(res.data);
    });
  }, [messages]);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Logo DoWhile 2021" />
      <ul className={styles.messageList}>
        {messages.map((message) => {
          return (
            <li key={message.id} className={styles.message}>
              <p className={styles.messageContent}>{message.text}</p>
              <div className={styles.messageUser}>
                <div className={styles.userImg}>
                  <img
                    src={message.user.avatar_url}
                    alt={`${message.user.name} foto`}
                  />
                </div>
                <span>{message.user.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
