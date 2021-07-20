const NAMES = ['Alice', //index 0, by the way...
    'Bob', 'Charles', 'Darwin', 'Emily', 'Fiona', 'Garrett'];

function Names(props) {
    let namesElementList = [];

    for (let i = 1; i <= props.upto; i++) {
        namesElementList.push(props.children(i, NAMES))
        //execute props.children as a function, passing in index and list of names
    }

    return <div>{namesElementList}</div>;
}

function NamesList(props) {
    return (
        <Names upto={props.upto}>
            {/* pass a function to <Names> element that makes a <div> */}
            {(index, names) => <div key={index}>
                {names[index]} {/* display name inside a div elt */}
            </div>}
        </Names>
    );
}

ReactDOM.render(<NamesList upto={4} />,
    document.getElementById('outer'));