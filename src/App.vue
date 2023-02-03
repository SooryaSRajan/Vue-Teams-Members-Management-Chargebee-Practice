<template>
  <div id="root">
    <HomeView></HomeView>
  </div>
</template>

<script lang="ts">

import {Prop} from 'vue-property-decorator';
import {Options, Vue} from 'vue-class-component';
import HomeView from './views/HomeView.vue';

@Options({
  components: {
    HomeView,
  },
})
export default class App extends Vue {
  @Prop() private msg!: string;

  inputData = 'Hello World';

  updateInputData($event: { target: { value: string } }): void {
    this.inputData = $event.target.value;
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#root{
  width: 100vw;
  height: 100vh;
}

*{
  box-sizing: border-box;
}

body{
  margin: 0;
  padding: 0;
  background-color: #f0ecf4;
}

</style>
