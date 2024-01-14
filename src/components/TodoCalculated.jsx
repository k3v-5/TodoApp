import PropTypes from "prop-types";
const TodoCalculated = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 dark:bg-gray-800">
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <button onClick={clearCompleted} className="text-gray-400">
                Clear completed
            </button>
        </section>
    );
};
TodoCalculated.propTypes = {
    computedItemsLeft: PropTypes.int,
    clearCompleted: PropTypes.func,
};

export default TodoCalculated;
