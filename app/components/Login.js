import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SecurityCheck from "./security-check";

function Login({ adminId, posterId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {!showModal && (
        <LoginForm
          setShowModal={setShowModal}
          adminId={adminId}
          posterId={posterId}
        />
      )}
      {showModal && (
        <SecurityCheck
          adminId={adminId}
          posterId={posterId}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default Login;

// import LoginForm from "./LoginForm";

// function Login() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

// export default Login;
