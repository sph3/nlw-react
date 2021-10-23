import { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { api } from '../../services/API';
import styles from './styles.module.scss';

export const LoginBox = () => {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  );
};
