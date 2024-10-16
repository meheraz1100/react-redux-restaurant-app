import { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { Button, CardColumns, Modal, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}


class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }
    // const [dishes] = useState(DISHES);
    // const [selectedDish, setSelectedDish] = useState(null);
    onSelectDish = (dish) => {
        this.setState({
            selectedDish: dish,
            modalOpen: true
        })
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,

        })
    }

    render(){
        document.title = "Menu"
        const menu = this.props.dishes.map((dish) => {
            // console.log(dish);
            return <MenuItem dish={dish} onSelectDish={this.onSelectDish} key={dish.id} />
        });
    
        const dishDetail = this.state.selectedDish ? <DishDetail dish={this.state.selectedDish} /> : <h1>Select a dish to View Details</h1> ;
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        {dishDetail}
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
};

export default connect(mapStateToProps) (Menu);