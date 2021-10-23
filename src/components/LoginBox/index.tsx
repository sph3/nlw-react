import { VscGithubInverted } from 'react-icons/vsc';
import styles from './styles.module.scss';

export const LoginBox = () => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=http://localhost:4500`;

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  );
};
