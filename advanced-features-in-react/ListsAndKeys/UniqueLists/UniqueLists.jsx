class NamesList extends React.Component {
    render() {
        var listItems = this.props.names.map(
            (name, idx) => <li key={idx}>{name.toUpperCase()}</li>
            // using `idx` fixes the key issue so each <li> element has a unique key
            // however, using `idx` is not a perfect solution...
            // and, the key should be associated with a higher-level component. 

            //note that the key is internal to react and doesn't render in HTML.

            //DO NOT use indexes as keys.
        );

        return (
            <ul className="names"> {listItems} </ul>
        )
    }
}

const names = 'Esther Lily Jack Candace Candace Edward Sidney Henry Henry'.split(' ');

ReactDOM.render(<NamesList names={names} />,
    document.getElementById('react-lists'));