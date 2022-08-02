import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class OldestDishDetail extends Component {
    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        if (dish != null)
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    RenderComments(dish) {
        if (dish!=null){
            const cmt_list = dish.comments.map(cmt=>{
                    return(
                    <div >
                    <li>{cmt.comment}</li><br />
                    <li>-- {cmt.author},{new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:'2-digit' }).format(new Date(Date.parse(cmt.date)))}</li><br />
                    </div>)});
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">                
                        {cmt_list}
                    </ul>
                </div> 
                )
        }
        else{
            return(<div></div>)
        }
    }


    render() {

        return (
            <div className='row'>  
                {this.renderDish(this.props.selectedDish)}    
                <div className="col-12 col-md-5 m-1" >                    
                    {this.RenderComments(this.props.selectedDish)}                
                </div>                  
            </div>
        );
    }

};
 
export default OldestDishDetail;