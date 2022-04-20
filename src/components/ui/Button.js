

function Button(props) {
  return (
    <button className= {`btn btn-${props.color || 'primary'} shadow-none`} onClick = {() => props.onClick()}>
      {props.children}
    </button>
  )
}

export default Button