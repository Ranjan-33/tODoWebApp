import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ListOfItem from "./components/listOfItem";
import { useState } from "react";

import WelcomeMessage from "./components/welcomeMessage";
// import TodoItem from "./components/TodoItem";
function App() {
  // const initialitems = [
  //   {
  //     name: "Buy milk ",
  //     dueDate: "17/05/2021",
  //   },
  //   {
  //     name: "kill musquitooo ",
  //     dueDate: "17/05/2021",
  //   },
  //   {
  //     name: "learn react ",
  //     dueDate: "1/07/2021",
  //   },
  //   {
  //     name: "learn react reponsive ",
  //     dueDate: "30/10/2021",
  //   },
  // ];

  const [Items, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item Added:${itemName} Date:${itemDueDate}`);
    const newTodoItem = [...Items, { name: itemName, dueDate: itemDueDate }];

    setTodoItems(newTodoItem);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = Items.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted:${todoItemName}`);
  };

  return (
    <center className="todoContainer">
      <AppName />

      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {Items.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ListOfItem items={Items} onDeleteClick={handleDeleteItem}></ListOfItem>
    </center>
  );
}

export default App;
