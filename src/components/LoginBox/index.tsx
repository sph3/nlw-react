import { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import styles from './styles.module.scss';

export const LoginBox = () => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=http://localhost:4500`;

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWIthoutCode, githubCode] = url.split('?code=');
      window.history.pushState({}, '', urlWIthoutCode);
    }
  }, []);

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
