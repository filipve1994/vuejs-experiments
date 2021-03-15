<template>

  <!--  <div id="app" style="background: {{ color }};">-->
  <div id="backgroundcolorpicker" v-bind:style="{background: backgroundColor }" class=" p-5">
    <h1 style="font-size: 5rem;">Type a color</h1>
    <input type="text" v-bind:style="{color: backgroundColor }" v-model=backgroundColor debounce="300"/>
  </div>
</template>

<!--https://codepen.io/masonfox/pen/qaBYgW-->
<script>
export default {
  name: "BackgroundColorPicker",
  data() {
    return {
      backgroundColor: '#2196F3'
    };
  },
  // computed: {
  //   backgroundColorStyle() {
  //     return {
  //       background: `${color}`
  //     }
  //   }
  // }
}
</script>

<style scoped lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app, #backgroundcolorpicker {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    padding: 1rem 1rem;
    font-size: 2rem;
    border: 0;
    border-radius: 3px;
    background: #fff;
  }
}

h1 {
  font-family: Open Sans;
  color: #fff;
  font-weight: 300;
}


</style>
