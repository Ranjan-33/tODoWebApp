import { MdDeleteSweep } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row rkRow">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            class="btn btn-danger rkbutton"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteSweep />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
