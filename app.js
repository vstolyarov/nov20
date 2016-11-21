class RobotBox extends React.Component {
  render() {
    return <div>
      <h1>
      Welcome!
      </h1>
      <p>
        This is paragraph
      </p>
        <ul>
          <li>
          one
        </li>
          <li>
          two
        </li>
          <li>
          three
        </li>
          <li>
          four
          </li>
        </ul>
        </div>;
  }
}

let target = document.getElementById('app');

ReactDOM.render( <RobotBox/>, target );
