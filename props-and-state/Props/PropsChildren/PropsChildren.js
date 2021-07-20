const RedText = (props) => { //es6 arrow notation...
    return <div className="red">
        {props.children} {/* all of the child components of this element */}
    </div>
}

const GreenText = (props) => {
    return <div className="green">
        {props.children}
    </div>
}

ReactDOM.render(<RedText>Hello</RedText>,//one child in RedText
    document.getElementById('outer1'));

ReactDOM.render(
    (<GreenText>
        Some more nested elements:
        <span>
            <u>here</u>
            &amp;
            <span><b><i>here</i></b></span>
        </span>
    </GreenText>),
    document.getElementById('outer2'));


ReactDOM.render(
    (<GreenText>
        Even more nested elements:
        <span>
            <div>Look,</div>
            <div>I'm in a
                <RedText>div!</RedText>
            </div>
        </span>
    </GreenText>),
    document.getElementById('outer3'));


