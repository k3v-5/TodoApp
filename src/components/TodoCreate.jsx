import { useState } from "react";
import PropTypes from "prop-types";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");
    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return setTitle("");
        }
        createTodo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5  rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo.."
                className="w-full border-none text-gray-500 outline-none dark:bg-gray-800 dark:text-gray-300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
        </form>
    );
};

TodoCreate.propTypes = {
    createTodo: PropTypes.string,
};

export default TodoCreate;
