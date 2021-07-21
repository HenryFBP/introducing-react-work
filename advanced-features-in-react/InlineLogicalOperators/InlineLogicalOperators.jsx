class Warning extends React.Component {
    render() {
        return (
            <div className="comment">
                <span className="photo">
                    <img src="images/bat.jpg" />
                </span>
                <span className="message">
                    Something bad has happened :(
                </span>
            </div>
        );
    }
}


class Ok extends React.Component {
    render() {
        return (
            <div className="comment">
                <span className="photo">
                    <img src="images/cat.jpg" />
                </span>
                <span className="message">
                    All good!
                </span>
            </div>
        );
    }
}

class Display extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                {  //render Warning if "this.props.warning==true" else render Ok
                    (this.props.warning && <Warning />) || (<Ok />)
                }
            </div>
        );
    }
}

ReactDOM.render(<Display warning={true}/>,
    document.getElementById('outer1'));

ReactDOM.render(<Display warning={false}/>,
    document.getElementById('outer2'));