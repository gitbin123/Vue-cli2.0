<template>
  <div>{{num}}41.21.11212{{index}}</div>
</template>
<script>
export default {
  data () {
    return {
      num: 0,
      index: 'wwwwwwww'
    }
  },
  mounted () {
    this.$store.dispatch('testX/increment').then((result) => {
    }).catch((err) => {
      console.log(err)
    })
  },
  computed: {
    incrementDt () {
      return this.$store.getters['aaa']
    }
  }
}
</script>
<style scoped lang="scss">
$color: red;
div {
  color: $color;
}
</style>
