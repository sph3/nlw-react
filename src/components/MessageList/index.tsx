import { api } from '../../services/api';
import styles from './styles.module.scss';
import logoImg from '../../assets/logo.svg';
import { useEffect, useState } from 'react';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export const MessageList = () => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    api.get('messages/last3').then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Logo DoWhile 2021" />
      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img
                src="https://github.com/diego3g.png"
                alt="Diego Fernandes foto"
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img
                src="https://github.com/diego3g.png"
                alt="Diego Fernandes foto"
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImg}>
              <img
                src="https://github.com/diego3g.png"
                alt="Diego Fernandes foto"
              />
            </div>
            <span>Diego Fernandes</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
