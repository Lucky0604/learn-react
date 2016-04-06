# props and state

## *props*  
props are a way of passing data from parent to child.
props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned.  

A Component cannot change its props, but it is responsible for putting together the props of its child Components.

## *state*
The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It's a serializable* representation of one point in time—a snapshot.  

A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.  

## common ground

* both are plain Js objects
* changes trigger a **render update**  
* both are deterministic. If components generates different outputs for the same combination of props and state, then there has something wrong.  

## difference
* `state` couldn't be changed by parent component.
* `props` couldn't be changed inside component.
* `state` couldn't be changed in child component.

## Links
[Questions about props & state](https://groups.google.com/forum/#!topic/reactjs/hAldztPzQgI)  
[Thinking in React: Identify where your state should live](http://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live)
