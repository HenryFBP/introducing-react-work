function Circle(props) {
    const circleStyle = {
        backgroundColor: props.color
    };

    return (
        <div className="circle"
            style={circleStyle}></div>
    );
}

//stateful component with 1 state
class ToggleCircle extends React.Component {
    state = {
        go: true
    }

    toggle = () => {
        this.setState(function (prevState) {
            return {
                go: !prevState.go
            } //inversion of my previous state
        });
    }

    render() {

        if (this.state.go) {
            return (
                <div>
                    <Circle color='green' />
                    <button className="button" onClick={this.toggle}>
                        Stop
                    </button>
                </div>
            );

        }
        return (
            <div>
                <Circle color='red' />
                <button className="button" onClick={this.toggle}>
                    Go
                </button>
            </div>
        );

    }
}

ReactDOM.render(<ToggleCircle />,
    document.getElementById('react-conditional-if'));