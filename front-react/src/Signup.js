import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="body">
      <div className="logo">MY PAGE</div>
      <form method="post">
        <div className="id">
          <input className="id-input" placeholder="아이디" />
        </div>
        <div>
          <input placeholder="비밀번호" />
        </div>
        <div>
          <input placeholder="비밀번호 재확인" />
        </div>
        <div>
          <input placeholder="이름" />
        </div>
        <div>
          <input placeholder="이메일" />
        </div>
        <div>
          <input className="login-btn" type="submit" value="회원가입" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
