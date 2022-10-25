import {
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonCheckbox,
  IonIcon,
} from "@ionic/react";
import "./Login.scss";
import Remotely from "../assets/img/undraw_remotely.svg";
import { logoFacebook, logoGoogle } from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AUTHENTICATION } from "../services";

const Login: React.FC = () => {
  const [errMsg, setErrMsg] = useState(false);
  const [username, setUsername] = useState("");
  const [host, setHost] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let res = AUTHENTICATION(host, "odoo15", username, password);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="content-left">
          <img src={Remotely} alt="Co-Working Img" />
        </div>
        <div className="content-right">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Đăng nhập</h2>
            {errMsg && errMsg === true && <p>Tài khoản hoặc mật khẩu sai!</p>}
            <IonItem className="form-input">
              <IonLabel position="floating">Host</IonLabel>
              <IonInput
                required
                type="text"
                onIonChange={(e: any) => setHost(e.target.value)}
                value={host}
              />
            </IonItem>
            <IonItem className="form-input">
              <IonLabel position="floating">Tài khoản</IonLabel>
              <IonInput
                required
                type="text"
                onIonChange={(e: any) => setUsername(e.target.value)}
                value={username}
              />
            </IonItem>
            <IonItem className="form-input">
              <IonLabel position="floating">Mật khẩu</IonLabel>
              <IonInput
                required
                type="password"
                value={password}
                onIonChange={(e: any) => setPassword(e.target.value)}
              />
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
