import { ErrorMessage, Field, Formik, Form } from "formik"
import { Link, useNavigate } from "react-router-dom"
import registerRequest from "../../services/user/register"
import * as C from "./Signup.styles"
import {validationRegister} from "../../schema/schema"
import image2 from "../../assets/image2.jpg"
import { useContext, useState } from "react"
import Message from "../../components/Message/Message"
import { AuthContext } from "../../Context/Auth"

const SignUp = ()=> {
  const auth = useContext(AuthContext);
  const [registerComSucesso, setRegisterComSucesso] = useState(true)
  const navigate = useNavigate();

  const handleOnSubmitRegister = async (values, actions) => {  
    // try {      
    //   const {status, data} = await registerRequest(values.username, values.email, values.password)
    //   if(status !== 200) {
    //     setRegisterComSucesso(false)
    //     actions.resetForm()
    //     setMessage(false)
    //         setTimeout(() => setRegisterComSucesso(true), 1000);
    //         setTimeout(() => navigate("/login"), 2000);
    //       }else{        
    //         setMessage(true)
    //       }
    // } catch (error) {
    //   alert('Erro inesperado! Tente novamente mais tarde.')
    // }  
     
    const {err, data} = await auth.authenticate({username: values.username, email: values.email, password: values.password}, registerRequest);
    if(err){
      return actions.setErrors({email: data.message}); 
    }       
            setRegisterComSucesso(false)
                  setTimeout(() => {
                    setRegisterComSucesso(true)
                    navigate("/home");
                  }, 1000);
           
          
      return
  
  }


return(
  <C.Container className="container">
    <Message registerComSucesso={registerComSucesso}/>
    <C.AreaImg>
    <div>
          <img
            src={image2}
            alt="Imagem da tela de login"
          />
        </div>
    </C.AreaImg>
    <C.AreaForm>
  <h1>Fazer Cadastro</h1>
  <Formik 
  initialValues={{
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }}
  onSubmit={handleOnSubmitRegister}
  validationSchema={validationRegister}>
    
      <Form className="form-register">
      <C.DivRegisterFormGroup >
          <Field name="username" type="text" className="form-field" placeholder="Username"/>

          <ErrorMessage  component="span"
          name="username"
          className="form-error"/>
        </C.DivRegisterFormGroup>

        <C.DivRegisterFormGroup>
          <Field name="email" type="email" className="form-field" placeholder="Email"/>

          <ErrorMessage component="span"
          name="email"
          className="form-error"
          />
       
        </C.DivRegisterFormGroup>
        <C.DivRegisterFormGroup >
          <Field name="password" type="password" className="form-field" placeholder="Senha"/>

          <ErrorMessage component="span"
          name="password"
          className="form-error"/>
        </C.DivRegisterFormGroup>
        <C.DivRegisterFormGroup >
          <Field name="confirmPassword" type="password" className="form-field" placeholder="Confirme sua senha"/>

          <ErrorMessage component="span"
          name="confirmPassword"
          className="form-error"/>
        </C.DivRegisterFormGroup>
       
        <C.ButtonCadastro type="submit" className="button-login">Cadastrar</C.ButtonCadastro>
        <span className="form-span-register">Já Tem Uma Conta?</span> <Link className="form-link-register" to="/login">Fazer Login</Link>
      </Form>
    </Formik>
    </C.AreaForm>
  </C.Container>
)
}

export default SignUp