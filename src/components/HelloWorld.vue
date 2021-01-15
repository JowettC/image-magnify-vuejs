<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <ProductZoomer
  :base-images="images"
  :base-zoomer-options="zoomerOptions"
/>
<div>end</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      'images': {
          'normal_size': [
            {
              'id': 1,
              'url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML0bfoxOtyMJjuqDCc_H1iV0XjNXpGcVzow&usqp=CAU'
            },
            {
              'id': 2,
              'url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML0bfoxOtyMJjuqDCc_H1iV0XjNXpGcVzow&usqp=CAU'
            }
          ],
      },
      'zoomerOptions': {
        zoomFactor: 3, // scale for zoomer
        pane: 'pane', // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click:false, // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
