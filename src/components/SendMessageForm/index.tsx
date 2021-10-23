import { useContext } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { AuthContext } from '../../context/authContext';
import styles from './styles.module.scss';

export const SendMessageForm = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton}>
        <VscSignOut size={32} />
      </button>

      <header className={styles.userInfo}>
        <div className={styles.userImg}>
          <img src={user?.avatar_url} alt={`${user?.name} foto`} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </header>

      <form className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual a sua expectativa para o evento?"
        />
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
};
