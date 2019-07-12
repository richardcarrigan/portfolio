'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <h1>React!</h1>
    );
  }
}

const domContainer = document.querySelector('#reactApp');
ReactDOM.render(<LikeButton />, domContainer);
