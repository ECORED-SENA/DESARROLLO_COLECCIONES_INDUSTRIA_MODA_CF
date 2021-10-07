<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-borders.bottom

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Teoría de la Forma

    figure.mb-5(data-aos="fade-right" data-aos-delay="500")
      img(src="@/assets/curso/tema1-imagen1.jpg")

    p.mb-5(data-aos="fade-left" data-aos-delay="500") Para el desarrollo de un producto de moda, es fundamental el conocimiento de “Teoría de la forma”, para comprender, conceptualizar y aplicar las diferentes temáticas relacionadas con el cuerpo humano, para transformarlo y modificar su apariencia, estructura y estética.
    
    .row.justify-content-center.mb-5 
      .col-lg-6(data-aos="fade-right" data-aos-delay="500")
        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h4.text-regular (…) la fabricación de la primera envolvencia corporal se concibe, desde sus orígenes como un proyecto arquitectónico desde la epidermis, se transfiere a la piel artificial los anhelos de metamorfosis implícitos en el ser humano, que en un proceso de mutación de forma, textura y color en el lienzo térmico se transforma modificando su identidad.
            i.fas.fa-quote-right
      .col-lg-6(data-aos="fade-left" data-aos-delay="500")
        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h4.text-regular (…) la vestimenta, como primera envolvente artificial es desde su invención, la materialización de un proyecto de carácter arquitectónico que en su proceso de diseño incorpora los conceptos de dimensión y escala; función y forma; estructura, material y construcción; técnica e instrumentación.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 (Alcoceba, 2015, p. 19 y 20)

    .bloque-texto-c.color-acento-contenido.p-4.mb-5(data-aos="fade-down" data-aos-delay="500")
      i.fas.fa-quote-right
      h4.text-regular.mb-2 Además de proteger el cuerpo ante las inclemencias climáticas y de las hostilidades del ambiente que nos rodea, el vestido nos distingue. Se presenta como símbolo de pertenencia a cierto grupo étnico o a cierto estatus social. Paradójicamente, el vestido nos individualiza a la vez que nos hace desaparecer frente a nuestros semejantes.
      .h5.mb-0 (Avilés, 2016, p. 3)

    p.mb-5(data-aos="fade-down" data-aos-delay="500") En el mundo visual la forma es percibida e interpretada por los sentidos, todo se estructura alrededor de como sean percibidas las sensaciones. El objetivo fundamental de esta temática es generar una invitación a explorar nuevas maneras de interpretar y llevar a un estado visual las sensaciones generadas en el cerebro como producto de los estímulos externos, teorizar y recoger conceptos acerca de las formas y plantear el concepto de “Forma” a partir del entorno natural, abstracto e imaginario de acuerdo a las experiencias previas del individuo.
      br
      br
      | El oído, el gusto, el tacto, la visión y el olfato son el principal medio de construcción de la forma.

    .row.justify-content-center.mb-5(data-aos="fade-down" data-aos-delay="500")
      .col-lg-10
        figure
          img(src="@/assets/curso/tema1-imagen2.svg")

    Separador

    #t_1_1.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 1.1  La forma y sus significados, la psicología de la Gestal

    p.mb-5(data-aos="fade" data-aos-delay="500") La forma es todo lo que el ojo puede ver o interpretar y se asocia a diferentes conceptos, partiendo del punto, que es la mínima expresión de la representación espacial, es el principio o es el final.

    .row.justify-content-center.mb-5(data-aos="fade-right" data-aos-delay="500")
      .col-lg-9
        .box-soft.color-acento-contenido.p-5
          LineaTiempoB.color-acento-botones.mb-5(:datos="datosLineaTiempoB")
    
    .bloque-texto-c.color-acento-contenido.p-4.mb-5(data-aos="fade-left" data-aos-delay="500")
      i.fas.fa-quote-right
      h4.text-regular.mb-2 (…) el todo es siempre más que la suma de sus partes”. Esta frase revela exactamente los principios de la teoría de esta corriente: es decir, descubrir por qué el cerebro humano tiende a interpretar un conjunto de elementos diferentes como un único mensaje, y cómo nuestra mente agrupa las informaciones que recibimos en categorías mentales que nosotros mismos hemos establecido. En el ámbito de las artes gráficas, este estudio de la percepción es fundamental a la hora de analizar cómo el ojo humano lee un determinado esquema, cómo distingue las formas y los elementos que lo componen y la unidad del mensaje y del significado.
      .h5.mb-0 (Lorella, 2016)

    .bloque-texto-g.inverse.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade" data-aos-delay="500")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1-imagen10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La aplicación de estas leyes es la que da coherencia y armonía al momento de realizar una propuesta de vestuario con un sentido propio. En el álbum que encuentra a continuación podrá conocer algunos ejemplares que dan cuenta de este contexto temático.
          br
          br
          | En el material complementario encuentra el video “La teoría de Gestalt” y el blog “¿Qué es la teoría de la Gestalt?” que le ayudarán a construir un panorama más amplio de este tema.

    .carousel-additional(data-aos="fade" data-aos-delay="500")
      #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
        .carousel-inner
          .carousel-item.active
            .row.justify-content-center
              .col-lg-5.mb-lg-0.mb-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 1
                  br
                  span Zentagle elaborado por Aprendiz. Programa Diseño para la industria de la Moda. SENA (2014).
                figure
                  img(src='@/assets/curso/tema1-imagen11.jpg')
              .col-lg-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 2
                  br
                  span Zentagle elaborado por Aprendiz. Programa Diseño para la Idustria de la Moda. SENA (2014).
                figure
                  img(src='@/assets/curso/tema1-imagen12.jpg')
          .carousel-item
            .row.justify-content-center
              .col-lg-5.mb-lg-0.mb-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 3
                  br
                  span Modulaciones elaborado por Aprendiz.<br>Programa Diseño para la Industria de la Moda. SENA (2014)
                figure
                  img(src='@/assets/curso/tema1-imagen13.jpg')
              .col-lg-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 4
                  br
                  span Modulaciones elaborado por Aprendiz.<br>Programa Diseño para la Industria de la Moda. SENA (2014
                figure
                  img(src='@/assets/curso/tema1-imagen14.jpg')
          .carousel-item
            .row.justify-content-center
              .col-lg-5.mb-lg-0.mb-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 5
                  br
                  span Máscara inspirada en los siete días de la semana, elaborada por Aprendiz. Programa Diseño para la Industria de la Moda. SENA (2011)
                figure
                  img(src='@/assets/curso/tema1-imagen15.jpg')
              .col-lg-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 6
                  br
                  span Máscara inspirada en los siete días de la semana, elaborada por Aprendiz. Programa Diseño para la Industria de la Moda. SENA (2012)
                figure
                  img(src='@/assets/curso/tema1-imagen16.jpg')
          .carousel-item
            .row.justify-content-center
              .col-lg-5.mb-lg-0.mb-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 7
                  br
                  span Creaciones inspiradas en los siete días de la creación y el mundo submarino, elaborada por Aprendices. Programa Diseño para la Industria de la Moda. SENA (2012).
                figure
                  img(src='@/assets/curso/tema1-imagen17.jpg')
              .col-lg-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 8
                  br
                  span Xantofibia, elaborada por las Aprendices Elizabeth Cano y Schelsy Peña. Programa Diseño para la Industria de la Moda, Ficha 1437356. SENA.
                figure
                  img(src='@/assets/curso/tema1-imagen18.jpg')
          .carousel-item
            .row.justify-content-center
              .col-lg-5.mb-lg-0.mb-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 9
                  br
                  span Creaciones elaborada por Aprendices. Programa Diseño para la Industria de la Moda, Ficha 1437956. SENA.
                figure
                  img(src='@/assets/curso/tema1-imagen19.jpg')
              .col-lg-5
                .titulo-sexto.color-acento-contenido
                  h5 Figura 10
                  br
                  span Mandalas volumen 2 ilustrado por Terbit Basuki en colorit.com. Pinterest. (Consultado en 2020).
                figure
                  img(src='@/assets/curso/tema1-imagen20.jpg')

        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next

    Separador
    
    #t_1_2.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 1.2  Semiótica, semántica, simbolización de las formas y volúmenes

    .bloque-texto-g.inverse.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade" data-aos-delay="500")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1-imagen10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La aplicación de estas leyes es la que da coherencia y armonía al momento de realizar una propuesta de vestuario con un sentido propio. En el álbum que encuentra a continuación podrá conocer algunos ejemplares que dan cuenta de este contexto temático.
          br
          br
          | En el material complementario encuentra el video “La teoría de Gestalt” y el blog “¿Qué es la teoría de la Gestalt?” que le ayudarán a construir un panorama más amplio de este tema.

    .row.justify-content-center.align-items-center.box-blue-soft.mb-5
      .col-lg-5.mb-5.mb-lg-0(data-aos="fade-right" data-aos-delay="500")
        figure
          img(src="@/assets/curso/tema1-imagen21.svg")
      .col-lg-7(data-aos="fade-left" data-aos-delay="500")
        p.mb-0 Lo anterior, lleva a entender que cada cuerpo es diferente, aunque conserve una misma estructura y que el vestuario es el encargado de transformarlo, la selección de este puede favorecer o desfavorecer la apariencia estética, existen múltiples opciones, la decisión final le pertenece a cada individuo, quien visualiza, vive y siente el mundo como lo percibe.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-5.mb-lg-0(data-aos="fade-right" data-aos-delay="500")
        p.mb-5 Es tarea del profesional de la moda, utilizar las herramientas, que le dan múltiples opciones para transformar la forma del cuerpo por medio del vestuario, teniendo siempre presente que los excesos son perjudiciales y es el control (o límite), la clave para:
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Engrosar o adelgazar.
          li 
            i.lista-ul__vineta
            | Estirar o recoger.
          li 
            i.lista-ul__vineta
            | Aparecer o desaparecer.
          li 
            i.lista-ul__vineta
            | Resaltar u ocultar.
          li 
            i.lista-ul__vineta
            | Mejorar o empeorar líneas.
          li 
            i.lista-ul__vineta
            | Moderar o exagerar formas.
          li 
            i.lista-ul__vineta
            | Controlar o descontrolar.
      .col-lg-5(data-aos="fade-left" data-aos-delay="500")
        figure
          img(src="@/assets/curso/tema1-imagen22.svg")

    p.mb-5(data-aos="fade" data-aos-delay="500") De esta manera es como se logra obtener volúmenes y diferentes simbolizaciones de la forma.
      br
      br
      | Un aspecto relevante de la semiótica es el manejo, aplicación y control del color, este representa uno de los elementos más poderosos para captar la atención y producir reacciones emocionales en el receptor.

    .row.justify-content-center
  
  .container.tarjeta.tarjeta--azul.p-4.p-md-5.no-borders.top.bottom(data-aos="fade-down" data-aos-delay="500")
    p.mb-5.text-center
      strong Analice un poco más a fondo esta temática revisando:
    .row.justify-content-center
      .col-lg-5
        a.anexo.white.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen23.svg")
          .anexo__texto
            p <strong>Anexo.</strong> Ejercicio de reconocimiento de la figura humana.
      .col-lg-4
        a.anexo.white.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Semiótica de la Moda.
          
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-borders.top.bottom

    Separador

    #t_1_3.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 1.3  Formas geométricas, formas naturales

    .bloque-texto-g.inverse.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down" data-aos-delay="500")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1-imagen25.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La naturaleza es la especialista en generar formas diversas, que interpretadas son una herramienta especial para la transformación del vestuario.
          br
          br
          | Toda representación toma forma cuando el punto se repite, genera movimiento y una dirección creando figuras reconocidas, como, por ejemplo, el círculo que es la forma perfecta y produce sensación de suavidad, armonía, ternura, fragilidad y movimiento; seguido del óvalo que se relaciona con la delicadeza, tranquilidad, suavidad y femineidad. Las formas circulares y ovales tienden a transmitir sensaciones positivas.
          br
          br
          | Las formas anguladas como el cuadrado, que es una representación estática y estable se asocia a ideas de estabilidad, permanencia, torpeza, honestidad, rectitud, esmero, rigidez, seriedad y equilibrio.

    p.mb-5(data-aos="fade-down" data-aos-delay="500") Las líneas rectas y precisas también transmiten un sentimiento de fuerza, profesionalismo y eficiencia, como la línea vertical que sugiere equilibrio, fuerza, dignidad, nacimiento, espiritualidad, ascenso, elevación y vida; la horizontal genera estabilidad, enfatiza y sugiere reposo, pasividad, estabilidad y muerte. Las líneas ascendentes sugieren decisión juventud y salida, las perpendiculares sugieren apoyo y firmeza; formas anguladas sugieren elevación y misticismo, las quebradas peligro, energía, nerviosismo y conflicto; las curvas de movimiento ondulante son femeninas, maternales y sensuales; la espiral indica movimiento continuo y evolución, cambio, creatividad originalidad y rompe con lo establecido, también se les relaciona con la tecnología y el deporte, los trazos delgados y suaves evocan la fragilidad y delicadeza, así como la sencillez de la elegancia, los gruesos generan la sensación de solidez y mayor peso.
      br
      br
      | El triángulo equilátero con la punta hacia arriba evoca grandeza, ascenso y misticismo, con la punta hacia abajo sugiere depresión y descanso; se asocia con el poder, ciencia, religión y justicia, se le relaciona con la acción a la amenaza, al conflicto, a la tensión, con la masculinidad;

    Separador

    #t_1_4.titulo-segundo(style="margin-bottom: 0")(data-aos="fade" data-aos-delay="500")
      h2 1.4  Las formas en el diseño de vestuario

  .container.tarjeta.tarjeta--rosa.p-4.p-md-5.no-borders.top.bottom
    .row.justify-content-center.align-items-center.mb-5.tarjeta--rosa-box(data-aos="fade-right" data-aos-delay="500")
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0.px-5 La configuración de cada persona es diferente, depende de su constitución física, edad, género, procedencia, hábitos alimenticios, costumbres, clima, entre otros, que definen su estructura ósea y musculatura; es decir, su forma corporal. Se pueden encontrar personas muy voluminosas o muy delgadas, con extremidades cortas o largas, con mucho o poco volumen en cadera, cintura, torso, vientre, hombros, personas erguidas o enjutos.
      .col-lg-5(style="background-color: white")
        figure
          img(src="@/assets/curso/tema1-imagen28.svg")
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul-box(data-aos="fade-left" data-aos-delay="500")
      .col-lg-5(style="background-color: white")
        figure
          img(src="@/assets/curso/tema1-imagen29.svg")
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0.px-5 Cuando se va a construir el vestuario, lo primero que se debe tener en cuenta es un análisis antropométrico y determinar las características propias de la persona, que van desde los pies hasta la cabeza, teniendo en cuenta que cada individuo es único. Las grandes diferencias se encuentran en: estatura, talle, contorno de hombro, contorno de cintura, contorno de cadera, contorno de muslo, contorno de brazos, perfil de busto, perfil del abdomen y perfil del derriere.
    .row.justify-content-center.align-items-center.mb-5.tarjeta--rosa-box(data-aos="fade-right" data-aos-delay="500")
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0.px-5 Dependiendo de las características físicas, los resultados que se buscan al elaborar el vestuario, se logran a través de efectos de confección y patronaje que adelgacen, ensanchen, equilibren, reduzcan, acentúen, destaquen y simulen o efectos aerodinámicos que favorezcan la apariencia estética de las personas. Además, la utilización de accesorios, complementos, material textil, texturas, procesos, acabados y colores también ayudan a cambiar la apariencia estética, teniendo siempre presente la funcionalidad. 
      .col-lg-5(style="background-color: white")
        figure
          img(src="@/assets/curso/tema1-imagen30.svg")
    .row.justify-content-center(data-aos="fade" data-aos-delay="500")
      .col-lg-6
        a.anexo.white.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Chromat SS20 | Ten Year Anniversary Runway Show
    
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-borders.top

    Separador

    #t_1_5.titulo-segundo
      h2 1.5  Las formas en el diseño de vestuario

    SlyderC.mb-5(:datos="datosSlyder")
  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: '',
        texto: 'El objetivo de la Teoría de la Gestalt es',
        icono: require('@/assets/curso/tema1-imagen3.svg'),
      },
      {
        titulo: '',
        texto: 'estudiar la percepción visual',
        icono: require('@/assets/curso/tema1-imagen4.svg'),
      },
      {
        titulo: '',
        texto:
          'Sus leyes se relacionan con la forma de entender la realidad teniendo en cuenta, que',
        icono: require('@/assets/curso/tema1-imagen5.svg'),
      },
      {
        titulo: '',
        texto:
          'Percibimos las cosas como una totalidad significativa y no como algo aislado, por esto es',
        icono: require('@/assets/curso/tema1-imagen6.svg'),
      },
      {
        titulo: '',
        texto: 'importante analizarlas, estas son:',
        icono: require('@/assets/curso/tema1-imagen7.svg'),
      },
      {
        titulo: '',
        texto:
          'Totalidad, Continuidad, Proximidad, Similitud, Pregnancia, Contraste, Cierre y Compleción, las cuales',
        icono: require('@/assets/curso/tema1-imagen8.svg'),
      },
      {
        titulo: '',
        texto:
          'Permiten entender los diferentes fenómenos que se presentan en la realidad visual.',
        icono: require('@/assets/curso/tema1-imagen9.svg'),
      },
    ],
    datosSlyder: [
      {
        titulo: '',
        texto:
          'La efectividad del creador de moda está en generar e introducir nuevas propuestas y siluetas que se acerquen a los ideales estéticos del momento, que satisfagan las expectativas, los gustos y las necesidades de las personas.',
        imagen: require('@/assets/curso/tema1-imagen31.jpg'),
      },
      {
        titulo: '',
        texto:
          'La forma, se explora después de conocer las características corpóreas del individuo, identificando cuáles y cómo se pueden resaltar u ocultar, a través de las transformaciones que se logran interviniendo el vestuario, con las herramientas necesarias, pero, siempre pensando en el confort y la funcionalidad. ',
        imagen: require('@/assets/curso/tema1-imagen32.jpg'),
      },
      {
        titulo: '',
        texto:
          'La forma es la que logra capturar, comunicar, recrear, anunciar, expresar los sentimientos, pensamientos y esencia, identificando de donde parte la construcción de un proyecto de moda o vestuario, que siempre iniciará en la persona. ',
        imagen: require('@/assets/curso/tema1-imagen33.jpg'),
      },
      {
        titulo: '',
        texto:
          'La búsqueda es generar, transformar y producir nuevas historias que se registran en el tiempo y que necesitan de la sensibilidad para entender que el cuerpo es el portador y la forma, la herramienta para transformarlo.',
        imagen: require('@/assets/curso/tema1-imagen34.jpg'),
      },
    ],
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

<style lang="sass" scoped></style>
