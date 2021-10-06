export default {
  global: {
    componenteFormativo: 'Fundamentos del vestuario III',
    descripcionCurso:
      'El componente formativo 3 cierra el ciclo de información específica sobre fundamentos del vestuario. En este se abordarán tres unidades que permitirán la adquisición de bases teóricas y conceptuales de utilidad para un desempeño óptimo del desarrollador de colecciones en el entorno productivo; es así como las unidades: teoría de la forma, diseño y planos y, figurín y ropero se presentan para agregarse a los conocimientos ya adquiridos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría de la Forma',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La forma y sus significados, la psicología de la Gestal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Semiótica, semántica, simbolización de las formas y volúmenes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Formas geométricas, formas naturales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: ' Las formas en el diseño de vestuario',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Las formas en el diseño de vestuario',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño y planos técnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Dibujo técnico: escuadra, ángulos y líneas paralelas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Líneas rectas, lenguaje de líneas y escalas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Dibujo desde la observación, plano técnico y cotas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Transformaciones geométricas, ángulos y proyecciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Figurín y ropero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La ilustración en el mundo de la mod',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas de ilustración y expresión de la figura humana',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Estructuras del figurín, principios y técnicas para elaborar figurines',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Ropero, desarrollo e interpretación por medio de dibujos planos o geometrale',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  referencias: [
    {
      referencia:
        'Alcoceba, L. M. (2015). Piel Artificial: metamorfosis arquitectónica del cuerpo a través de la superficie. (Tesis doctoral, Universidad Politécnica de Madrid).',
      link:
        'http://oa.upm.es/40268/1/MARIA_DEL_BREZO_ALCOCEBA_LOPEZ_ARAQUISTAIN.pdf',
    },
    {
      referencia: 'Altuna. (s.f.). Profesor Altuna. (Video). YouTube. ',
      link:
        'https://www.youtube.com/user/profesoraltuna/videos?view=0&sort=da&flow=grid',
    },
    {
      referencia:
        'Altuna. (2019a). Letra normalizada - Con audio. (Video). YouTube.',
      link: 'https://www.youtube.com/watch?v=Qp_OPq1FQwk&t=83s',
    },
    {
      referencia:
        'Altuna. (2019b). Trazado de paralelas y perpendiculares. (Video). YouTube.',
      link: 'https://www.youtube.com/watch?v=Kwb7U5sC9dI',
    },
    {
      referencia:
        'Arte Divierte. (2018). Perspectiva de 2 puntos para artistas - Muy fácil. (Video). YouTube.',
      link: 'https://www.youtube.com/watch?v=IREoh0PkgTw&feature=youtu.be',
    },
    {
      referencia:
        'ARTOSKETCH. (2018). Como dibujar una perspectiva a dos puntos de fuga – TUTORIAL. (Video). ',
      link: 'https://www.youtube.com/watch?v=un6QINDDsjs&feature=youtu.be',
    },
    {
      referencia: 'Arturo geometría. (s.f.). Arturo Geometría. (Video). YouTub',
      link:
        'https://www.youtube.com/c/ArturoGeometria/videos?view=0&sort=da&flow=grid',
    },
    {
      referencia:
        'Arturo Geometría. (2014). Giro de una figura (Transformaciones geométricas: Igualdad). (Video). ',
      link: 'https://www.youtube.com/watch?v=NummIe4XG2U',
    },
    {
      referencia:
        'Arturo Geometría. (2019). Acotación - Normas básicas para aprender a acotar. (Video). YouTube',
      link: 'https://www.youtube.com/watch?v=v1vjHB60c8Q',
    },
    {
      referencia:
        'Avilés, I. A. (2016). Reflexiones en torno a la moda: tensiones, paradojas y frivolidades. Apuntes sobre Georg Simmel y Gabriel de Tarde. BAJO PALABRA. Revista de Filosofía II Época, 12, 265-273. DOI',
      link: 'http://dx.doi.org/10.15366/bp2016.12.022',
    },
    {
      referencia:
        'Baeza, J. (0). Figurín de moda: manual para estudiantes. Editorial Nobuko. Bartolome. (2015). Líneas normalizadas. Dibujotecnico.Com',
      link: 'http://www.dibujotecnico.com/lineas-normalizadas/',
    },
    {
      referencia: 'Biguri Z. I. (s.f.). Dibujo Técnico',
      link: 'https://ibiguridt.wordpress.com/temas/vistas/#vistas',
    },
    {
      referencia:
        'Carapia, G. D. y García, C. J. (2019). Semiótica de la Moda. (Video). YouTube.',
      link: 'https://www.youtube.com/watch?v=JWKhsr9pqsc',
    },
    {
      referencia:
        'Castellanos, W. (2009). Dibujo técnico. El Cid Editor | apuntes.',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=3182087',
    },
    {
      referencia:
        'Chromat. (2019). Ten Year Anniversary Runway Show. (Video). YouTube.',
      link: 'https://youtu.be/9t_CihSARHE',
    },
    {
      referencia:
        'Company, P., Gomis, J. M., Ferrer, I. & Contero, M. (s.f.). DibujoNormalizado.',
    },
    {
      referencia:
        'Company, P., Gomis, J. M., Ferrer, I. & Contero, M. (s.f.). DibujoNormalizado.',
      link: 'https://concepto.de/dibujo-tecnico/',
    },
    {
      referencia:
        'CPR de Avíles. (s.f.). Bloque: Técnicas de expresión y comunicación (p. 36).',
    },
    {
      referencia:
        'Definicion.de. (s.f.). Definicion.de. Definicion.De. Retrieved July 6, 2020',
      link: 'https://definicion.de/sastre/',
    },
    {
      referencia:
        'Dibujar Bien. (2013). Cómo dibujar bien: secretos de las proporciones y medidas. Dibujar Bien.com. [video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=8wm4YXIvGO0',
    },
    {
      referencia:
        'Dibujo Técnico paso a paso. (2019). Traslación de figuras geométricas - Dibujo técnico paso a paso Transformaciones geométricas. (Video). YouTube. ',
      link: 'https://www.youtube.com/watch?v=CYK5rZE6hW4',
    },
    {
      referencia:
        'Drudi, E. (2010). Dibujo de figurines para el diseño de moda / Amsterdam; Singapore: Pepin. Pags. 352.',
    },
    {
      referencia:
        'Drudi, E. (2011). Dibujo de figurines para el diseño de moda masculina. / Amsterdam: The Pepin Press.  Págs. 400',
    },
    {
      referencia:
        'Ejercicio de reconocimiento de la figura humana. (2015). Recuperado de Material de formación del instructor Luis Alfonso Hincapié Echeverri. SENA',
    },
    {
      referencia:
        'EPV1PAC. (2017). Uso de escuadra y cartabón, paralelas y perpendiculares. (Video). YouTube.',
      link:
        'https://www.youtube.com/watch?time_continue=3&v=okjnJuAzG84&feature=emb_logo',
    },
    {
      referencia: 'Etiduela. (s.f.). Acotación. ',
      link:
        'http://www.etitudela.com/profesores/llr/paginawebdibujo/downloads/acotacion.pdf',
    },
    {
      referencia:
        'Farlex. (s.f.). The free dictionary. The Free Dictionary by Farlex. ',
      link: 'https://es.thefreedictionary.com/cosm%C3%A9tica',
    },
    {
      referencia:
        'Fernández C. (2016). Aprende sobre el uso del escalímetro en un minuto. Modos de uso del escalímetro. (Video). YouTube.',
      link: 'https://www.youtube.com/watch?v=Cihw88CFEr4',
    },
    {
      referencia:
        'Feyerabend, F. V. (2014). Figurines de moda: patrones para ilustración de moda. Editorial Gustavo Gili.',
    },
    {
      referencia: 'Geometrales. (s.f.).',
    },
    {
      referencia:
        'Gómez, W. (2013). Para qué es el dibujo técnico. (Video). YouTube. ',
      link: 'https://www.youtube.com/watch?v=gCTalQvVmeA&feature=youtu.be',
    },
    {
      referencia:
        'González, C. (2017). Dibujo Técnico: tipos de línea, grosores y usos - MVBlog. ',
      link:
        'https://www.mvblog.cl/apuntes/dibujo/dibujo-tecnico-tipos-de-linea-y-usos/',
    },
    {
      referencia:
        'Hernani, J. (2016). Escalas -Dibujo Técnico Clase 5. (Video). YouTube.',
      link: 'https://www.youtube.com/watch?v=2dzfmbITR7o',
    },
    {
      referencia:
        'Ideas en 5 minutos CHICAS. (2018). 14 dibujos antiestrés. (Video). YouTube. ',
      link: 'https://www.youtube.com/watch?v=GcaRZAsjIa4&feature=youtu.be',
    },
    {
      referencia:
        'IES Ramón Menéndez Pidal. (s.f.). EDUCACIÓN PLÁSTICA Y VISUAL trazados básicos. 1–13.',
    },
    {
      referencia:
        'Johnson, S. (2000). Dibujo I (Issue 24, pp. 38–51). Red Tercer Milenio.',
    },
    {
      referencia:
        'Jorge Manuel. (s.f.). Dimensión Cota - Pinterest. Pinterest. ',
      link:
        'https://www.pinterest.es/pin/312366924129653797/?nic_v1=1aHzF6Qj7kxamPeUpupd8Ep8UM3Dv%2BquUKwn96BEBBExyc2kMhRYATeRbiK7aHT2Wk',
    },
    {
      referencia:
        'Lorella. (2016, mayo 20). ¿Qué es la teoría de la Gestalt? [Web log post]. Recuperado de',
      link:
        'https://www.stampaprint.net/es/blog/acerca-de-la-impresion/la-teoria-la-gestalt',
    },
    {
      referencia: 'Mifeng. (2019). Fashion Design. [video]. Pinterest.',
      link: 'https://co.pinterest.com/pin/765119424183507247/',
    },
    {
      referencia:
        'Mulet, J. (2014). Dibujar una figura en perspectiva isométrica con curva. (Video). YouTube. ',
      link: 'https://www.youtube.com/watch?v=wQeEt2RFfK0&feature=youtu.be',
    },
    {
      referencia:
        'Navarro, S. (s.f.). Uso de Escuadras Como hacer rectas paralelas y perpendiculares.',
      link: 'https://sjnavarro.files.wordpress.com/2008/09/uso-escuadras.pdf',
    },
    {
      referencia:
        'Ocampo, P. M. (2009). Semiótica Y Estética: Comunicación. Editorial Trillas, 2009. Prin.',
    },
    {
      referencia:
        'Priest, T. F. (2001a). Líneas, forma y espacio. En Guía para vestir. McGraw-Hill. Interamericana.',
    },
    {
      referencia:
        'Priest, T. F. (2001b). Tú vestuario. En Guía para vestir. McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Papelería Distrimar. (2020). Cómo hacer paralelas y ángulos con escuadra y cartabón correctamente - Papelería Distrimar. Papeles Distrimar.',
      link:
        'https://www.distrimar.es/como-hacer-paralelas-angulos-escuadra-cartabon-correctamente.html',
    },
    {
      referencia:
        'Parramón, P. E. (2007). Manuales Parramón. Dibujo (2a. ed.). Parramón Paidotribo S.L.',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=5810718',
    },
    {
      referencia:
        'Paz, L. (2014). Cómo dibujar figurines de moda desde cero (Proporciones) Curso de dibujo. [video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=t5A6FTWU8Kc',
    },
    {
      referencia:
        'Pérez, R. E. (1998). Dibujo técnico y geométrico. McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Profe Garro. (2018). Manejo de compás | Ejercicio de aplicación fácil. (Video). YouTube.',
      link: 'https://www.youtube.com/watch?v=cPNB1f1Cxhc',
    },
    {
      referencia: 'https://www.youtube.com/watch?v=cPNB1f1Cxhc',
    },
    {
      referencia:
        'Prueba de acceso a la universidad - Mayores de 25 años - Fase específica dibujo técnico. (s.f.). ',
    },
    {
      referencia: 'Rodríguez, M. D. (2015a). La Gestalt. [Video]. Linkedin.',
      link:
        'https://www.linkedin.com/learning/diseno-para-no-disenadores-formato-y-composicion/la-gestalt?u=84303994',
    },
    {
      referencia: 'Rodríguez M. D. (2015b). El rectángulo. [Video]. Linkedin.',
      link:
        'https://www.linkedin.com/learning/diseno-para-no-disenadores-formato-y-composicion/el-rectangulo?u=84303994',
    },
    {
      referencia: 'Rodríguez M. D. (2015c). El triángulo. [Video]. Linkedin.',
      link:
        'https://www.linkedin.com/learning/diseno-para-no-disenadores-formato-y-composicion/el-triangulo?u=84303994',
    },
    {
      referencia:
        'Romano, A. M. (2019). Forma. En Elementos de diseño: enfoque teórico general: práctica textil e indumentaria. Ediciones Infinito. ',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). DRAE | Diccionario de la lengua española | Edición del Tricentenario | RAE - ASALE. Retrieved July 6, 2020, from',
      link: 'https://dle.rae.es/',
    },
    {
      referencia:
        'Redondo, G. M. (2014). Ilustración digital. Ministerio de Educación de España.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/114112?page=1',
    },
    {
      referencia:
        'SENA, Barco, R., Martínez, S. y Montivar, Á. (1984). Fundamentos de dibujo - Módulo instruccional No. 5. 35.',
    },
    {
      referencia:
        'Significados. (s.f.). Significado de Línea (Qué es, Concepto y Definición) - Significados. Significados.Com',
      link: 'https://www.significados.com/linea/',
    },
    {
      referencia:
        'Smith, C. (2012). Curso de Geometrales y Fichas Técnicas, por Cynthia Smith. (Video). YouTube. ',
      link: 'https://www.youtube.com/watch?v=FYNESsXntAw',
    },
    {
      referencia: 'Smith, C. (s.f.). Ilustración a mano alzada.',
      link: 'https://cynthiasmith.com.ar/amano/',
    },
    {
      referencia:
        'Takamura, Z. (2007). Diseño de moda: Conceptos básicos y aplicaciones prácticas de ilustración de moda. Promopress.',
    },
    {
      referencia:
        'TraZArte - El Sendero del Dibujante. (2013). Técnicas para aprender a dibujar - el trazo y ejercicios para calentar. [video]. Youtube.',
      link: 'https://www.youtube.com/watch?v=R6olMYk8KYg',
    },
    {
      referencia: 'TRAZO DE LINEAS - Dibujo técnico. (2014).',
      link: 'https://sites.google.com/site/cecytehoctun/trazo-de-lineas',
    },
    {
      referencia:
        'Universidad Nacional de San Juan - Facultad de ingeniería - Departamento Matemática. (2018). Dibujo y sistemas de representación - Uso de las escuadras.',
    },
    {
      referencia:
        'Vargas, S. (2019). 8 Diferentes estilos de dibujo que puedes probar ahora mismo. ',
      link: 'https://mymodernmet.com/es/estilos-dibujo/',
    },
    {
      referencia:
        'Wesen, B. M. (2012). Dibujo de moda: técnicas de ilustración para diseñadores de moda.',
    },
  ],
  glosario: [
    {
      termino: 'Aerodinámico',
      significado:
        'La aerodinámica es la rama de la mecánica de fluidos que estudia las acciones que aparecen sobre los cuerpos sólidos cuando existe un movimiento relativo entre estos y el fluido que los baña, siendo este último un gas y no un líquido, caso este que se estudia en hidrodinámica.',
    },
    {
      termino: 'Antropométrico',
      significado:
        'La antropometría es la sub-rama de la antropología biológica o física que estudia las medidas del cuerpo humano y las estudia referentemente sin ningún tipo de porcentaje de error mínimo, ya que las medidas han de ser exactas a la par que se tomen.',
    },
    {
      termino: 'Apariencia',
      significado:
        'Conjunto de características o circunstancias con que una persona o una cosa se aparece o se presenta a la vista o al entendimiento.',
    },
    {
      termino: 'Boceto',
      significado:
        'Dibujos más o menos detallados que plasmen formas concebidas por la imaginación del artista.',
    },
    {
      termino: 'Boceto',
      significado:
        'Proyecto o apunte general previo a la ejecución de una obra artística. Esquema o proyecto en que se bosqueja cualquier obra (adaptado de Real Academia Española, s.f.).',
    },
    {
      termino: 'Canon',
      significado:
        'Palabra que proviene del griego <i>Χανων</i>, regla, es un concepto que se refiere a las proporciones perfectas o ideales del cuerpo humano y se refiere a las relaciones armónicas entre las distintas partes de una figura.',
    },
    {
      termino: 'Cartabón',
      significado:
        'Regla en forma de triángulo escaleno con ángulos de 90°, 60° y 30° (Papelería Distrimar, 2020).',
    },
    {
      termino: 'Circulo',
      significado:
        'Circunferencia, curva cerrada cuyos puntos equidistan del centro.',
    },
    {
      termino: 'Compás',
      significado:
        'Es un instrumento que cuenta con un par de brazos articulados, los cuales están vinculados entre sí mediante un eje o una bisagra en su sector superior. Con un compás es posible registrar distancias y dibujar arcos o círculos (Definicion.de, s.f.).<br><br>Instrumento formado por dos brazos articulados terminados en punta y unidos por un eje en su parte superior, que sirve para trazar circunferencias o arcos y tomar distancias (Real Academia Española, s.f.).',
    },
    {
      termino: 'Concepto',
      significado:
        '1.Representación mental de un objeto, hecho, cualidad, situación, etc. "es muy difícil definir el concepto de belleza". 2.Opinión o juicio, especialmente el que se tiene de una persona. "tiene muy buen concepto de tus amigos".',
    },
    {
      termino: 'Configuración',
      significado:
        'Forma particular de una cosa, determinada por la disposición de las partes que la componen.',
    },
    {
      termino: 'Corpóreas',
      significado: 'Que tiene cuerpo, volumen o consistencia material.',
    },
    {
      termino: 'Cota',
      significado:
        'Número que en los planos topográficos indican la altura de un punto, ya sobre el nivel del mar, ya sobre otro plano de nivel. Altura de un punto sobre un plano de nivel. Acotación, anotación o cita (Real Academia Española, s.f.).',
    },
    {
      termino: 'Cuadrado',
      significado:
        'Figura geométrica que tiene cuatro lados iguales que forman cuatro ángulos rectos.',
    },
    {
      termino: 'Derriere',
      significado: 'Parte trasera del cuerpo referente a las caderas.',
    },
    {
      termino: 'Dibujo',
      significado:
        'Es el lenguaje universal, ya que sin mediar palabras es posible transmitir ideas de modo gráfico que resulten comprensibles para todos.',
    },
    {
      termino: 'Enjuto',
      significado: 'Que está muy delgado, en posición de cerramiento.',
    },
    {
      termino: 'Equilibrio',
      significado:
        'Estado de inmovilidad de un cuerpo sometido a dos o más fuerzas de la misma intensidad que actúan en sentido opuesto, por lo que se contrarrestan o anulan.',
    },
    {
      termino: 'Erguidas',
      significado:
        'Erguir se refiere a levantar o levantarse o a poner o ponerse derecho. Cuando un individuo se encuentra erguido, está parado (de pie) o tiene la columna vertebral recta y la cabeza elevada.',
    },
    {
      termino: 'Escala',
      significado:
        'Línea recta que, dividida en partes iguales, permite representar metros, kilómetros u otra unidad de medida. Estas herramientas son utilizadas para dibujar distancias y dimensiones de manera proporcional en un plano o mapa es la proporción o tamaño en que se desarrolla una idea o un proyecto (Real Academia Española, s.f.).',
    },
    {
      termino: 'Escalímetro',
      significado:
        'Regla de sección triangular que tiene graduaciones de diversas escalas en cada una de sus caras (Real Academia Española, s.f.).',
    },
    {
      termino: 'Escuadra',
      significado:
        'Regla en forma de triángulo isósceles con un ángulo de 90° y dos de 45° (Papelería Distrimar, 2020).',
    },
    {
      termino: 'Estructura',
      significado:
        'Conjunto de relaciones que mantienen entre sí las partes de un todo.',
    },
    {
      termino: 'Etnia',
      significado:
        'Una etnia es una comunidad humana que comparte un conjunto de rasgos de tipo sociocultural, al igual que afinidades raciales. La palabra, como tal, proviene del griego éthnos, que significa pueblo.',
    },
    {
      termino: 'Figurín',
      significado:
        'Dibujo usado como modelo para hacer trajes y adornos de moda.',
    },
    {
      termino: 'Forma',
      significado:
        'Todo lo que el ojo puede ver, conjunto de líneas y superficies que determinan la planta, el contorno o el volumen de una cosa, en contraposición a la materia de que está compuesta.',
    },
    {
      termino: 'Función',
      significado:
        'Actividad particular que realiza una persona o una cosa dentro de un sistema de elementos, personas, relaciones, etc., con un fin determinado.',
    },
    {
      termino: 'Funcionalidad',
      significado:
        'Propiedad de lo que es funcional y tiene utilidad para algo.',
    },
    {
      termino: 'Interpretación',
      significado:
        'Explicar o declarar el sentido de algo, pero principalmente el de un texto, explicar acciones, dichos o sucesos que pueden ser entendidos de diversas formas.',
    },
    {
      termino: 'Leyes Gestalt',
      significado:
        'Las leyes de la Gestalt son unas reglas que explican el origen de las percepciones a partir de los estímulos.',
    },
    {
      termino: 'Línea',
      significado:
        'Del latín linea, es un término con múltiples usos. Se trata, para la geometría, de una seguidilla de puntos que se extiende indefinidamente y de manera continua en una única dimensión (Definicion.de, s.f.).<br><br>1. F. Geom. Sucesión continua e indefinida de puntos. 2. F. Medida longitudinal que equivale a cerca de dos milímetros. 3. F. Raya en un cuerpo cualquiera. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Líneas',
      significado:
        'Una línea funciona como una sucesión continua de puntos trazados, como por un trazo o un guion. Las líneas suelen utilizarse en la composición artística, ya sea que el artista lo use en trazos rectos sueltos, que no forman una figura o forma en particular.',
    },
    {
      termino: 'Mensaje',
      significado:
        'El mensaje es, en el sentido más general, el objeto de la comunicación. Está definido como la información o enunciado verbal que el emisor envía al receptor a través de un canal de comunicación o medio de comunicación determinado.',
    },
    {
      termino: 'Metamorfosis',
      significado:
        'Cambio o transformación de una cosa en otra, especialmente el que es sorprendente o extraordinario y afecta a la fortuna, el carácter o el estado de una persona.',
    },
    {
      termino: 'Modificar',
      significado:
        'Ajustar, Cambiar una cosa variando su disposición o alguna característica sin alterar sus cualidades o características esenciales.',
    },
    {
      termino: 'Movimiento corporal',
      significado:
        'Es la conducta motriz con finalidad expresiva, comunicativa y estética en la que el cuerpo, el movimiento y el sentimiento se fusionan como elementos básicos de la figura.',
    },
    {
      termino: 'Óvalo',
      significado:
        'Figura plana, oblonga y curvilínea, especialmente la que tiene la forma de la sección longitudinal de un huevo.',
    },
    {
      termino: 'Paralela',
      significado:
        'Líneas que mantienen una equidistancia en todos sus puntos. Si las rectas A y B son paralelas, no habrá forma en que se produzca una intersección entre ambas (Definicion.de, s.f.).',
    },
    {
      termino: 'Plano',
      significado:
        'Representación esquemática, en dos dimensiones y a determinada escala, de un terreno, una población, una máquina, una construcción, etc. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Pose',
      significado:
        'Postura física o actitud que adopta la persona que hace de modelo ante un pintor, escultor o fotógrafo.',
    },
    {
      termino: 'Proporción',
      significado:
        'Es la relación de tamaño o cantidad que existe entre las partes de algo dentro de un todo o entre los elementos de un conjunto.',
    },
    {
      termino: 'Raza',
      significado:
        'La raza, en cambio, hace referencia a los grupos en que se subdivide una especie. Considera únicamente aspectos de tipo biológico, así como de índole física, asociados a las características fenotípicas de los individuos.',
    },
    {
      termino: 'Ropero',
      significado:
        'Es dibujo técnico, dibujo plano o dibujo de producto. Es la ilustración, presentación plana (bidimensional) o dibujo de una prenda o de un complemento (accesorio) de la ropa sin la figura humana. En síntesis, sirve para comunicar el equilibrio, la estructura y las especificaciones de una prenda o de un producto.',
    },
    {
      termino: 'Rotación',
      significado:
        'Movimiento de un cuerpo alrededor de un eje (Real Academia Española, s.f.).<br><br>Del latín rotatĭo, es la acción y efecto de rotar (dar vueltas alrededor de un eje). Se trata de un movimiento de cambio de orientación que se produce de forma tal que, dado cualquier punto del mismo, este permanece a una distancia constante del eje de rotación (Definicion.de, s.f.).',
    },
    {
      termino: 'Semántica',
      significado:
        'El término semántica se refiere al estudio de diversos aspectos del significado, sentido o interpretación de signos lingüísticos como símbolos, palabras, expresiones o representaciones formales.',
    },
    {
      termino: 'Semiótica',
      significado:
        'Ciencia que estudia los diferentes sistemas de signos que permiten la comunicación entre individuos, sus modos de producción, de funcionamiento y de recepción.',
    },
    {
      termino: 'Sentidos',
      significado:
        'Los sentidos son el mecanismo fisiológico de la sensación ​ y permiten obtener información de lo que está a nuestro alrededor, así como determinados estados internos del organismo; vista, tacto, olfato, audición, gusto.',
    },
    {
      termino: 'Signo',
      significado:
        'Objeto, fenómeno o hecho que, por una relación natural o convencional, representa o evoca otro objeto, fenómeno o hecho.',
    },
    {
      termino: 'Simbolizaciones',
      significado: '1. Acción de simbolizar.<br><br>2. Efecto de simbolizar.',
    },
    {
      termino: 'Símbolo',
      significado:
        'Signo que establece una relación de identidad con una realidad, generalmente abstracta, a la que evoca o representa.',
    },
    {
      termino: 'Simetría',
      significado:
        'Del latín symmetrĭa, es la correspondencia exacta en tamaño, forma y posición de las partes de un todo (Definicion.de, s.f.).<br><br>1. F. Correspondencia exacta en forma, tamaño y posición de las partes de un todo. 3. F. Geom. Correspondencia exacta en la disposición regular de las partes o puntos de un cuerpo o figura con relación a un centro, un eje o un plano (Real Academia Española, s.f.).',
    },
    {
      termino: 'Tamaño',
      significado: 'Es la comparación de una forma con otras conocidas.',
    },
    {
      termino: 'Técnica',
      significado:
        'Conjunto de procedimientos o recursos que se usan en un arte, en una ciencia o en una actividad determinada, en especial cuando se adquieren por medio de su práctica y requieren habilidad.',
    },
    {
      termino: 'Transformación',
      significado:
        'Acción de transformar o transformarse. Efecto de transformar o transformarse.',
    },
    {
      termino: 'Transportador de ángulos',
      significado:
        'Utensilio semicircular graduado que sirve para medir y trazar ángulos (Real Academia Española, s.f.).',
    },
    {
      termino: 'Traslación',
      significado:
        'Movimiento de los cuerpos que siguen curvas de gran radio con relación a sus propias dimensiones (Real Academia Española, s.f.).<br><br>Cuando se habla de trasladar figuras geométricas, sean bidimensionales o tridimensionales, en el espacio (Definicion.de., s.f.).',
    },
    {
      termino: 'Triángulo equilátero',
      significado:
        'En geometría, un triángulo equilátero, es un polígono regular; es decir, tiene sus tres lados iguales.​ En la geometría euclídea tradicional, los triángulos equiláteros también son equiangulares, donde los tres ángulos internos son iguales y miden 60°.',
    },
    {
      termino: 'Vista',
      significado:
        'Se llama vista de una pieza u objeto a la imagen del mismo que se observa desde una determinada posición (Biguri, Z., s.f.).',
    },
  ],
  complementario: [
    {
      texto:
        '(Universidad Nacional de San Juan - Facultad de ingeniería - Departamento Matemática, 2018) Dibujo y sistemas de representación - Uso de las escuadras',
      tipo: 'PDF',
      descarga:
        '/downloads/DibujoYSistemasDeRepresentacion_UsoDeLasEscuadras.pdf',
    },
    {
      texto:
        '(Navarro, s.f.) Uso de Escuadras Como hacer rectas paralelas y perpendiculares',
      tipo: 'PDF',
      descarga:
        '/downloads/UsoDeEscuadrasComoHacerRectasParalelasYPerpendiculares.pdf',
    },
    {
      texto: '(Geometrales, s.f.) Geometrales',
      tipo: 'PDF',
      descarga: '/downloads/GEOMETRALES.pdf',
    },
    {
      texto: '(Etiduela, s.f.) Acotación',
      tipo: 'PDF',
      descarga: '/downloads/Acotacion.pdf',
    },
    {
      texto: '(Johnson, 2000) Dibujo I_Parte 1',
      tipo: 'PDF',
      descarga: '/downloads/Dibujo_I_Parte1.pdf',
    },
    {
      texto: '(Company et al., s.f.) Dibujo normalizado',
      tipo: 'PDF',
      descarga: '/downloads/DibujoNormalizado.pdf',
    },
    {
      texto:
        '(CPR de Avíles, s.f.) Bloque: Técnicas de expresión y comunicación',
      tipo: 'PDF',
      descarga: '/downloads/Bloque_Tecnicas_de_expresion_y_comunicacion.pdf',
    },
    {
      texto:
        '(Prueba de acceso a la universidad - Mayores de 25 años - Fase específica dibujo técnico, s.f.) Prueba de acceso a la universidad - Mayores de 25 años - Fase específica dibujo técnico',
      tipo: 'PDF',
      descarga:
        '/downloads/Prueba_de_acceso_a_la_universidad_Mayores_de_25_anos_Fase_especifica_dibujo_ tecnico.pdf',
    },
    {
      texto:
        '(SENA et al., 1984) Fundamentos de dibujo - Módulo instruccional No. 5',
      tipo: 'PDF',
      descarga:
        '/downloads/Fundamentos_de_dibujo_Modulo_instruccional_No_5.pdf',
    },
    {
      texto:
        '(IES Ramón Menéndez Pidal, s.f.) EDUCACIÓN PLÁSTICA Y VISUAL trazados básicos',
      tipo: 'PDF',
      descarga: '/downloads/EDUCACION_PLASTICA_Y_VISUAL_trazados_basicos.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
