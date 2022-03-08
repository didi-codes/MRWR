import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    // Belongs to Javascript language, in a javascript class the constuctor function is the first function that is going to be called anytime an instance of this class is created
    super(props); 
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // to update our state object we called setState, setState is a function that gets put on our app component when we extended the React.Component
        this.setState({lat: position.coords.latitude });
      },
        (err) => console.log(err)
    );
  }
  // When we make a class we are creating a new class inside of javascript that has one method assigned to it. React class component expects many other methods attached to it. We borrow these methods from React.Component. We extend to React.Component because it allows us to pull in built-in functionality into our class (subclassing or borrowing functionality into our app class)
  render() {
    // React says we have to define render!!
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: {this.state.lat} </div>;
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
1. Only usable with class components
2. You will confuse props with state
3. 'State' is a JS object that contains data relevant to a component
4. Updating 'state' on a component causes the component to (almost) instantly rerender
5. State must be initialized when a component os created
6.State can only be updated using the function 'setState'
*/
