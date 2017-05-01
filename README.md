This is a quick example of how to use a global event bus to your advantage with vue-geb.

# Why ?
I use a global event bus mainly to split my UI interaction and my application state.

## Advantages 
You can easily plug and play any UI lib using its own event bus.

You wont have to Add any binding or actions to your components.

Moreover you can use it with or without app state libraries.



# Let's talk about code now :)

Demo

Instead of binding the modal to a parent component (vanilla vue way), thanks to the global event bus it can be easily used anywhere and called from anywhere.

2 implementation possibilities are shown:

Simplest way to use vue-geb.
Using Vuex action.

The main goal of vue-geb is to make it as easy as possible to trigger Ui action.

You can call it from anywhere and emit event whenever you want :)

Enjoy !
