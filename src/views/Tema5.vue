<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 La temática: el hilo argumental
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El guía de turismo desarrolla su profesión alrededor de las ciencias sociales, naturales, protocolos, procedimientos y técnicas relacionadas con atención a clientes, entre muchos más.  Dentro de las técnicas relevantes del ejercicio del guía, está la de redactar y narrar sobre temáticas que usará en los recorridos. 
          br
          br
          |Para lograrlo, eficaz y pertinentemente, se debe recurrir a los principios de escritura y tenerlos en cuenta. Es una estrategia de suma importancia para llegar a la meta de encantar con cada historia y en cada acción que requiera comunicación.
    p.mb-5(data-aos='fade-right') Profundice, a continuación, en algunos aspectos que enriquecerán su ejercicio como guía de turismo, relativos a las temáticas y el hilo argumental de las mismas:
    .row.justify-content-center.mb-5
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Las temáticas y sus enfoques ")
            p.mb-0 Las temáticas que un guía de turismo suele manejar, están relacionadas con la historia, la geografía, biología, antropología, saberes que se convierten en narración y que, por su carácter, deben transmitirse con un orden lógico, acorde, además, a la ruta; requieren no sólo coherencia y cohesión sino, también, deben motivar interés con lo que se dice y con cómo se dice.
          div(titulo="Ilación ")
            p.mb-0 El hilo conductor asegura que las narraciones tengan coherencia y cohesión necesarias para sostener, por parte del guía, un discurso fluido y motivador, además de claro y sencillo.  El hilo conductor en escritura y verbalización es invisible, asegura las conexiones entre las diferentes partes ya sea de un texto o historia narrada.  El hilo conductor permite darle sentido al discurso o texto. 
          div(titulo="Planeación del texto (o discurso) ")
            p.mb-0 Como paso previo, planear el texto es fundamental.  Ello evita cambios bruscos que dificultan la falta de atención en el lector o en el participante.  Como elemento transversal se requiere: un plan de texto y un primer borrador con la introducción, desarrollo y conclusiones.
          div(titulo="Desarrollo del plan de texto ")
            p.mb-0 Selección del tema, propósito y estructura del texto, a desarrollar. Escribir ideas de posibles párrafos en serie y que muestren relación entre sí, además de dar al lector comprensión del tema y de los argumentos.  La organización de párrafos e ideas es sistemática y la ilación en las secciones, o entre ellas, ayuda, -al leer la estructura, - a pensar cómo se conectarán las partes entre ellas.
      .col-lg-5: img(src='@/assets/curso/temas/tema5/2.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5: img(src='@/assets/curso/temas/tema5/3.svg', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Transiciones entre párrafos ")
            p.mb-0 Con el texto escrito, hacer lectura y evaluar la lógica entre las secciones; así como su relación con la tesis que formuló en la introducción. Los conectores lógicos son una estrategia para conectar las ideas y/o mostrar relación entre ellas.
          div(titulo=" Los párrafos")
            p.mb-0 Hay que asegurar que las oraciones finales de cada párrafo, sea de conclusión y anuncien el tema que desarrollará en el párrafo siguiente.  Verificar que están las oraciones introductorias al inicio de cada párrafo.  Sirven para anunciar concretamente el propósito del párrafo que se va a desarrollar y contribuyen a la construcción del hilo conductor, aportan claridad al lector sobre la idea principal que se va a desarrollar en ese párrafo específico.  Usar preguntas retóricas, es una manera de atraer atención del lector, introducir conceptos y exponer temas.
          div(titulo="Transversalidad ")
            p.mb-0 Verificar que el texto sea consistente, coherente y cohesivo de forma transversal:  se recomienda revisar #[b todo el texto] e identificar las ideas revisando que allí está lo que se quiere plantear.  Hacer una lectura general en voz alta y reconocer qué ajustes deben hacerse.
    .row.justify-content-center.my-5
      .col-lg-11
        .tarjeta-importante.position-relative.p-4(style='background-color: #ffe6a1')(data-aos='zoom-in-up')
          .img-importante.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/2.png', alt='' style='width: 399px')
          .row.justify-content-center.align-items-center
            .col-lg-3
              div(style='widht: 399px; height: 150px').d-none.d-lg-block
            .col-auto: img(src='@/assets/curso/temas/tema2/atencion.svg', alt='')
            .col-lg-6
              h5 ¡Atención!
              p Finalmente, ayude a concretar el texto o las narraciones con preguntas como: ¿Qué pasó? ¿Dónde pasó? ¿Cuándo pasó? ¿Cómo pasó? ¿A quién le pasó?, agregue datos de cómo fue visual o auditivamente, vincule otros datos importantes y personas que se relacionen.  La innovación y la creatividad no tienen limite, úselas.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">

.bloque-texto-g__img
  left: auto
  right: 0
.bloque-texto-g
  justify-content: flex-start
</style>
