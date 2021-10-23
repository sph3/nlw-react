import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../context/authContext';
import { api } from '../../services/API';
import styles from './styles.module.scss';

export const SendMessageForm = () => {
  const { user, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const setMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }

    await api.post('messages', { message });
    setMessage('');
  };

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button onClick={signOut} className={styles.signOutButton}>
        <VscSignOut size={32} />
      </button>

      <header className={styles.userInfo}>
        <div className={styles.userImg}>
          <img src={''} alt={`${user?.name} foto`} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>

      <form onSubmit={sendMessageHandler} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          onChange={setMessageHandler}
          name="message"
          id="message"
          placeholder="Qual a sua expectativa para o evento?"
          value={message}
        />
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
};
