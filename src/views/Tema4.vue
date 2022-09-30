<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de descripción
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema4/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Las técnicas de descripción se utilizan para brindar información sobre un objeto o temática específica. Generalmente, cuentan con dos características principales: lenguaje técnico y datos específicos; con lo cual la información bien obtenida y fidedigna se convierte en el aspecto de mayor importancia, a la hora de realizar las técnicas de descripción apropiadas, para cada ocasión.
        div(style='background-color: #ffe4b9').p-4
          p.mb-0 La descripción es una forma de representar personas, objetos o historias, usando el lenguaje de manera creativa y con elementos que permitan enriquecer el discurso. El objetivo es que la descripción se aproxime lo más que pueda a la realidad, es decir que quien describe debe provocar en la mente del receptor una imagen que luego este pueda reconstruir mentalmente.
    br.d-none.d-lg-block.d-xl-none
    .row.justify-content-center.my-5(data-aos="zoom-in")
      .col-lg-12
        .tarjeta-importante.position-relative.p-4(style='background-color: #e2e8e0')(data-aos='zoom-in-up')
          .img-importante2.d-none.d-lg-block: img(src='@/assets/curso/temas/tema4/13.png', alt='' )
          .row.justify-content-center.align-items-center
            .col-lg-8
              h5 Importante
              p.mb-0 Adicionalmente se está generando toda una cultura hacia la formalización de uno de los sectores más importantes del país (el turismo), por su generación de empleos, divisas y beneficios para las comunidades.
            .col-lg-3
              div(style='widht: 399px; height: 150px').d-none.d-lg-block
    p.mb-5(data-aos='fade-right') Lea atentamente las clases de descripción existentes, según sus elementos, y comprenda sus particularidades. Se las mostramos en el siguiente listado:
    .row.justify-content-center.mb-5
      .col-lg-5.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Topografía: ")
            p.mb-0 Descripción de un lugar o paisaje, un espacio físico real o imaginario.
            
          div(titulo="Cronografía: ")
            p.mb-0 Descripción de una época histórica, un tiempo o momento determinado. 
            
          div(titulo="Prosopografía: ")
            p.mb-0 Descripción de los rasgos físicos de una persona o de un animal. Se centra en su figura corporal y la ropa. 
            
          div(titulo="Etopeya: ")
            p.mb-0 Descripción de las costumbres, las virtudes, los talentos, los defectos y las cualidades morales o psicológicas de las personas. 
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Retrato:  ")
            p.mb-0 Es la suma de la prosopografía y la etopeya. Incluye cualidades físicas, morales e intelectuales. 
            
          div(titulo="Autorretrato: ")
            p.mb-0 El autor se describe a sí mismo. 
            
          div(titulo="Paralelismo: ")
            p.mb-0 Es la descripción consecutiva o mezclada a fin de establecer una comparación y construir semejanzas y diferencias. 
            
          div(titulo="Caricatura: ")
            p.mb-0 Deforma la descripción con una intención irónica y humorística.
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/3.png', alt='')
    p.mb-5(data-aos='fade-right') Otros aspectos de suma importancia, que usted debe conocer, relativos a la descripción, son:
    TabsA.color-primario.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta(titulo="Descripción objetiva" style='background-color: #e2e8e0 ').p-4
        h4 Descripción objetiva
        p En esta se describe la realidad con claridad y exactitud, se explican conceptos, definiciones técnicas, términos científicos de manera precisa y sin aumentar o distorsionar la información.  
      .tarjeta(titulo="Descripción subjetiva" style='background-color: #e2e8e0 ').p-4
        h4 Descripción subjetiva
        p Es una forma de dar a conocer un fenómeno, muchas veces desde la interpretación del emisor, o también desde la opinión, sentimientos y sensaciones que este tiene frente a la realidad que describe. 
      .tarjeta(titulo="Uso de elementos retóricos" style='background-color: #e2e8e0 ').p-4
        h4 Uso de elementos retóricos
        p Se puede hacer uso de elementos retóricos, como la comparación y la metáfora, para dar una idea más clara al receptor. 
      .tarjeta(titulo="Aspectos de descripción" style='background-color: #e2e8e0 ').p-4
        h4 Aspectos de descripción
        p Observar con detalle, determinar elementos que caracterizan lo que se observa y escribir las expresiones precisas, adecuando a la idea justa del objeto, persona o situación.
      .tarjeta(titulo="Reproducción sensorial" style='background-color: #e2e8e0 ').p-4
        h4 Reproducción sensorial
        p Al describir se representa o intenta reproducir, no sólo lo observado sino también lo que perciben los sentidos: escucha, tacto, olfato, gusto.  La descripción es uno de los procedimientos literarios más usados y suele combinarse con diálogos y narración, entre otros. 
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Descripción de fenómenos, lugares, personas y objetos
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para hacer una descripción con calidad técnica, se releva la importancia de los aspectos respecto a:  fenómenos, lugares objetos y cosas. La descripción, junto con la narración, y en relación con la expresión verbal, son dos prácticas que el guía de turismo deberá apropiar, para el desarrollo de su profesión.
    p.mb-5(data-aos='fade-right') Profundice en los elementos clave de la descripción que se muestran a continuación:
    .tarjeta.bg-slyder.p-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-lg-5
            h4 Fenómenos
            p La observación del fenómeno es fundamental para poder describirlo. Para realizar esta descripción se deben poner en juego los sentidos. Es clave que el emisor pueda contar detalles como características físicas, color, forma, texturas, olores, sabores; una vez se trabaja con las sensaciones, ya se puede entrar a explicar la causalidad del fenómeno. 
          .col-lg-7: img(src='@/assets/curso/temas/tema4/5.jpg', alt='')
        .row
          .col-lg-5
            h4 Lugares
            p Para describir un lugar es preciso usar varios elementos
            ul.lista-ul--color
              li
                i.fas.fa-circle.fa-xs
                | Topografía: se habla de las características del paisaje, las condiciones del espacio físico (si es un lugar natural, si es una montaña o desierto, nevado, meseta…). Se habla también de factores como temperatura, tiempo, clima, la pendiente, tipo de superficie, la geología.
              li
                i.fas.fa-circle.fa-xs
                | Cronografía: origen o historia y evolución del lugar; los acontecimientos históricos que han marcado el desarrollo del contexto.
          .col-lg-7: img(src='@/assets/curso/temas/tema4/6.jpg', alt='')
        .row
          .col-lg-5
            h4 Personas
            p Para describir personas es posible utilizar diferentes métodos, el más básico es hacer una descripción física, la cual puede irse alimentando con cualidades o características de comportamiento, morales e intelectuales. Rasgos que marquen diferencias (simetría), o ademanes que identifiquen a las personas. Se pueden usar comparaciones o construir una imagen con semejanzas y diferencias, se parece a, o es de la misma estatura de, entre otros.  
          .col-lg-7: img(src='@/assets/curso/temas/tema4/7.jpg', alt='')
        .row
          .col-lg-5
            h4 Objetos
            p Los objetos se describen por tamaño, color, textura, olor, consistencia, y se pueden clasificar o vincular a fenómenos o situaciones, según lo que se quiera expresar. 
          .col-lg-7: img(src='@/assets/curso/temas/tema4/8.jpg', alt='')
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  4.2 Técnica de aprendizaje por fragmentación
    p.mb-5(data-aos='fade-right') La fragmentación es dividir o atomizar la información en pequeñas unidades, con sentido lógico, y conectarlas entre sí para crear un concepto más amplio.  Si, por ejemplo, se desea abordar el tema de la historia del turismo, este se puede fragmentar, dada su extensión, de la siguiente manera:
    img(data-aos="zoom-in")(src='@/assets/curso/temas/tema4/9.svg', alt='').mb-5
    .margin-n.bg-1.px-5(data-aos="zoom-in")
      .tarjeta.bg-white.box-shadow.p-5.mb-5
        p.mb-5(data-aos='fade-right') Cada fase de la fragmentación realizada, será susceptible a nuevas fragmentaciones; lo cual podría ayudar en la organización y seguridad de la información que se pretende ofrecer a los usuarios.
          br
          br
          |En este punto, visualice cómo fragmentar, por ejemplo, el tema de la Prehistoria, en la historia del turismo:
        img(src='@/assets/curso/temas/tema4/10.svg', alt='').mb-5
        .row.justify-content-center.my-5
          .col-lg-12
            .tarjeta-importante.position-relative.p-4(style='background-color: #e2e8e0')(data-aos='zoom-in-up')
              .img-importante.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/2.png', alt='' )
              
              .row.justify-content-center.align-items-center
                .col-lg-3
                  div(style='widht: 399px; height: 150px').d-none.d-lg-block
                .col-lg-8
                  h5 ¡Importante!
                  p.mb-0 La fragmentación, según los ejemplos vistos, debería iniciar con la descripción del concepto principal, para luego ir enlazando con los conceptos o elementos complementarios, secundarios o desencadenantes. En otras palabras, es como pensar en las piezas de un rompecabezas que están separadas y luego se van uniendo para construir una sola imagen. 
        .bg-arboles.margin-n.p-5.mb-5
          .row.justify-content-center.mb-5
            .col-lg-8(data-aos="fade-right")
              p La técnica de fragmentar suele ser muy útil para:
              ul.lista-ul--color
                li
                  i.vineta
                  | La construcción de guiones.
                li
                  i.vineta
                  | Hacer más comprensible la información.
                li
                  i.vineta
                  | Generar actividades que involucren conceptos separados.
                li
                  i.vineta
                  | Generar dinámicas en las cuales pueda darse una mejor comprensión de las temáticas a desarrollar en los recorridos.
                li
                  i.vineta
                  | Favorecer espacios de participación de los participantes de un recorrido.
                li
                  i.vineta
                  | Dividir ideas en pequeños fragmentos y luego unirlas, y así formar un fragmento superior.
            .col-lg-4(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/11.png', alt='')
          .row.justify-content-center.mb-5
            .col-lg-10
              .tarjeta.gradiente.p-3.mb-5(data-aos="zoom-in")
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-2
                    img(src="@/assets/curso/temas/tema4/12.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Fragmentación
                        p.text-small Refuerce el concepto de aprendizaje por fragmentación, analizando el ejemplo contenido en el siguiente documento.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo_3.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
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
.img-importante
  position: absolute
  bottom: 0
  left: 0
  transform: translateX(-6%) translateY(5%)
  img
    width: 70% !important
</style>
