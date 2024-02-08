import { useState, useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState(""); usestate method not is use now as useref  introduces

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are :${noOfUpdates.current} `);
  // };   as usef ref in being used

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on ${dueDate}`);
    dueDateElement.current.value = "";
    todoNameElement.current.value = "";
    onNewItem(todoName, dueDate);
    // setDueDate(" ");
    // setTodoName(" "); as useref is used
  };
  return (
    <div className="container text-center">
      <form className="row rkRow" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            // value={todoName}
            placeholder="Enter to do here "
            // onChange={handleNameChange} due to useref
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange} due to useref
          />
        </div>
        <div class="col-2">
          <button type="submit" className="btn btn-success rkbutton">
            <MdLibraryAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
