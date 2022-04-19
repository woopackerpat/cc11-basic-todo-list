

function Button(props) {
  return (
    <button className= {`btn btn-${props.color || 'primary'} shadow-none`}>
      {props.children}
    </button>
  )
}

export default Button