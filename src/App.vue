<template>
  <div id="app">
    <div class="columns is-flex-mobile">
      <div class="column is-half is-offset-one-quarter">
    <div class="box">
    <div class="content">
      <h1>Vue-geb usage demo</h1>
      <p>This is an example of how to use a global event bus to your advantage. We are using <a href="http://bulma.io/">Bulma</a> for the UI style.</p>
      <p>Checkout this example's repository and the vue-geb global event vue plugin used here.</p>
    </div>
    <Hello/>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
  .box {
    margin-top: 1em;
  }
</style>
