function Todo(props) { //"function component"
    return <li>TODO: {props.item}</li>;
}

function TodoList(props) {
    var list = ['clear desk', 'complete email', 'shopping', 'exercise'];

    return (
        <ul>
            {list.map( //map over all elements in 'list' variable, as "i"
                (i) => <Todo key={i} item={i} />
            )}
        </ul>
    );
}

ReactDOM.render(<TodoList />,
    document.getElementById('outer'));

