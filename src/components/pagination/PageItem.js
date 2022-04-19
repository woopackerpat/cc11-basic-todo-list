
function PageItem(props) {
  return (
    <li className={`page-item mt-2 ${props.active && 'active'} ${props.disable && 'disabled'}`} >
        <button className="page-link shadow-none">{props.children}</button>

    </li>
  )
}

export default PageItem