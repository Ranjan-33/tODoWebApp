import styles from "./ListOfItem.module.css";
import TodoItem from "./TodoItem";
const ListOfItem = ({ items, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {items.map((items) => (
        <TodoItem
          key={items.name}
          todoName={items.name}
          todoDate={items.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default ListOfItem;
