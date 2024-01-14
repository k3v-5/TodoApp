import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoCalculated from "./components/TodoCalculated";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    {
        id: 1,
        title: "Go to the gym",
        completed: true,
    },
    {
        id: 2,
        title: "Go to the Store",
        completed: false,
    },
    {
        id: 3,
        title: "Meditation",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };
    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain  bg-contain bg-top bg-top bg-no-repeat bg-no-repeat  dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] ">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filteredTodos()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
                <TodoCalculated
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className="mt-8 text-center dark:text-gray-300">
                Drag an drop to reorder list
            </footer>
        </div>
    );
};

export default App;
