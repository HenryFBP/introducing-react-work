class Warning extends React.Component {
    render() {

        console.log(this.props)

        //prevent rendering if...
        if (!this.props.warn) {
            return null;
        }

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

class Display extends React.Component {

    state = {
        warn: true
    }

    toggle = () => {
        this.setState(function (prevState) {
            return {
                warn: !prevState.warn //invert this property
            }
        })
    }

    render() {
        return (
            <div>
                <button className="button" onClick={this.toggle}>
                    {this.state.warn ? 'Hide' : 'Show'}
                </button>
                <Warning warn={this.state.warn} />
            </div>
        );
    }
}


ReactDOM.render(<Display />,
    document.getElementById('outer'));