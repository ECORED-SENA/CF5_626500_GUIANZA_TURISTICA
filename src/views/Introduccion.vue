<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Usted se encuentra en el componente 05, Caracterización del destino. Le damos la bienvenida a esta experiencia de aprendizaje. Para comenzar, explore el recurso que hay preparado para usted. ¡Adelante!
    figure(data-aos='zoom-in')
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Izujyb3NjdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
