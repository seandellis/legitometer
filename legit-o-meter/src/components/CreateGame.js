import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      collection_id: undefined,
      user_id: undefined,
    }
  }

  createNewGame(e) {
    e.preventDefault();
    const game = {
      name: this.name.value,
      // collection_id: ,
      // user_id: ,
    }
    console.log(game);
    //  this.props.addGame(game);
  }
  render() {
    return (
      <div>
        <Header />
        <form ref={(input) => this.gameForm = input} onSubmit={(e) => this.createNewGame(e)}>
          <p>collection name here, from CollectionItem component</p>
          <input ref={(input) => this.name = input} type="text" placeholder="Enter name of new game"></input>
          <button type="submit"><Link to='/'>Save Game</Link></button>
        </form>
      </div>
    )
  }
}

export default CreateGame;
