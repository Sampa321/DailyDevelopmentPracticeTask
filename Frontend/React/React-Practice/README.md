# props
 - properties
 - props are the parameter you pass to a functional component.
 - 

 # what is virtual DOM?
 - A lightweighted copy of actual Dom in memory that representation actual DOM
 - actual browser element -> Real Dom
 - React copy in memory -> Virtual DOM

# Key props
 - Unique identifier that help React to track elements in virtual Dom for efficient updates.



# hooks
- hooks are normal javaScript utility functions which provide state and lifecycle methods to functional components.
e.g : UseState, UseEffect


# use state
- usestate is a react hook which is used to create state variable. whenever state variables updates it triggers a re - render

useState() - returns [variable, setter func]
-whenever the setter func will be called it will trigger the re-render

- React uses reconcilation algorithm behind the scene for efficient Dom manipulation



# UseEffect




UseEffect Dependency array
- if no dependency array : UseEffect will run on every render.
- if empty dependecy array : useEffect will run on initial render.
- id dependencies in dependency array : useEffect will run whenever the dependency changes

