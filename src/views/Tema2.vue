<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sostenibilidad
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es indiscutible el crecimiento del turismo a nivel mundial; el tiempo ha permitido que sean evidentes los cambios de acuerdo con  la forma en que se manifiesta dicho crecimiento, pasando de un turismo basado en el modelo fordista o de masas, en los años sesenta, a un turismo racional y que se ve superado por las innumerables tipologías que lo componen, debido, entre otras cosas, a la diversidad de motivaciones, destinos turísticos y actividades que en ellos se realizan.
    p.mb-5(data-aos='fade-right') Por lo anterior, se ha puesto de manifiesto el tema del desarrollo turístico sostenible, que busca no solo que exista un progreso de los atractivos y destinos turísticos, satisfaciendo necesidades de turistas y visitantes, sino que:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/2.svg' alt='AvatarTop')
          .tarjeta.w-100(style='background-color: #fff4e3 ')
            .p-4
              p Además, se genere conciencia en todos los actores de la cadena de valor turística.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop')
          .tarjeta.w-100(style='background-color: #fff4e3 ')
            .p-4
              p Tal conciencia generaría las condiciones sociales, económicas y culturales que permitan su desarrollo eficiente, en bien de las comunidades.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/4.svg' alt='AvatarTop')
          .tarjeta.w-100(style='background-color: #fff4e3 ')
            .p-4
              p El concepto de desarrollo sostenible se originó en el año 1972, en una conferencia de las naciones unidas sobre el medio humano. Allí se hizo referencia por primera vez al deterioro ambiental del planeta, como consecuencia de las acciones de las personas.
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4.mb-4(style='background-color: #e2e8e0')
          .row.justify-content-center.aling-items-center
            .col-lg-9
              p.mb-0 El concepto de sostenibilidad fue propuesto en el informe Brundtland.  En este documento se hizo una definición del desarrollo sostenible como: “El desarrollo que satisface las necesidades de la generación presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades” (Asamblea General de las Naciones Unidas, 1987)
            .col-auto: img(src='@/assets/curso/temas/tema2/5.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.gradiente.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Sostenibilidad
                  p.text-small Para ampliar sus conocimientos, en lo relativo a resultados de conferencias, convenciones y cumbres, sobre Sostenibilidad.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    p.mb-5(data-aos='fade-right') Teniendo en cuenta las normativas de sostenibilidad, se afirma que, el turismo sostenible es:
    .bg-montana.margin-n.p-5
      img.mb-5(src='@/assets/curso/temas/tema2/7.svg', alt='')
      .row.justify-content-center.my-5
        .col-lg-10
          .cajon.color-primario.p-4.mb-4(style='background-color: #ffe4b9').mb-5
            .row.justify-content-center.align-items-center
              .col-lg-9
                p.mb-0 #[b Colombia, segundo país en biodiversidad en el mundo, ha comenzado a integrar a sus acciones los Objetivos de Desarrollo sostenible.]
              .col-auto: img(src='@/assets/curso/temas/tema2/8.svg', alt='')
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Impactos del turismo
    p.mb-5(data-aos='fade-right') La actividad turística es un fenómeno que involucra diferentes actores, que afectan directa o indirectamente los contextos en los que se desarrolla la práctica de estas acciones. Como es de suponer, los territorios, las comunidades, los ecosistemas e incluso, los turistas mismos, sufren afectaciones directas de la actividad turística; unas de ellas, en favor y otras en contra.
      br
      br
      |A continuación, y a modo de ejemplo se presentan algunos impactos que se pueden generar como consecuencia de las actividades turísticas, en cualquier territorio del país: 
    .bg-1.margin-n.p-5.mb-5
      .tarjeta.bg-white.box-shadow.p-5.mb-5
        p.mb-5(data-aos='fade-right') Los impactos derivados del turismo surgen como efecto de las actividades propias del sector. No se puede desconocer la relación de causalidad que existe. Por tanto, la gestión y la planificación son claves para hacer un uso óptimo de los recursos, maximizando los impactos positivos y minimizando los impactos negativos. 
          br
          br
          |Las tres dimensiones desde las que se concibe el turismo sostenible, arrojan algunos impactos positivos y negativos que vale tener en cuenta…
        PasosA.color-acento-contenido.mb-5(tipo="n").text-small
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              h3 Dimensión Ambiental
              p.mb-0 Algunos impactos positivos en esta dimensión son: 
              ul.lista-ul--color
                li.mb-0
                  i.vineta
                  | Difusión de conocimiento sobre especies y ecosistemas en donde existen especies de interés.
                li.mb-0
                  i.vineta
                  | Ampliación y consolidación de áreas protegidas. 
                li.mb-0
                  i.vineta
                  | Ampliación de políticas y regulaciones para el manejo de las áreas protegidas.
                li.mb-0
                  i.vineta
                  | Estímulos para conservación de especies endémicas o de interés.
                li.mb-0
                  i.vineta
                  | Desarrollo de sistemas de gestión ambiental para el control de la contaminación.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/9.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/10.png', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3 De otro lado, también en la dimensión ambiental, los impactos negativos que se conocen son:
              ul.lista-ul--color
                li.mb-0
                  i.vineta
                  | Contaminación de fuentes hídricas por incremento en los residuos y contaminación.
                li.mb-0
                  i.vineta
                  | Tráfico ilegal de fauna y flora de los territorios generando detrimento en los ecosistemas.
                li.mb-0
                  i.vineta
                  | Agotamiento de los recursos naturales de los territorios.
                li.mb-0
                  i.vineta
                  | Erosión y compactación de los suelos.
                li.mb-0
                  i.vineta
                  | Contaminación de acuíferos.
                li.mb-0
                  i.vineta
                  | Contaminación atmosférica por aumento en la operación de vuelos y medios de transporte de combustión interna. 
                li.mb-0
                  i.vineta
                  | Fragmentación de ecosistemas
                li.mb-0
                  i.vineta
                  | Extinción de especies endémicas 
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              h3 En el Ámbito Sociocultural, se pueden mencionar beneficios como:
              ul.lista-ul--color
                li.mb-0
                  i.vineta
                  | Promoción del patrimonio material e inmaterial de los territorios.
                li.mb-0
                  i.vineta
                  | Aparición de valores y formas de vida saludable.
                li.mb-0
                  i.vineta
                  | Contribuye en la creación de vínculos entre las turistas y los locales.
                li.mb-0
                  i.vineta
                  | Disminución de problemáticas sociales
                li.mb-0
                  i.vineta
                  | Construcción de iniciativas y proyectos para la promoción de la cultura y la conservación.
                li.mb-0
                  i.vineta
                  | Promoción de una imagen positiva de los territorios.
                li.mb-0
                  i.vineta
                  | Promoción del sentido de apropiación e identidad en la población local.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/11.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/12.png', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3 Impactos negativos: 
              ul.lista-ul--color
                li.mb-0
                  i.vineta
                  | Destrucción del patrimonio cultural.
                li.mb-0
                  i.vineta
                  | Pérdida de valores culturales que se han mantenido intactos en el territorio. 
                li.mb-0
                  i.vineta
                  | Incremento en la inseguridad.
                li.mb-0
                  i.vineta
                  | Aparición de problemáticas psicosociales en los territorios.
                li.mb-0
                  i.vineta
                  | Genera el desplazamiento de la población local.
                li.mb-0
                  i.vineta
                  | Produce gentrificación.
                li.mb-0
                  i.vineta
                  | Delitos de ESCNNA.
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              h3 En la Dimensión Económica, por su parte, los impactos positivos que pueden enunciarse son: 
              ul.lista-ul--color
                li.mb-0
                  i.vineta
                  | Genera empleabilidad y adquisición de recursos económicos en los locales.

                li.mb-0
                  i.vineta
                  | Participación de los locales en procesos de formación.
                li.mb-0
                  i.vineta
                  | Aumento de la competitividad comercial.
                li.mb-0
                  i.vineta
                  | Inversión en infraestructura de los destinos.

                li.mb-0
                  i.vineta
                  | Fomento de las iniciativas productivas locales. 
                li.mb-0
                  i.vineta
                  | Creación de cooperativas y trabajo mancomunado de los locales. 
                li.mb-0
                  i.vineta
                  | Genera ingresos tributarios para el destino turístico.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/13.png', alt='Texto que describa la imagen')
          .row.align-items-center
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema2/14.png', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              h3 Impactos que contrastan con otros de carácter negativo, como:
              ul.lista-ul--color
                li.mb-0
                  i.vineta
                  | Incremento en el costo de vida de los lugares en donde se desarrolla la actividad turística.
                li.mb-0
                  i.vineta
                  | Estacionalidad en el territorio.
                li.mb-0
                  i.vineta
                  | Incrementa el cambio de la economía local diversa a una mono economía.  
                li.mb-0
                  i.vineta
                  | Pérdida de divisas por flujo al extranjero.
                li.mb-0
                  i.vineta
                  | Plusvalía
                li.mb-0
                  i.vineta
                  | Aumento exacerbado en el valor del suelo.
        p.mb-5(data-aos='fade-right') La sostenibilidad es una tendencia global que exige la adaptación a un modelo de gestión. Actualmente, encontramos normas voluntarias que direccionan los criterios de planificación, pero también se tiene una normativa vinculada a la actividad turística.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Normativa turística
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-0 En Colombia se han venido gestando actividades turísticas encaminadas a diferentes tipologías y, sumado a esto, el crecimiento del sector pone al país en la tarea de pensar en el desarrollo de un turismo sostenible. Es así, como se han venido creando políticas de turismo, entre ellas la de sostenibilidad, con el objetivo de incluir criterios ambientales, económicos y de responsabilidad social, en la gestión de las actividades del sector.
          br
          br
          |Dentro de la política de turismo sostenible, se busca conservar el capital natural con procesos de conservación del medio ambiente, al mismo tiempo obtener ingresos, haciendo del turismo una actividad económicamente rentable, que aporte a las comunidades y al mejoramiento de la calidad de vida de las poblaciones.
          br
          br
          |Analice con atención los aspectos que, sobre el turismo sostenible, se muestran a continuación:
      .col-lg-6: img(src='@/assets/curso/temas/tema2/15.jpg', alt='')


</template>

<script>
export default {
  name: 'Tema2',
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
.gradiente
  background: linear-gradient(180deg, rgba(255,214,103,1) 0%, rgba(239,179,26,1) 100%)
.bg-montana
  background-image: url(../assets/curso/temas/tema2/bg-montana.svg)
  background-repeat: no-repeat
  background-position: end
  background-size: 100% 90%
</style>
