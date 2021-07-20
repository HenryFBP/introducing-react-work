class Circle extends React.Component {

    constructor(props) {
        super(props);

        this.state = { // makes this a stateful Circle component
            color: 'green',
            backgroundColor: 'pink'
        };
    }

    render() {

        const style = { //use current state to render Circle
            color: this.state.color,
            backgroundColor: this.state.backgroundColor
        }

        return (
            <div className='circle' style={style}>
                Hello React devs!
            </div>
        );
    }

}

ReactDOM.render(<Circle />, document.getElementById('react-state')); 