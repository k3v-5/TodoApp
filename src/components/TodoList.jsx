import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, updateTodo, removeTodo }) => {
    return (
        <div className="mt-8 overflow-hidden rounded-t-md bg-white dark:bg-gray-800 [&>article]:p-4">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.string,
    updateTodo: PropTypes.func,
    removeTodo: PropTypes.func,
};

export default TodoList;
