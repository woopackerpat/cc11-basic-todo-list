import PageItem from "./PageItem"

function PageList() {
  return (
    <ul className="pagination mb-0 pagination-sm ">
        <PageItem disable = {true}> <i className="fa-solid fa-angle-left small"/></PageItem>
        <PageItem active = {true}> 1</PageItem>
        <PageItem > 2</PageItem>
        <PageItem > 3</PageItem>
        <PageItem ><i className="fa-solid fa-angle-right small"/></PageItem>
    </ul>
  )
}

export default PageList