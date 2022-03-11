import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay'
class App extends React.Component {
  /*Initial construction of the App
  constructor(props) {
    // Belongs to Javascript language, in a javascript class the constuctor function is the first function that is going to be called anytime an instance of this class is created
    super(props);
    this.state = { lat: null, errorMessage: '' };
  }*/
  
  // Refactoring the App behind the hood this has created a constructor through babel
  state = {lat: null, errorMessage: ''};
  // When we make a class we are creating a new class inside of javascript that has one method assigned to it. React class component expects many other methods attached to it. We borrow these methods from React.Component. We extend to React.Component because it allows us to pull in built-in functionality into our class (subclassing or borrowing functionality into our app class)
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // This is our callback
      (position) => this.setState({ lat: position.coords.latitude }),
        // to update our state object we called setState, setState is a function that gets put on our app component when we extended the React.Component
      (err) =>this.setState({ errorMessage: err.message })
    );
  }
  render() {
    // React says we have to define render!!
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat) {
      // Taking a property from the state and passing it as a prop component into the season display (we can take state and pass it down as props to another component)
      return <SeasonsDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));

/* App Lifecycle
1. JS file loaded by browser
2. Instance of App component gets created
App components 'constructor' function gets called (Not required to define the constructor function we can optionally define it if we want to do something when our component is first created, if you want to define the constructor function you must call the super function if not we are met with an error) 
3. State object is created and assigned to the 'this.state' property
4. We call geolocation service
5. We get result of geolocation
6. React calls the components render method
7. App returns JSX, gets rendered to page as HTML
8. We get result of geolocation!
Tell the component to rerender itself with this new information
*\

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

/* Component Lifecycle
Is a function we can optionally define inside of our class based components, if we decide to implement these methods they will be called automatically by React at certain moments points during a components lifecycle. Lifecycle - a compnent is created and then show up in the DOM or the screen of our browser, we then would call setState which would cause the component to rerender, in theory at some point in time the component might be removed from the DOM all together or stop show it's content on the screen.
Time: 
1. Constructor (Good place to do one-time setup)
2. Render (Not optional has to be defined unlike the rest) (Avoid doing anything besides returning JSX)
Content visible on screen
3. componentDidMount (Good place to do data-loading)
Sit and wait for update...
4. componentDidUpdate (Good place to do more data-loading when/props change)
Sit and wait until this component is not longer shown
5. componentWillUnmount (Good place to do cleanup, especially for non-React stuff)

Other lifecycle methods (rarely used)
1. shouldComponentUpdate
2. get DerivedStateFromProps
3. getSnapshotBeforeUpdate
*/
