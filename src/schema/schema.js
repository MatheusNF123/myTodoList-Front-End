import * as yup from "yup"

export const validationRegister = yup.object().shape({
  username: yup.string().min(2, "Username deve ter 2 caracteres no mínimo").required("Este campo é obrigatório"),
  email: yup.string().email("Não e um email valido").required("Este campo é obrigatório"),
  password: yup.string().min(6, "A senha deve ter 6 caracteres no mínimo").required("Este campo é obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref("password"),null], "As senhas não são iguais")
})

export const validationLogin = yup.object().shape({
  email: yup.string().email("Não e um email valido").required("Este campo é obrigatório"),
  password: yup.string().min(6, "A senha deve ter 6 caracteres").required("Este campo é obrigatório"),
})

export const validateNameTask = yup.object().shape({
  name: yup.string().min(1, "Digite o nome da tarefa").test('Only Empty?', 'Não pode ser apenas espaços vazios', (value) => {

    const isValid = value?.split(' ').join('').length !== 0;

    return isValid;
  }).required("Digite o nome da tarefa")
})
export const validateNameFolder = yup.object().shape({
  name: yup.string().min(1, "Digite o nome da pasta").required("Digite o nome da pasta")
})