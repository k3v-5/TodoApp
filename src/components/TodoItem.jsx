import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";
import PropTypes from "prop-types";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-300  ">
            <button
                className={`h-5  w-5 flex-none rounded-full border-2 ${
                    completed
                        ? "flex   items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500"
                        : "inline-block   "
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>

            <p
                className={`grow text-gray-600 dark:text-gray-400 ${
                    completed && "text-gray-300 line-through"
                }`}
            >
                {title}
            </p>
            <button className="flex-none " onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.string,
    updateTodo: PropTypes.func,
    removeTodo: PropTypes.func,
};
export default TodoItem;
