export default {
  global: {
    componenteFormativo: 'Caracterización del destino ',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz estará en capacidad de aplicar saberes y habilidades relacionados con la caracterización del destino, para la guianza turística. También, Afianzará su capacidad para describir, interpretar, narrar situaciones e historias que, en el marco del servicio guiado, ayudarán a que el cliente experimente y viva lo que se cuenta,  satisfaciendo su expectativa e interés.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      // {
      //   clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      // },
      // {
      //   clases: ['banner-principal-decorativo-2'],
      //   imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      // },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de redacción y escritura.',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Género narrativo creativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Texto narrativo creativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de redacción creativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Escritura creativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Derechos de autor',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '3. Texto narrativo creativo',
      referencia:
        'Grapsas, T. (2020) Marketing de contenidos para el turismo, ¿Ya sabes cómo aplicar la estrategia para el sector?',
      tipo: 'Blog',
      link:
        'https://rockcontent.com/es/blog/marketing-de-contenidos-para-el-turismo/',
    },
    {
      tema: '4.Técnicas de redacción creativa',
      referencia:
        'RAE (2010) Novedades de la Ortografía de la lengua española ',
      tipo: 'Guía',
      link:
        'https://www.rae.es/sites/default/files/Principales_novedades_de_la_Ortografia_de_la_lengua_espanola.pdf',
    },
    {
      tema: '4.Técnicas de redacción creativa',
      referencia: 'RAE (s.f.) Ortografía Esencial',
      tipo: 'Guía',
      link: 'https://www.rae.es/sites/default/files/Ortografia_Esencial_0.pdf',
    },
    {
      tema: '5. Escritura creativa',
      referencia:
        'Álvarez, M. (2008) Escritura creativa. Aplicación de las técnicas de Gianni Rodari',
      tipo: 'Artículo',
      descarga: 'downloads/doc1.pdf',
    },
    {
      tema: '7. Derechos de autor',
      referencia: 'Jaramillo, A. (2010) Manual de derecho de autor',
      tipo: 'Manual',
      link:
        'http://derechodeautor.gov.co:8080/documents/10181/331998/Cartilla+derecho+de+autor+%28Alfredo+Vega%29.pdf/e99b0ea4-5c06-4529-ae7a-152616083d40',
    },
  ],
  glosario: [
    {
      termino: 'Género',
      significado:
        'Centrados en su significado en el contexto de las artes: se llama género a cada una de las clases o categorías en que pueden clasificarse las obras de acuerdo con sus características.',
    },
    {
      termino: 'Didáctica ',
      significado:
        'La didáctica, es el área de la pedagogía vinculada a los métodos prácticos de enseñanza.',
    },
    {
      termino: 'Ortografía',
      significado:
        'Es el conjunto de normas que regulan la escritura. Forma parte de la gramática normativa ya que establece las reglas para el uso correcto de las letras y los signos de puntuación.',
    },
    {
      termino: 'Gramática',
      significado:
        'Es la ciencia que tiene como objeto de estudio a los componentes de una lengua y sus combinaciones. El concepto halla su origen en el término en latín grammatĭca y hace referencia, por otra parte, al arte de dominar una lengua de modo correcto, tanto desde el habla como con la escritura.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'Proviene del término en latín syntaxis, que a su vez deriva de un vocablo griego que se traduce al español como “coordinar”. Se trata de la rama de la gramática que ofrece pautas creadas para saber cómo unir y relacionar palabras a fin de elaborar oraciones y expresar conceptos de modo coherente.',
    },
    {
      termino: 'Derechos de autor',
      significado:
        'El derecho de autor está compuesto por normas que protegen los derechos patrimoniales y morales del individuo. Estos derechos incluso se encuentran contemplados en la Declaración Universal de los Derechos Humanos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, M. (2008) Escritura creativa. Aplicación de las técnicas de Gianni Rodari.',
      link: 'https://www.redalyc.org/pdf/356/35614571010.pdf',
    },
    {
      referencia:
        'Legorburu, G. y McColl, D. (2014) STORYSCAPING. New York Times Bestseller.',
      link: '',
    },
    {
      referencia:
        'Mero, C. (2011) Empleo de las Tics en la Aplicación de las Reglas Ortográficas en la Escritura de los estudiantes de Educación Básica. ',
      link:
        'http://repositorio.uisrael.edu.ec/bitstream/47000/123/1/UISRAEL-EC-SIS-378.242-175.pdf',
    },
    {
      referencia:
        'RAE (2010) Novedades de la Ortografía de la lengua española. ',
      link:
        'https://www.rae.es/sites/default/files/Principales_novedades_de_la_Ortografia_de_la_lengua_espanola.pdf',
    },
    {
      referencia: 'RAE (s.f.) Ortografía Esencial. ',
      link: 'https://www.rae.es/sites/default/files/Ortografia_Esencial_0.pdf',
    },
    {
      referencia: 'Rosado, J. (2021) Componentes de la narrativa. ',
      link:
        'https://idoc.pub/documents/componentes-de-la-narrativa-34m7xrmywp46',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Tulio Pizarro',
        cargo: 'Experto temático',
        centro: 'Regional Distrito Capital - Centro Nacional de Hotelería',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesor Metodológico',
        centro: 'Centro Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
