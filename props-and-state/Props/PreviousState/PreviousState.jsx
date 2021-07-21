class Counter extends React.Component {

    state = {
        count: 0
    };

    incrementCount = () => {
        this.setState(//pass a function to setState that takes previous state and props to update the state...
            (prevState, props) => ({
                count: prevState.count + props.increment
            })
        );
    }

    render() {

        //start a timer that runs `incrementCount()` every 1.5 sec
        setTimeout(this.incrementCount, 1500)

        return (
            <div>
                <div className='circle'>
                    {this.state.count}
                </div>
            </div>
        );
    }

}

ReactDOM.render(<Counter increment={2} />,
    document.getElementById('previous-state'));