
function RadioButton(props) {
  return (
    <>
        <input type="radio" className='btn-check' name = {props.name} id = {props.id}/>
        <label htmlFor={props.id} className={`btn btn-${props.color || 'outline-primary'} shadow-none`} >
            {props.children}
        </label>
    </>
  )
}

export default RadioButton