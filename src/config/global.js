export default {
  global: {
    componenteFormativo: 'Propuesta técnica de la infraestructura tecnológica',
    descripcionCurso:
      'Para determinar en un proyecto tecnológico la infraestructura que se requiere para su funcionamiento, es necesario conocer e identificar especificaciones, protocolos, estándares, modelos, proveedores y otros elementos fundamentales a fin de poder elegir y tomar la mejor decisión en tecnologías de punta, que suponen un óptimo rendimiento a todo un sistema tecnológico implementado a una pequeña, mediana o gran empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
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
        titulo: 'Ficha técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Usos y elaboración',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cuadro comparativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto y tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Usos y elaboración',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cotizaciones técnicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto y tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Catálogos de fabricantes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Garantía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Definición y características',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipo de garantías, utilidad y riesgos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Prueba de funcionamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Técnicas',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Procedimiento de prueba',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Inventarios para <i>Hardware</i> y <i>Software</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Procedimientos administrativos de adquisición',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Procedimientos logísticos de la organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Protocolos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Manejo de contingencias',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Concepto y características',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Tipos y componentes',
            hash: 't_10_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.3',
            titulo: 'Marcos de referencia',
            hash: 't_10_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.4',
            titulo: 'Buenas prácticas',
            hash: 't_10_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.5',
            titulo: 'Estándares y normativa',
            hash: 't_10_5',
          },
        ],
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
      tema:
        'Manual de buenas prácticas de seguridad informática en redes doméstica',
      referencia:
        'Didier F., (2021) “Manual de buenas prácticas de seguridad informática en redes domésticas” obtenido de la red mundial el 21 de noviembre de 2021. ',
      tipo: 'Monografía',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/39430/dfhurtadov.pdf?sequence=3&isAllowed=y   ',
    },
    {
      tema: 'Seguridad informática de <i>hardware</i>, redes y <i>software</i>',
      referencia: 'Seguridad Informática Enero 17, 2022.',
      tipo: 'Blog Web Sec.es ',
      link:
        'https://www.websec.es/seguridad-informatica-en-redes-software-y-hardware/ ',
    },
    {
      tema:
        '¿Qué es un cuadro comparativo? Cómo hacer un Cuadro Comparativo (Definición y Ejemplos)',
      referencia:
        'Cogollo, J. ¿Qué es un cuadro comparativo?  Cómo hacer un Cuadro Comparativo (Definición y Ejemplos)',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I_lKPXJ05Wg ',
    },
    {
      tema: 'Top 8 Laptops Para Todo El Mundo – Laptop Calidad Precio 2022.',
      referencia:
        'XalTech Tv. (09-08-2022). Top 8 Laptops Para Todo El Mundo – Laptop Calidad Precio 2022',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7u9OknDw2oE',
    },
  ],
  glosario: [
    {
      termino: 'Backup o copia de seguridad',
      significado:
        'una copia de los datos originales que se realiza con el fin de disponer de un medio para recuperarlos en caso de su pérdida.',
    },
    {
      termino: 'Calidad',
      significado:
        'condición en que un producto cumple con las características inherentes y las atribuidas por la información que se suministre sobre él.',
    },
    {
      termino: 'Catálogo',
      significado:
        'documento en el que se encuentran organizados todos los productos o servicios de una empresa con el fin de que sean visitados por los usuarios.',
    },
    {
      termino: 'Cotización',
      significado:
        'es una obligación, temporal, solidaria a cargo del productor y proveedor de responder por el buen estado del producto (Ley 1480 de 2022, Estatuto del Consumidor).',
    },
    {
      termino: 'Comparación',
      significado:
        'comparación es la acción y efecto de comparar, es decir, de observar las diferencias y las semejanzas entre dos elementos, sean personas, objetos, lugares o cosas.',
    },
    {
      termino: 'Ficha Técnica',
      significado:
        'herramienta de gran utilidad a la hora de comercializar o dar a conocer un bien o servicio. Contiene información fidedigna o confiable que aporta datos claros y exactos, y lo más importante que de confianza, y seguridad al cliente que va a adquirir el servicio o producto.',
    },
    {
      termino: 'Garantía',
      significado:
        'es una obligación, temporal, solidaria a cargo del productor y proveedor de responder por el buen estado del producto.  (Ley 1480 de 2022, Estatuto del Consumidor).',
    },
    {
      termino: 'Inventario',
      significado:
        'relación detallada, ordenada y valorada de todos los bienes de una empresa. Sirve para comprobar o determinar la existencia física exacta de los bienes a una fecha definida.',
    },
    {
      termino: 'Logística',
      significado:
        'procesos de coordinación, gestión y transporte de los bienes comerciales desde un lugar de distribución hasta el cliente final.  Por tanto, la logística se encarga del producto en cuanto a su almacenamiento, inventario, transporte, entrega y/o devolución. ',
    },
    {
      termino: 'Procedimiento',
      significado:
        'es un método de ejecución o pasos a seguir, en forma secuenciada y sistemática, en la consecución de un fin. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Editorial Grudemi (2021). <i>Cotización</i>. Recuperado por Enciclopedia Económica.',
      link: 'https://enciclopediaeconomica.com/cotizacion/ ',
    },
    {
      referencia:
        '<i>Ficha técnica, definición, usos y ejemplos</i> (2022). Blog Ficha.Top',
      link: 'https://ficha.top/ficha-tecnica/',
    },
    {
      referencia: 'Ley 1480 de 2022, Estatuto del Consumidor.',
      link: '',
    },
    {
      referencia:
        'Machuca, F. (2022). <i>¿Cómo hacer una Ficha Técnica de un producto?</i> ',
      link: 'https://www.crehana.com/blog/negocios/ficha-tecnica-producto/',
    },
    {
      referencia:
        'Saín, G. (18 de noviembre del 2021). <i>Que es la seguridad informática</i>. ',
      link:
        'http://www.pensamientopenal.com.ar/system/files/2021/05/doctrina46557.pdf',
    },
    {
      referencia:
        'Sánchez, R. et al. (2021). <i>Ensayo seguridad informática.</i>',
      link: 'https://www.grin.com/document/1159091',
    },
    {
      referencia:
        'Romero, M. I., Grace, C., Figueroa, L., Denisse, M., Vera, S., José, N., Álava, E., Galo, C., Parrales, R., Christian, A., Álava, J., Ángel, M., Murillo Quimiz, L., Adriana, M., & Merino, C. (s/f). INTRODUCCIÓN A LA SEGURIDAD INFORMÁTICA Y EL ANÁLISIS DE VULNERABILIDADES. 3ciencias.com. Recuperado el 2 de diciembre de 2022,',
      link:
        'https://www.3ciencias.com/wp-content/uploads/2018/10/Seguridad-inform%C3%A1tica.pdf',
    },
    {
      referencia:
        'Taipe Robles, H. (2020). Seguridad informática y evaluación de riesgos en los activos de información del Instituto Nacional de Estadística e Informática - Junín. Universidad Peruana Los Andes. Recuperado de: ',
      link: 'https://repositorio.upla.edu.pe/handle/20.500.12848/1713',
    },
    {
      referencia:
        'Análisis y evaluación de riesgos de seguridad de la información: identificación de amenazas, consecuencias y criticidad. (2019, octubre 18). Software ISO. ',
      link:
        'https://www.isotools.org/2019/10/18/analisis-y-evaluacion-de-riesgos-de-seguridad-de-la-informacion-identificacion-de-amenazas-consecuencias-y-criticidad/',
    },
    {
      referencia:
        'Torres, C, D., (2020). <i>Plan de seguridad informática basado en la norma ISO 27001, para proteger la información y activos de la empresa privada Megaprofer S.A</i>',
      link: 'http://repositorio.uta.edu.ec/handle/123456789/30690',
    },
    {
      referencia:
        'Agustina, M., (2019) “Seguridad informática: la protección de la información en una empresa vitivinícola de Mendoza” obtenido en la   red mundial el 22 de octubre del 2021',
      link:
        'https://bdigital.uncu.edu.ar/objetos_digitales/15749/sistimariaagustina.pdf',
    },
    {
      referencia:
        'Carvajal C., (2019) “La encriptación de datos empresariales: ventajas y desventajas” obtenido en la red mundial el 22 de octubre del 2021',
      link: ' https://recimundo.com/~recimund/index.php/es/article/view/487',
    },
    {
      referencia:
        'Carvajal, T., (2018) “Tecnologías, seguridad informática y derechos humanos” obtenido en la red mundial el 28 de septiembre del 2021',
      link: 'http://dx.doi.org/10.12795/IETSCIENTIA.2018.i01.03',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
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
