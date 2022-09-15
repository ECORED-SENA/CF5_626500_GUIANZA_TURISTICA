<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Interpretación del patrimonio
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 En el desarrollo de actividades de guionaje, la Interpretación del Patrimonio (IP) es un proceso creativo de comunicación estratégica que persigue conectar intelectual y emocionalmente al visitante con los significados de un recurso o enclave patrimonial, promoviendo actitudes positivas hacia su conservación.
    p.mb-5(data-aos='fade-right') El concepto de Interpretación de Patrimonio, puede resultar amplio y podría decirse, está aún en construcción; por lo que, en la actualidad, varios autores han dado diferentes aportes a la metodología interpretativa:
    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/2.png' alt='AvatarTop')
          .tarjeta(style='background-color: #fff4e1').d-flex.align-items-center
            .p-4
              p Según la Asociación para la Interpretación del Patrimonio (2014), esta acción es “el arte de revelar in situ, el significado del legado, natural o cultural, al público que visita esos lugares en su tiempo libre”.
      .col-lg-6
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/3.png' alt='AvatarTop')
          .tarjeta(style='background-color: #fff4e1').d-flex.align-items-center
            .p-4
              p Finalmente, el concepto de interpretación de Tilden (1957) reconocido como el padre de la interpretación, fue: “la interpretación es una actividad educativa que pretende revelar significados e interrelaciones, a través del uso de objetos originales, por un contacto directo con el recurso o por medios ilustrativos, no limitándose a dar una mera información de los hechos”.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Enfoque y principios
    p.mb-5(data-aos='fade-right') A partir de la construcción conceptual de la Interpretación del Patrimonio (aún desarrollándose), se han reconocido hasta ahora, seis principios básicos para el desarrollo de la interpretación, por lo que, en el ejercicio de la guianza turística, más aún, en lo relativo a la caracterización del destino, esta acción adquiere total relevancia.
      br
      br
      |Tales principios son:
    .row.justify-content-center.mb-5
      .col-lg-6
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Interpretación estéril") Cualquier interpretación que, de alguna forma, no relacione lo que se muestra o describe con algo que se halle en la personalidad o en la experiencia del visitante, será estéril.
          p.text-small(numero="2" titulo="Interpretación es revelación") La información, tal cual, no es interpretación. La interpretación es revelación basada en información, aunque son cosas completamente diferentes. Sin embargo, toda interpretación incluye información.
          p.text-small(numero="3" titulo="El arte de la interpretación") La interpretación es un arte, que combina otras muchas artes, sin importar que los materiales que se presentan sean científicos, históricos o arquitectónicos. Cualquier arte se puede enseñar en cierta forma.
          p.text-small(numero="4" titulo="Interpretar para provocar") El objetivo principal de la interpretación no es la instrucción,sino la provocación. 
          p.text-small(numero="5" titulo="Integralidad en la interpretación") La interpretación debe intentar presentar un todo en lugar de una parte, y debe estar dirigida al ser humano en su conjunto, no a un aspecto concreto.
          p.text-small(numero="6" titulo="La interpretación y sus enfoques") La interpretación dirigida a niños no debe ser dilución de la presentación a las personas adultas, sino que debe seguir un enfoque básicamente diferente. Para obtener el máximo provecho, necesitará un programa específico.
      .col-lg-6: img(src='@/assets/curso/temas/tema3/4.png', alt='')
    p.mb-5(data-aos='fade-right') Para enriquecer el concepto de interpretación, le presentamos los aportes teóricos de Larry Beck y Ted Cable, quienes, con base en los postulados de Tilden, sugieren que la interpretación tiene unos dones, los cuales dan a conocer las características de la misma:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2
      span Los dones de la interpretación 
    .tabla-b.color-acento-contenido.mb-5
      table
        caption Leyenda de la tabla
        tr(style='border-top: 5px solid #eb6f2d')
          th(style='background-color: #e8e8e8') 
            h4.mb-0 Don
          td
            h5.mb-0 Funcionalidad 
        tr
          th(style='background-color: #e8e8e8').text-center  Despertar la chispa
          td Para despertar el interés, los intérpretes deben conseguir que los contenidos de sus mensajes se relacionen con la vida de los visitantes.
        tr
          th(style='background-color: #e8e8e8').text-center  Revelación 
          td El propósito de la interpretación va más allá de la entrega de información, consiste en revelar una verdad y un significado profundos.
        tr
          th(style='background-color: #e8e8e8').text-center Don de las historias 
          td Toda presentación interpretativa –al igual que una obra de arte– se debería diseñar como una historia que informe, entretenga e ilustre.
        tr
          th(style='background-color: #e8e8e8').text-center  Don de la motivación
          td El propósito del mensaje interpretativo es inspirar e impulsar a la gente a ampliar sus horizontes.
        tr
          th(style='background-color: #e8e8e8').text-center Personalizar el pasado 
          td Todo lugar tiene su historia. Las y los intérpretes pueden revivir el pasado para hacer que el presente sea más placentero y que el futuro adquiera un mayor significado.
        tr
          th(style='background-color: #e8e8e8').text-center  Iluminación con nuevas tecnologías
          td Las tecnologías pueden revelar el mundo de maneras nuevas y apasionantes. Sin embargo, la incorporación de estas tecnologías a los programas interpretativos debe realizarse con cuidado y precaución.
        tr
          th(style='background-color: #e8e8e8').text-center  Don del profesionalismo
          td Antes de aplicar diseños en interpretación, los y las intérpretes deben conocer las técnicas básicas de la comunicación. Una interpretación de calidad se fundamenta en las habilidades y en los conocimientos de quien la realiza, atributos que se deben poder desarrollar de forma continua.
        tr
          th(style='background-color: #e8e8e8').text-center Don de las relaciones  
          td Un plan o programa interpretativo debería ser capaz de conseguir apoyo político, financiero, administrativo, de voluntariado–, para lograr ponerlo en marcha.
        tr
          th(style='background-color: #e8e8e8').text-center Don de la belleza 
          td La interpretación debería estimular las capacidades de la gente e infundir un deseo de sentir la belleza de su alrededor, para elevar el espíritu y propiciar la conservación de aquello que es interpretado.
        tr
          th(style='background-color: #e8e8e8').text-center  Don del disfrute
          td Los y las intérpretes deben ser capaces de promover actividades interpretativas óptimas, a través de programas y servicios bien concebidos.
        tr
          th(style='background-color: #e8e8e8').text-center Don de la pasión 
          td La pasión es el ingrediente indispensable para una interpretación poderosa y efectiva: pasión por el rasgo que es interpretado y por aquellos que vienen a inspirarse con él.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2. Etapas del proceso interpretativo
    div(style='background-color: #e2e8e0')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6
          .p-5 
            p Por otra parte, el proceso interpretativo consta de unas etapas, las cuales permiten generar un bosquejo general del proceso mismo. Seguir ordenadamente estas etapas, favorece resultados de interpretación más significativos, acertados y pertinentes.
        .col-6: img(src='@/assets/curso/temas/tema3/5.png', alt='')
    p.mb-5(data-aos='fade-right') Analice la siguiente gráfica e identifique cada etapa del proceso interpretativo con sus respectivos pasos, importancia y necesidad. Procure llevar registro de su análisis en su libreta personal de apuntes:
    .bg-arboles.p-5
      ImagenInfograficaB.color-primario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema3/7.svg', alt='Texto que describa la imagen')
        div(x="46.5%" y="4.3%" tooltip="" numero="+")
          .row.justify-content-center.mb-5
            .col-lg-7
              h4 Identificar el lugar
              p  (Descubrimiento de la esencia del lugar). Se busca que se conozcan las características generales del lugar, la infraestructura, el estado en que se encuentra el patrimonio.
            .col-lg-5: img(src='@/assets/curso/temas/tema3/6.svg', alt='')
        div(x="78.5%" y="19%" tooltip="" numero="+")
          .row.justify-content-center.mb-5
            .col-lg-7
              h4 Tipo de patrimonio por interpretar
              p (Cultural, natural o mixto). Varía de acuerdo a los intereses del intérprete.
            .col-lg-5: img(src='@/assets/curso/temas/tema3/8.svg', alt='')
        div(x="86.%" y="51%" tooltip="" numero="+")
          .row.justify-content-center.mb-5
            .col-lg-7
              h4 Selección de temática
              p (Investigar documentos relacionados sobre tema que se va a desarrollar en lugar):  dentro del mismo espacio se pueden encontrar diferentes temas que pueden llegar a ser abordados en un proceso interpretativo.
            .col-lg-5: img(src='@/assets/curso/temas/tema3/9.svg', alt='')
        div(x="79.5%" y="82.7%" tooltip="" numero="+")
          .row.justify-content-center.mb-5
            .col-lg-7
              h4 Identificar una audiencia
              p Seleccionar una población que se encuentre interesada en visitar el lugar, para comenzar a diseñar técnicas y recursos para emplear en la interpretación.
            .col-lg-5: img(src='@/assets/curso/temas/tema3/10.svg', alt='')
        div(x="17%" y="82.7%" tooltip="" numero="+")
          .row.justify-content-center.mb-5
            .col-lg-7
              h4 Diseño de objetivo general
              p Describe lo que se espera que el visitante aprenda, sienta o haga como resultado de su programa o actividad. 
            .col-lg-5: img(src='@/assets/curso/temas/tema3/11.svg', alt='')
        div(x="3.5%" y="51%" tooltip="" numero="+")
          .row.justify-content-center.mb-5
            .col-lg-7
              h4 Selección de técnicas interpretativas
              p Aplicación de una idea que puede ser usada para incrementar la conciencia y entendimiento del público, mediante un método menos tangible que el uso de un medio de comunicación específico; comúnmente, la técnica se usa asociada a varios medios de comunicación, y puede incluir varias combinaciones de medios.
            .col-lg-5: img(src='@/assets/curso/temas/tema3/12.svg', alt='')
        div(x="13%" y="16.5%" tooltip="" numero="+")
          .row.justify-content-center.mb-5
            .col-lg-7
              h4 Preparación de elementos interpretativos
              p Una vez se identifiquen todos los elementos de las etapas para la formulación de la interpretación, se deben preparar los recursos físicos, humanos y financieros para el desarrollo de la interpretación.
            .col-lg-5: img(src='@/assets/curso/temas/tema3/13.svg', alt='')




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
.img-infografica-b__modal
  background-color: #f6f6f6
  border-radius: 20px
  display: grid
  align-items: center
  p, h4
    color: black !important
.img-infografica-b__modal__btn-cerrar i
  color: black
</style>
