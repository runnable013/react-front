import React from "react";
import "./Login.css";

const Login = ({ history }) => {
  return (
    <div className="body">
      <div className="logo href-color">MY PAGE</div>
      <form className="login" method="post">
        <div className="id">
          <input className="id-input" type="text" placeholder="id" />
        </div>
        <div className="password">
          <input
            className="password-input"
            type="text"
            placeholder="password"
          />
        </div>
        <div>
          <input
            className="login-btn href-color"
            type="submit"
            value="로그인"
          />
        </div>
      </form>
      <div className="login-under">
        <div className="under-content href-color">아이디 찾기</div>
        <div className="under-content href-color">비밀번호 찾기</div>
        <div className="under-content href-color">회원가입</div>
      </div>
    </div>
  );
};

export default Login;
