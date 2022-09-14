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
    .bg-slyder.p-5.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-4.mb-4.mb-md-0
            h4 Armonización entre economía y sociocultura 
            p El propósito de incluir la sostenibilidad en las actividades del turismo es parte de la estrategia que el sector propone, en el cual busca una armonización entre los objetivos de desarrollo económico y sociocultural, hacer más competitivo al país en materia de turismo y lograr un posicionamiento junto con una imagen positiva. 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/16.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h4 Planes de desarrollo turístico
            p En cuanto a las regulaciones obligatorias en el turismo, cabe decir que todos los requisitos legales aplicables relativos a la contratación, la declaración y registro de actividades, como uso del suelo, generación y manejo de residuos, también se incluyen en los documentos de planificación como Planes de Desarrollo Turístico. 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/17.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h4 Medición del desempeño turístico
            p Las Certificaciones internacionales y nacionales permiten medir cualitativa y cuantitativamente el desempeño del turismo a través de sus prácticas de operación, generando una conciencia colectiva sobre el uso y disposición de los recursos en los destinos turísticos, en bien de las comunidades, con el fin de asegurar su sustento futuro.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/18.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h4 Certificación del turismo y apertura de mercados
            p El modelo de desarrollo sostenible es una tendencia global, por ello los mercados son sensibles al desempeño de la industria turística en cada país o región, es por esto por lo que cuando los destinos o los prestadores de servicios turísticos se certifican voluntariamente, esto les permite abrirse a nuevos mercados y aumentar su competitividad al demostrar su responsabilidad con el entorno natural y sociocultural. 
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/19.png', alt='Texto que describa la imagen')
        .row
          .col-md-4.mb-4.mb-md-0
            h4 Colombia y las normas de sostenibilidad
            p Para el caso de Colombia, algunos prestadores de servicios turísticos como los alojamientos o agencias de viajes, establecimientos gastronómicos, playas, destinos, transportes terrestres, los organizadores de congreso y convenciones, así como las empresas de tiempo compartido, deben cumplir con la NTS Sostenibilidad, las cuales hacen parte del proceso de calidad y desarrollo sostenible que implementa en la actualidad el Ministerio de Comercio Industria y Turismo.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/20.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Le presentamos un listado de normas que usted puede consultar y conocer, para fortalecer su formación en guianza turística:
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta(style='background-color: #ffe6a1').p-5
          SlyderA.editado.px-5
            div
              .d-flex.align-items-center.mb-3
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 001-1 Destinos Turísticos - áreas turísticas de Colombia. Requisitos de sostenibilidad. 2014
              .d-flex.align-items-center.mb-3
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 001-2 Playas Turísticas. Requisitos de Sostenibilidad

              .d-flex.align-items-center.mb-3
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 002 Establecimientos de alojamiento y Hospedaje (EAH) Requisitos de sostenibilidad. 2014

              .d-flex.align-items-center.mb-3
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 003 Agencias de Viajes. Requisitos de sostenibilidad. 2018

              .d-flex.align-items-center
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 004 Establecimientos Gastronómicos y Bares. Requisitos de sostenibilidad. 2008.
            div
              .d-flex.align-items-center.mb-3
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 005 Empresas de transporte terrestre automotor especializado, empresas operadoras de chivas y otros vehículos automotores que presten servicios turísticos. Requisitos de sostenibilidad, 2009.
              .d-flex.align-items-center.mb-3
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 006-1 Sistema de Gestión de Sostenibilidad. Organizadores profesionales de congresos, Ferias y Convenciones 2012.
              .d-flex.align-items-center.mb-3
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 006-2 Sedes para eventos de congresos, ferias y convenciones. Requisitos de sostenibilidad, 2012.
              .d-flex.align-items-center.mb-3
                img.me-4(src='@/assets/curso/temas/tema2/21.svg', alt='Texto que describa la imagen' style='width: 45px')
                p.mb-0 NTS-TS 007 Empresas comercializadoras de esquemas de tiempo compartido y multipropiedad. Requisitos de sostenibilidad, 2012.
      .col-lg-4: img(src='@/assets/curso/temas/tema2/22.png', alt='')
    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta-importante.position-relative.p-4(style='background-color: #ffe6a1')(data-aos='zoom-in-up')
          .img-importante.d-none.d-lg-block: img(src='@/assets/curso/temas/tema1/2.png', alt='' style='width: 399px')
          
          .row.justify-content-center.align-items-center
            .col-lg-3
              div(style='widht: 399px; height: 150px').d-none.d-lg-block
            .col-auto: img(src='@/assets/curso/temas/tema2/atencion.svg', alt='')
            .col-lg-6
              h5 ¡Atención!
              p Las certificaciones de sostenibilidad en Colombia han permitido actualizar el Registro Nacional de Turismo. Los prestadores de servicios turísticos deben cumplir con los parámetros establecidos en cada norma, para garantizar un mejoramiento en el sector y permitir que un crecimiento positivo para el país.
    br.d-none.d-lg-block
    .row.justify-content-center.my-5
      .col-lg-12
        .tarjeta-importante.position-relative.p-4(style='background-color: #e2e8e0')(data-aos='zoom-in-up')
          .img-importante2.d-none.d-lg-block: img(src='@/assets/curso/temas/tema2/23.png', alt='' style='width: 399px')
          
          .row.justify-content-center.align-items-center
            .col-lg-8
              h5 Importante
              p.mb-0 Adicionalmente se está generando toda una cultura hacia la formalización de uno de los sectores más importantes del país (el turismo), por su generación de empleos, divisas y beneficios para las comunidades.
            .col-lg-3
              div(style='widht: 399px; height: 150px').d-none.d-lg-block
    p.mb-5(data-aos='fade-right') Las certificaciones internacionales marcaron el inicio y antecedente de las certificaciones en Colombia, se han caracterizado por ser voluntarias, es decir que los prestadores de servicios turísticos se han ido sometiendo a estas evaluaciones, porque desean ser un punto de inflexión, a la hora de hablar de sostenibilidad.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.gradiente.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema2/6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Sostenibilidad en el mundo.
                  p.text-small Para conocer un poco más sobre algunos tipos de certificaciones internacionales de sostenibilidad en el mundo.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

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
.editado
  .slyder-a__bullets
    bottom: -24px
  .slyder-a__btn--sigt
    right: -24px
  .slyder-a__btn--atrs
    left: -24px
</style>
