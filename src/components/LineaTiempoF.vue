<template lang="pug">
.linea-tiempo-e
  .linea-tiempo-e__item(
    v-for="(item, index) in elements"
    :key="'linea-tiempo-e-key-'+item.id"
  )
    .linea-tiempo-e__item__header(v-if="item.icono")
      img(:src="item.icono")
    .linea-tiempo-e__item__body(v-child="item.elm")

  .hidden-slot
    slot

</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins.js'
export default {
  name: 'LineaTiempoF',
  mixins: [componentSlotMixins],
}
</script>

<style lang="sass">
.linea-tiempo-e__item__header
  img
    width: 107px
    height: auto
    margin: auto
</style>
