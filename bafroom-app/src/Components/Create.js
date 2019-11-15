import React, { Component } from "react";

class New extends Component {
constructor(props){
    super(props)
    this.state = {
        location: "",
        description: "",
        image: ""

    }
}
render() {
    return(
        <div>
            <h1>Add a bathroom review</h1>

        </div>
    )
}
}

export default New