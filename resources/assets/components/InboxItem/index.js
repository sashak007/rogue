import React from 'react';
import { map } from 'lodash';
import { calculateAge } from '../../helpers';

import Tags from '../Tags';

class InboxItem extends React.Component {
  constructor () {
    super();
    this.state = {
      status: 'pending',
    };
    this.onAcceptClick = this.onAcceptClick.bind(this);
  }

  onAcceptClick() {
    this.setState({
      status: 'accepted',
    });
  }

  displayImage(photo_url) {
    if (photo_url == "default") {
      return "https://pics.onsizzle.com/bork-2411135.png";
    }
    else {
      return photo_url;
    }
  }

  render() {
    const post = this.props.details;

    return (
      <div className="container__row">
        <div className="container__block -half">
          <img src={this.displayImage(post['url'])}/>
        </div>
        <div className="container__block -half">
          <h2>{post['user']['first_name']} {post['user']['last_name']}, {calculateAge(post['user']['birthdate'])}</h2>
          <p><em>{post['user']['email']}</em></p>
          <p><em>{post['user']['mobile']}</em></p>
          <p><strong>Quantity: </strong> {post['signup']['quantity']}</p>
          <h4>Photo Caption</h4>
          <p>{post['caption']}</p>
          <h4>Why Statement</h4>
          <p>{post['signup']['why_participated']}</p>
          <ul>
            <li><button className="button" onClick={this.onAcceptClick}>Accepted</button></li>
            <li><button className="button -secondary">Rejected</button></li>
            <li><button className="button -tertiary">Delete</button></li>
          </ul>
          {this.state.status === 'accepted' ? <Tags /> : null}
          <h4>Meta</h4>
          <p>
            Post ID: {post['postable_id']} <br/>
            Source: {post['source']} <br/>
            Submitted: {post['created_at']} <br/>
          </p>
        </div>
      </div>
    )
  }
}

export default InboxItem;
