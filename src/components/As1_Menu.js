import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import Comments from "./Comments";


class As1_Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <>
                <div className="row">
                    <div className="col-12 col-md-6">
                    <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Comments/> 
                    </div>
                </div>
               
                </>
               
            );
        } else {
            return (
                <diV></diV>
            );

        }
    }


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>

                        <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );

        });

        
        return (
            <div className="container">
                <div className="row">
                {menu};
                </div>
                <div className="row">
                {this.renderDish(this.state.selectedDish)};
                </div>
            </div>
        );
    }

}


export default As1_Menu;