import Button from "../ui/Button";

function FilterSearch() {
  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control "
        placeholder="Enter new todo"
      />
      <Button color="dark">
        <i className="fa-solid fa-xmark" />
      </Button>
    </div>
  );
}

export default FilterSearch;
