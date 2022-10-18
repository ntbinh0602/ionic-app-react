import { IonGrid, IonPage, IonRow, IonCol, IonItem,IonInput,IonButton, IonLabel, IonCheckbox} from '@ionic/react';
import './Login.scss';
import Remotely from "../assets/img/undraw_remotely.svg"


const Login: React.FC = () => {
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
              <IonLabel position="floating" >Tài khoản</IonLabel>
              <IonInput />
            </IonItem>
            <IonItem className="form-input">
              <IonLabel position="floating" >Mật khẩu</IonLabel>
              <IonInput type="password" />
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Nhớ tài khoản</IonLabel>
              <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>
            <IonButton className="form-button" type="submit" expand="block">
            Đăng nhập ngay
            </IonButton>

            <div className="form-link">
              <a href="">Quên mật khẩu</a>
              <a href="">Chưa có tài khoản?</a>
            </div>
            <div className="form-line">
              <span>Hoặc đăng nhập bằng</span>
            </div>
          </form>
        </div>
        </div>
    </div>
  );
};

export default Login;
