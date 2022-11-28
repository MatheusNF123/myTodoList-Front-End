import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import image1 from "../../assets/image1.png"
import { AuthContext } from "../../Context/Auth";
import { validationLogin } from "../../schema/schema";
import * as C from "./Login.styles";

const Login = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  
  // if (auth.authUser) {
  //   return <>{children}</>;
    
  // }

  if (auth.authUser) {
    return <>{<Navigate to={'/home'} replace={true}/>}</>;
    
  }

  const handleOnSubmitLogin = async (values) => {
    try {
      await auth.authenticate(values.email, values.password);
      navigate("/home");
    } catch (error) {
      console.log("msg", error.message);
    }
  };

  return (
    <C.Container className="container">
      <C.AreaImg>
        <div>
          <img
            src={image1}
            alt="Imagem da tela de login"
          />
        </div>
      </C.AreaImg>
      <C.AreaForm>
        <h1>Fazer Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleOnSubmitLogin}
          validationSchema={validationLogin}
        >
          <Form className="form">
            <C.DivLoginFormGroup className="login-form-group">
              <Field
                name="email"
                type="email"
                className="form-field"
                placeholder="Email"
              />

              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </C.DivLoginFormGroup>
            <C.DivLoginFormGroup className="login-form-group">
              <Field
                name="password"
                type="password"
                className="form-field"
                placeholder="Password"
              />

              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </C.DivLoginFormGroup>
            <C.DivFormRedefinir>
              <Link to="/signup" className="form-redefinir">Esqueceu a senha?</Link>
            </C.DivFormRedefinir>
            <C.ButtonLogin type="submit" className="button-login">
              Login
            </C.ButtonLogin>
            <span className="form-span-inscrever">Não Tem Uma Conta?</span>{" "}
            <Link className="form-link-inscrever" to="/signup">
              Inscrever-se
            </Link>
          </Form>
        </Formik>
      </C.AreaForm>
    </C.Container>
  );
};
export default Login;
