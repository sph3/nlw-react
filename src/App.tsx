import { useContext } from 'react';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './context/authContext';
import styles from './styles/App.module.scss';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSignedIn : ''
      }`}
    >
      <MessageList />

      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
