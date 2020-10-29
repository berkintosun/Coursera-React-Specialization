import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }


    renderComments(comments) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (comments !== null) {
            const commentList = comments.map((comment) => {

                let date = new Date(comment.date);
                let dateString = `${monthNames[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {dateString}</p>
                    </li>
                );
            })

            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentList}
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.selectedDish;
        if (dish !== null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-2">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-2">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>

            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export { DishDetail as default };