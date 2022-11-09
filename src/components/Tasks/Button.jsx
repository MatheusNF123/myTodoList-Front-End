

const Button = ({estilo, func, children, disable}) => {
  return (
    <>
    {!disable
    ?  <button className={estilo} onClick={func}>{children}</button>
    : <button className={estilo} onClick={func}>{children}</button>}
   </>
  )
}

export default Button