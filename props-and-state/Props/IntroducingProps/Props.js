class Greeting extends React.Component {
    render() {
        return (
            <div className='prop-class'>
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Greeting message="Hello React devs!" />,
    document.getElementById('react-prop1')
);