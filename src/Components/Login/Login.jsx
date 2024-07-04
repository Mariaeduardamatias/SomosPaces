import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className={styles.backgroundPacesLogin}>
      <div className={`${styles.containerLogin} ${signUpMode ? styles.signUpModeLogin : ''}`}>
        <div className={styles.formsContainerLogin}>
          <div className={styles.signinSignupLogin}>
            <form className={styles.signInFormLogin}>
              <h2 className={styles.titleLogin}>Entrar</h2>
              <div className={styles.inputFieldLogin}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Email" />
              </div>
              <div className={styles.inputFieldLogin}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Senha" />
              </div>
              <button className={styles.btnLogin}>Login</button>
            </form>
            <form className={styles.signUpFormLogin}>
              <h2 className={styles.titleLogin}>Registre-se</h2>
              <div className={styles.inputFieldLogin}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Nome Completo" />
              </div>
              <div className={styles.inputFieldLogin}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Nome Social (opcional)" />
              </div>
              <div className={styles.inputFieldLogin}>
                <i className="fas fa-lock"></i>
                <input type="date" placeholder="Data de Nascimento" />
              </div>
              <div className={styles.inputFieldLogin}>
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Seu melhor email" />
              </div>
              <div className={styles.inputFieldLogin}>
                <i className="fas fa-envelope"></i>
                <input type="password" placeholder="Senha" />
              </div>
              <div className={styles.inputFieldLogin}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirme sua senha Senha" />
              </div>
              <button className={styles.btnLogin}>Registre-se</button>
            </form>
          </div>
        </div>
        <div className={styles.panelsContainerLogin}>
          <div className={`${styles.panelLogin} ${styles.leftPanelLogin}`}>
            <div className={styles.panelContentLogin}>
              <h3>Novo por aqui?</h3>
              <p>Vamos criar uma nova conta agora mesmo!</p>
              <button className={`${styles.btnLogin} ${styles.btnTransparentLogin}`} onClick={() => setSignUpMode(true)}>
                Registrar-se
              </button>
            </div>
          </div>
          <div className={`${styles.panelLogin} ${styles.rightPanelLogin}`}>
            <div className={styles.panelContentLogin}>
              <h3>Já tem uma conta?</h3>
              <p>Entre por aqui!</p>
              <button className={`${styles.btnLogin} ${styles.btnTransparentLogin}`} onClick={() => setSignUpMode(false)}>
                Entrar
              </button>
              <Link to={'/'}>Voltar</Link>

            </div>
            
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Login;
