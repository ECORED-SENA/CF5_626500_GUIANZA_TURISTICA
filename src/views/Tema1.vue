<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Descripción del destino
    .row.justify-content-center.mb-5(data-aos='zoom-in-up')
      .col-lg-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/1.jpg', alt='')
      .col-lg-7(data-aos='fade-right') 
        p.mb-3 Un destino turístico, es una parte del territorio, que cuenta con una cantidad de atractivos turísticos de gran belleza, que generan interés de ser visitados por turistas de diferentes lugares y por razones diversas, como: recreación, uso del tiempo libre, desarrollo de actividades físicas, culturales o sociales, que satisfagan las necesidades de los turistas.
          br
          br
          | El destino turístico, no está determinado únicamente por el estado de sus atractivos, sino por sus valores asociados, tales como:
        ul.lista-ul--color
          li.mb-0
            i.vineta
            | El talento humano.
          li.mb-0
            i.vineta
            | Las empresas prestadoras de servicios turísticos.
          li.mb-0
            i.vineta
            | Los hoteles, restaurantes, bares, museos, entre otros.
          li.mb-0
            i.vineta
            | Los servicios de soporte a la actividad turística.
          li.mb-0
            i.vineta
            | Servicios públicos, infraestructura, accesibilidad.
    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta-importante.position-relative.p-4(style='background-color: #ffe6a1')(data-aos='zoom-in-up')
          .img-importante.d-none.d-xl-block: img(src='@/assets/curso/temas/tema1/2.png', alt='')
          
          .row.justify-content-center.align-items-center
            .col-lg-3.d-none.d-xl-block
              div(style='widht: 399px; height: 150px').d-none.d-lg-block
            .col-lg-6
              h5 ¡Importante!
              p Todo lo anterior se conjuga para que el destino se constituya en un “destino turístico” competitivo y sostenible.
            .col-auto: img(src='@/assets/curso/temas/tema1/3.svg', alt='')
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Destino turístico: concepto y elementos
    .row.justify-content-center.align-items-center.mb-5
      .col-auto: img(src='@/assets/curso/temas/tema1/4.svg', alt='')
      .col-lg-10(data-aos='fade-right')
        .bloque-texto-d.color-gris.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left

            h4.text-regular Según la Organización Mundial del Turismo, (2007) 
            p  “un destino turístico local es un espacio físico en el que un visitante pasa, al menos, una noche. Incluye productos turísticos, tales como servicios de apoyo, atractivos y recursos turísticos a una distancia, que permite ir y volver en un día…”.
            i.fas.fa-quote-right
    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-texto-c.color-primario.p-4(style='background-color: #ffeccd')
          i.fas.fa-quote-right
          h4.mb-2.fw-normal “…Tiene unos límites físicos y administrativos que definen su gestión, imágenes y percepciones que determinan su competitividad en el mercado. Los destinos locales incorporan a diversos grupos, entre los que se cuenta a menudo la comunidad anfitriona, y pueden establecer lazos y redes entre sí para construir destinos mayores”.
          span (Organización Mundial del Turismo, 2007)
      .col-lg-6(data-aos='zoom-in'): img(src='@/assets/curso/temas/tema1/5.jpg', alt='')
    .bg-1.margin-n.p-5(data-aos='zoom-in-up')
      .tarjeta.bg-white.box-shadow.p-5.mb-5
        p.mb-5(data-aos='fade-right') Para considerarse como tal, los elementos con los que debe contar un destino turístico son:
        .row.justify-content-center.mb-5
          .col-lg-10
            .bg-arboles.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/6.svg', alt='Texto que describa la imagen')
        p.mb-5(data-aos='fade-right') Analice los elementos que configuran a un sitio como Destino Turístico, los cuales se enuncian a continuación:
        .tarjeta.bg-slyder.p-5.mb-5(data-aos='zoom-in-up')
          SlyderA(tipo='b')
            .row
              .col-md-5.mb-4.mb-md-0
                h4 Atractivos turísticos
                p Considerados la materia prima del turismo. Algunas investigaciones afirman que, para la presentación de proyectos, los atractivos turísticos son: los lugares capaces de generar desplazamientos turísticos y son el componente principal del producto turístico.
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/7.jpg', alt='Texto que describa la imagen')
            .row
              .col-md-5.mb-4.mb-md-0
                h4 La infraestructura
                p Conjunto de todos los servicios, que complementan la Planta Turística y dentro de los cuales se pueden mencionar: el transporte, seguridad, sanidad, condiciones de acceso, servicios públicos, entre otros.
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/8.jpg', alt='Texto que describa la imagen')
            .row
              .col-md-5.mb-4.mb-md-0
                h4 Servicios turísticos de apoyo
                p Permiten atender y satisfacer las necesidades de los turistas. De ellos surgen los núcleos receptores constituidos por el equipamiento e instalaciones (alojamientos, alimentación, sitios de esparcimiento, agencias de viajes, traslados, rentas de autos, circuitos turísticos, excursiones, información, guías turísticos), que demandan los turistas.
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/9.jpg', alt='Texto que describa la imagen')
            .row
              .col-md-5.mb-4.mb-md-0
                h4 Capital humano del sector turístico
                p Son las personas capacitadas y formadas para hacer de la actividad turística un recurso productivo y de utilidad. Tienen habilidades y competencias que hacen sentir bienvenidos a los turistas y visitantes. Hacen parte de la cadena de valor del turismo.
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/10.jpg', alt='Texto que describa la imagen')
            .row
              .col-md-5.mb-4.mb-md-0
                h4 Planificación turística del territorio
                p Se basa en los Planes de Desarrollo Territorial (POT), que reflejan lo que la comunidad dentro de ese territorio desea y necesita. Su objetivo principal es direccionar de manera estratégica los procesos turísticos de un territorio.  
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/11.jpg', alt='Texto que describa la imagen')
            .row
              .col-md-5.mb-4.mb-md-0
                h4 La gestión de los destinos
                p Se vincula directamente con la planificación, debido a que una vez que se determina por parte de la comunidad, si el territorio tiene las potencialidades turísticas necesarias para ser un destino turístico, se desarrolla toda una gestión que involucra: Investigación de mercado, diseño de producto, comercialización, prestación de servicios de turismo, promoción de la inversión.
              .col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/12.jpg', alt='Texto que describa la imagen')
        p.mb-5(data-aos='fade-right') La gestión de los destinos implica el desarrollo de toda una gestión, que involucra procesos como:
        LineaTiempoF.color-primario
          .row(:icono="require('@/assets/curso/temas/tema1/d1.svg')").align-items-center.g-0
            .col-lg-4.mb-4.mb-lg-0
              .linea-titulo.p-1
                h4 Investigación de mercado
            .col-lg-8
              div.contenido-marco(style='background-color: #FFB22A').p-4
                p.mb-0 En ella se determina si el destino es apto, o no, para ser turístico de acuerdo con el mercado existente para el mismo.
              
          .row(:icono="require('@/assets/curso/temas/tema1/d2.svg')").align-items-center.g-0
            .col-lg-4.mb-4.mb-lg-0
              .linea-titulo.p-1
                h4 Diseño del producto
            .col-lg-8
              div.contenido-marco(style='background-color: #FFB22A').p-4
                p.mb-0 En él se tienen en cuenta aspectos como la producción del servicio o Servucción, logística y desplazamiento de turistas, vías de acceso, entre otros.
          .row(:icono="require('@/assets/curso/temas/tema1/d3.svg')").align-items-center.g-0
            .col-lg-4.mb-4.mb-lg-0
              .linea-titulo.p-1
                h4 Promoción y comercialización
            .col-lg-8
              div.contenido-marco(style='background-color: #FFB22A').p-4
                p.mb-0 Para estructurar un plan de mercadeo que permita, al destino, dar a conocer sus atractivos y facilidades turísticas, venderse a sus posibles clientes.
          .row(:icono="require('@/assets/curso/temas/tema1/d4.svg')").align-items-center.g-0
            .col-lg-4.mb-4.mb-lg-0
              .linea-titulo.p-1
                h4 Prestación de servicios turísticos
            .col-lg-8
              div.contenido-marco(style='background-color: #FFB22A').p-4
                p.mb-0 En él se evalúa el nivel de los prestadores de servicios turísticos (hoteles, restaurantes, guías, transportadores, entre otros) para saber si existen en número suficiente y con la calidad que requiere el destino, acatando las normas existentes para cada Prestador de servicios turísticos (PST).
          .row(:icono="require('@/assets/curso/temas/tema1/d5.svg')").align-items-center.g-0
            .col-lg-4.mb-4.mb-lg-0
              .linea-titulo.p-1
                h4 Promoción de la inversión
            .col-lg-8
              div.contenido-marco(style='background-color: #FFB22A').p-4
                p.mb-0 Propende por el diseño de estrategias para atraer la inversión a su territorio, propiciando la formulación de proyectos, portafolios de inversión, planes de contacto con inversionistas y alianzas público-privadas que, hacia el futuro, mantengan y consoliden el destino turístico.
        .row.justify-content-center.my-5
          .col-lg-11
            .tarjeta-importante.position-relative.p-4(style='background-color: #ffe6a1')(data-aos='zoom-in-up').mb-5
              .img-importante.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/2.png', alt='' style='width: 399px')
              
              .row.justify-content-center.align-items-center
                .col-lg-3
                  div(style='widht: 399px; height: 150px').d-none.d-lg-block
                .col-lg-6
                  h5 ¡Importante!
                  p Un destino turístico está siempre condicionado por un entorno geográfico, al igual que factores políticos, administrativos, económicos, culturales, ambientales y sociales.
                .col-auto: img(src='@/assets/curso/temas/tema1/14.svg', alt='')
    Separador.my-5
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Sistema turístico
    div(style='background-color: #d9edf8')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          .p-5 
            p El turismo es un fenómeno humano que debe ser visto desde una visión sistémica, dada la amplia variedad de impactos y alcances que genera la actividad turística y los actores que participan en su cadena de valor. Así, para la comprensión del amplio sistema turístico, se ha de dar relevancia e incluir a todos los ámbitos en los que se desarrolla el turismo, integrando los ámbitos social, cultural, económico, político, institucional, privado, público y educativo.
        .col-6: img(src='@/assets/curso/temas/tema1/15.png', alt='')
    p.mb-5(data-aos='fade-right') El siguiente recurso le muestra algunas conceptualizaciones, que han aportado a la teoría de los sistemas y su aplicación al turismo:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/f3WSkP2SUp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos='fade-right') La siguiente tabla le ampliará algunos conceptos del sistema turístico. Asimile cada concepto y procure llevar registro de lo más importante en su libreta personal de apuntes:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1
      span Conceptos del Sistema Turístico
    .tabla-b.color-acento-contenido.mb-5
      table
        tr(style='border-top: 5px solid #eb6f2d')
          th(style='background-color: #e8e8e8') 
            h4.mb-0 CONCEPTO
          td
            h5.mb-0 DEFINICIÓN
        tr
          th(style='background-color: #e8e8e8').text-center  Oferta y demanda
          td La demanda turística es el número de personas que viajan o desean viajar para utilizar instalaciones turísticas y servicios lejos de sus lugares de trabajo o residencia.
            br
            br
            |La oferta turística está compuesta por bienes y servicios que ofrece un destino y generan atracción hacia los turistas, logrando satisfacer sus necesidades y expectativas.
        tr
          th(style='background-color: #e8e8e8').text-center  Atractivos
          td Todos aquellos bienes y servicios que por intermedio de la actividad del hombre y de los medios con que cuenta, hacen posible la actividad turística y satisfacen las actividades de la demanda. Un recurso turístico constituye la existencia de un conjunto potencial (conocido o desconocido) de los bienes materiales o inmateriales a disposición del hombre y que pueden utilizarse mediante un proceso de transformación que hacen posible la actividad turística y satisfacen las necesidades de la demanda.
        tr
          th(style='background-color: #e8e8e8').text-center Comunidad receptora
          td Grupo de personas de una localidad que recibe a los turistas.
        tr
          th(style='background-color: #e8e8e8').text-center  Servicios Turísticos
          td Es una base económica viable para edificar y sostener una empresa en el sector, siempre que dicho producto o servicio encuentre mercados y sea fuente de rentabilidad a un determinado nivel de precios.
        tr
          th(style='background-color: #e8e8e8').text-center Infraestructura 
          td Conjunto de obras y servicios básicos que son de gran importancia para el funcionamiento del turismo de un país.
        tr
          th(style='background-color: #e8e8e8').text-center Superestructura 
          td Organismos públicos y privados que, de manera directa o indirecta, coordinan todo lo necesario para que el turismo se dé con éxito.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Potencial turístico
    .bg-arboles.p-3
      .row.justify-content-center.mb-5
        .col-lg-7(data-aos='fade-right')
          p La valoración de los recursos, en los destinos, busca su eventual ampliación y desarrollo turístico, así como determinar las actividades turísticas a ofertar. Para ello, es pertinente evaluar minuciosamente y elaborar un inventario turístico con la información más relevante de esos recursos. Estas son las razones por las cuales es importante identificar el potencial de un destino turístico.
            br
            br
            |Tenga en cuenta los siguientes aspectos del proceso de identificación del potencial de un destino turístico:
          ul.lista-ul--color
            li
              i.vineta
              | Para elaborar el inventario turístico, se identifican los atractivos y actividades turísticas vigentes o futuras de los recursos naturales.
            li
              i.vineta
              | Para identificar el potencial de un destino turístico se tienen en cuenta varios factores fundamentales como:  
              li.ms-5
                .lista-ol--cuadro__vineta
                  span 1
                | El patrimonio cultural (material e inmaterial).

              li.ms-5
                .lista-ol--cuadro__vineta
                  span 2
                | Las características del territorio, la economía local, los centros urbanos y zonas rurales.

              li.ms-5
                .lista-ol--cuadro__vineta
                  span 3
                | Los servicios de toda índole (turísticos, de salud, seguridad), los sitios de culto, infraestructura, el recurso humano.
              li.ms-5
                .lista-ol--cuadro__vineta
                  span 4
                | El análisis del mercado y de la competencia.
              li.ms-5
                .lista-ol--cuadro__vineta
                  span 5
                | La voluntad política y la percepción de las comunidades.
            li
              i.vineta
              | En suma, el potencial de un destino turístico está determinado por la oferta de servicios locales y la demanda, que suple los requerimientos de visitantes y turistas.
        .col-lg-5.col-8(data-aos='fade-left'): img(src='@/assets/curso/temas/tema1/16.png', alt='')
    
          



</template>

<script>
import LineaTiempoF from '@/components/LineaTiempoF.vue'
export default {
  name: 'Tema1',
  components: {
    LineaTiempoF,
  },
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
.bloque-texto-d.color-gris
  border-top: 1px solid #406834
  &:before
    background-color: #e2e8e0
.linea-titulo
  border-bottom: 2px dotted #406834
.contenido-marco
  border: 2px solid #406834
  border-spacing: 500px 500px
  border-collapse: separate
</style>
