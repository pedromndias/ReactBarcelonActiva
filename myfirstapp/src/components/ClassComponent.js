import React, {Component} from "react";

class ClassComponent extends Component {
    // constructor to load the props on the class component:
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>I am a class component</h1>
                <h1>Props variable: { this.props.propsFunctional1 }</h1>
                <h1>Props String: { this.props.propsFunctional2String }</h1>
                <h1>Props Integer: { this.props.propsFunctionalNumber }</h1>
                <h1>Props Object: { this.props.propsFunctionalObject.name }</h1>
            </>
        )
    }
}

export default ClassComponent;