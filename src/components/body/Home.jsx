import { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    console.log("map state to props", state);
    return {
        a: state.dishes,
        sample: state.sample
    }
}

class Home extends Component {
    componentDidMount(){
        console.log("Home State: ", this.state);
        console.log("Home Props: ", this.props);
    }
    render(){
        document.title = "Home";
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(mapStateToProps) (Home);