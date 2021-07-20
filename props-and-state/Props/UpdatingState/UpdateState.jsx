class DetailsBox extends React.Component {
    state = {
        name: 'John',
        color: 'green',
        backgroundColor: 'pink',
        subject: 'Psychology'
    };

    //using arrow notation automatically binds `pickRandomName` to `this`...
    //use arrow notation if you wish to bind a function to the class instance 
    pickRandomName = () => {
        var names = [
            'Alice',
            'Bob',
            'Carol',
            'Dora',
            'Elisa'
        ];

        var nameidx = Math.floor(Math.random() * names.length);

        // this is a special function that MUST be used to update state.
        // it ensures the component re-renders normally.
        this.setState({
            name: names[nameidx]
            //only pass name as we only want to update the name.
        }); //react will merge this field with the original 'state' object. 
        // React merges partial state changes.
    }

    pickRandomColor = () => {
        var colors = [
            'blue',
            'magenta',
            'lavender',
            'violet',
            'red'
        ];

        var colorIdx = Math.floor(Math.random() * colors.length);

        this.setState({
            color: colors[colorIdx]
        });
    }

    pickRandomBackgroundColor = () => {
        var colors = [
            'lime',
            'skyblue',
            'orange',
            'yellow',
            'purple'
        ];

        var colorIdx = Math.floor(Math.random() * colors.length);

        this.setState({
            backgroundColor: colors[colorIdx]
        });
    }

    pickRandomSubject = () => {
        var subjects = [
            'Math',
            'Science',
            'Biochem',
            'Physics',
            'Psychology',
            'History'
        ];

        var subjectIdx = Math.floor(Math.random() * subjects.length);

        this.setState({
            subject: subjects[subjectIdx]
        });
    }

    render(){
        const style={
            color:this.state.color,
            backgroundColor:this.state.backgroundColor
        };

        return (
            <div>
                <div className="details" style={style}>
                    Name: {this.state.name}<br/>
                    Subject: {this.state.subject}
                </div>
                <button className="button" onClick={this.pickRandomName}>
                    Change Student Name
                </button>
                <button className="button" onClick={this.pickRandomColor}>
                    Change Text Color
                </button>
                <button className="button" onClick={this.pickRandomBackgroundColor}>
                    Change Background Color
                </button>
                <button className="button" onClick={this.pickRandomSubject}>
                    Change Subject
                </button>
            </div>
        );
    }
}

ReactDOM.render(<DetailsBox/>,document.getElementById('react-update-state'))