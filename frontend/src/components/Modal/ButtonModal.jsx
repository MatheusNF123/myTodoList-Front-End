import * as C from "./ButtonModal.styles"

const ButtonModal = ({name, handleBtn}) => {
  return (
    <>
    <C.btnModal onClick={handleBtn}>{name}</C.btnModal>
    </>

  )
}

export default ButtonModal