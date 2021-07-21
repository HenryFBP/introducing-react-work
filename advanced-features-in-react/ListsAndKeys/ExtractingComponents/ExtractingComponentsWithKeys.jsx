class Name extends React.Component {
    render() {
        return (
            // You DON'T want to do this. the 'key' attribute here should be associated with a higher level component. In "NamesList", we specify a "key" attribute explicitly.
            // <li key={this.props.id}>{this.props.name.toUpperCase()}</li>

            <li>{this.props.name.toUpperCase()}</li>
        );
    }
}

class NamesList extends React.Component {
    render() {
        var listItems = Object.keys(this.props.names).map(
            (key, idx) => <Name key={key} name={names[key]} />
            // rule of thumb for specifying keys for components:
            // any time you have a map function that you use to display the elements in a list,
            // whatever component you render within a map function should have a "key" attr associated with it
        )

        return (
            <ul className="names"> {listItems} </ul>
        )
    }
}

// more realistic key-value structure,
// imagine the key (id{n}) is a UUID or smth
const names = {
    'id1': 'Esther',
    'id2': 'Lily',
    'id3': 'Candace',
    'id4': 'Edward',
    'id5': 'Sidney'
};

ReactDOM.render(<NamesList names={names} />,
    document.getElementById('react-lists-1'));