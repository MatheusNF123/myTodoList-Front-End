import * as C from "./Modal.styles"


const Modal = ({children,show, setShow, info, title, name}) => {
  

  const handleModal = (e) => {
    if(e.target.id === 'modal') setShow(false)
  }

  return (
    <C.ContainerMoal id="modal" show={show} onClick={handleModal}>
      <C.CardModal>
        
        <div className="divTitle">
          <span>{title}</span>
        </div>
        <div className="divInfo">
          <span>{info} <strong>{name}</strong> ?</span>
          
          </div>
        <C.DivAreaButtonModal>
          <>{children}</>

        </C.DivAreaButtonModal>
        
      </C.CardModal>
    </C.ContainerMoal>
  )
}

export default Modal