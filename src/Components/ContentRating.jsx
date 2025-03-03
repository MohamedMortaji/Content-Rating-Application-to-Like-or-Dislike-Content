
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor(props) {
    super(props);
    this.state = {likes: 0, 
    dislikes: 0,
    totalratings: 0,
    handleLike: () => {
        this.setState((prevState) => ({
            likes: prevState.likes +1,
            totalratings: prevState.totalratings +1
        }))
    },
    handledisLike: () => {
        this.setState((prevState) => ({
            dislikes: prevState.dislikes +1,
            totalratings: prevState.totalratings +1
        }))
    }
  }
}
  render() {
    return (
     <div className= "content-rating">
        <p>
            How do you feel about white cake?
        </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>like ({this.state.likes})</button>
            <button className='dislike-button' onClick={this.state.handledisLike}>dislike ({this.state.dislikes})</button>
            <p>Total Ratings: {this.state.totalratings}</p>
        </div>
     </div>
    );
  }
}

export default ContentRating;
