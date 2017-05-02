<template>
  <div id="app">
    <a href="https://github.com/vouill/vue-geb-example"><img style="position: absolute; top: 0; right: 0; border: 0; z-index: 1000;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
    <div class="columns is-flex-mobile">
      <div class="column is-half is-offset-one-quarter">
    <div class="box">
    <div class="content">
      <h1>Vue-geb usage demo</h1>
      <p>This is an example of how to use a global event bus to your advantage. We are using <a href="http://bulma.io/">Bulma</a> for the UI style.</p>
      <p>Checkout this <a href="https://github.com/vouill/vue-geb-example"> example's repository</a> and the <a href="https://github.com/vouill/vue-geb"> vue-geb</a> global event vue plugin used here.</p>
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
