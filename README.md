This is a quick example of how to use a global event bus to your advantage with [vue-geb](https://github.com/vouill/vue-geb).

# Why ?
I use a global event bus mainly to split my UI interaction and my application state.

## Advantages 
You can easily plug and play any UI lib using its own event bus.

You wont have to Add any binding or actions to your components.

Moreover you can use it with or without app state libraries.



# Let's talk about code now :)

[Demo](https://vouill.github.io/vue-geb-example/)

This [modal](https://github.com/vouill/vue-geb-example/blob/master/src/plugin/components/modal.vue) can be called from anywhere by any means thanks to the [global event bus](https://github.com/vouill/vue-geb).

2 implementation possibilities are shown:

* [Simplest](https://github.com/vouill/vue-geb-example/blob/master/src/components/Hello.vue#L6) way to use vue-geb.
* Using Vuex [action](https://github.com/vouill/vue-geb-example/blob/master/src/store.js#L12).

The main goal of vue-geb is to make it as easy as possible to trigger Ui action.

You can call it from anywhere and emit event whenever you want :)

Enjoy !
