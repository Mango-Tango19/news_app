import { todoItem } from "../../model"
import SingleItem from "../singleItem/singleItem"


interface Props {
    todos: todoItem[],
    setTodos: React.Dispatch<React.SetStateAction<todoItem[]>>
}

const TodoList : React.FC<Props> = ({todos, setTodos}) => {

    return <div className="list-group">
        { todos.map((todo) => <SingleItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>) }
    </div>

}

export default TodoList