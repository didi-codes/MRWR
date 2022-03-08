import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  // When we make a class we are creating a new class inside of javascript that has one method assigned to it. React class component expects many other methods attached to it. We borrow these methods from React.Component. We extend to React.Component because it allows us to pull in built-in functionality into our class (subclassing or borrowing functionality into our app class)
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));

// JS file loaded by browser
// App component gets created
// We call geolocation service

// We get result of geolocation
// Tell the component to rerender itself with this new information

/*Rules of Class Components
1. Must be a javascript class
2. Must extend (subclass) React.Component
3. Must define a 'render' method that returns some amount JSX
*/

/* Rules of State
*/
