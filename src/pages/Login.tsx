import { IonItem, IonInput, IonButton, IonLabel, IonCheckbox, IonIcon } from '@ionic/react';
import './Login.scss';
import Remotely from "../assets/img/undraw_remotely.svg"
import Facebook from "../assets/img/icons/logo-facebook.svg"
import Google from "../assets/img/icons/logo-google.svg"
import { logoFacebook, logoGoogle, eye } from 'ionicons/icons';
import { useRef, useState, useEffect } from 'react';


const Login: React.FC = () => {

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    setErrMessage('');

  },[email,password])

  return (
    <div className="container">
      <div className="wrapper">

        <div className="content-left">
          <img src={Remotely} alt="Co-Working Img" />
        </div>
        <div className="content-right">
          <form className="login-form">
            <h2>Đăng nhập</h2>
            <IonItem className="form-input">
              <IonLabel position="floating" >Email</IonLabel>
              <IonInput />
            </IonItem>
            <IonItem className="form-input">
              <IonLabel position="floating" >Mật khẩu</IonLabel>
              <IonInput type="password" />
              {/* <IonIcon icon={eye} /> */}
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Nhớ tài khoản</IonLabel>
              <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>
            <IonButton className="form-button" type="submit" expand="block">
              Đăng nhập ngay
            </IonButton>

            <div className="form-link">
              <a href="#">Quên mật khẩu</a>
              <a href="#">Chưa có tài khoản?</a>
            </div>
            <div className="form-line">
              <span>Hoặc đăng nhập bằng</span>
            </div>
            <div className="form-icon-social">
              <a href="#">
                <IonIcon icon={logoFacebook} />
              </a>
              <a href="">
                <IonIcon icon={logoGoogle} />
              </a>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
