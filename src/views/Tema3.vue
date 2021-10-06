<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Figurín y ropero

    SlyderC(:datos="datosSlyder")

    Separador

    #t_3_1.titulo-segundo
      h2 3.1  La ilustración en el mundo de la mod

    p.mb-5 La ilustración en el mundo de la moda, se convierte en la herramienta fundamental utilizada tanto por los grandes diseñadores como por los departamentos de diseño de las marcas de moda. Cada uno desarrolla su propia técnica, bien sea manual o digital, pero siempre teniendo presente que lo más importante es la expresión, el detalle, el manejo de color y la coherencia con el concepto desarrollado, esto permite generar armonía en toda la trazabilidad de la colección.

    figure.mb-5
      img(src="@/assets/curso/tema3-imagen6.jpg")
      figcaption Nota. Figurín digital. https://mymodernmet.com/es/estilos-dibujo/  (2019)

    .row.justify-content-center.align-items-center.mb-5.box-rosa-soft.py-5
      .col-lg-7
        p.mb-0 Los dibujos deben realizarse con toda precisión y perfección para ser utilizados en la ficha técnica y permitir la interpretación exacta de la idea con sus detalles, los cuales pueden ser tan complejos que requieran ampliarse en dibujos adicionales denominados acercamientos, lupas o zoom.
          br
          br
          | El propósito de la ilustración en el mundo de la moda es comunicar las ideas del creativo con respecto a la inspiración de la colección, servir de fuente de información técnica para el desarrollo y despiece de los patrones, informar de las características técnicas, selección de maquinaria, proceso productivo; interpretado inicialmente desde el dibujo plano, de tal forma que sea atractivo y deseable, con proyección hacia el mercado objetivo.
          br
          br
          | Lo más importante es que quien realice la ilustración tenga conocimiento de los procesos productivos, entre los que se encuentra: patronaje, maquinaria, materiales y ensamble de prendas; lo anterior debido a que el dibujo es parte integral del diseño de vestuario y esta información le permite al ilustrador interpretar y plasmar los detalles que caracterizan la idea a desarrollar.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3-imagen7.svg")

    p.mb-5 En esencia, el objetivo final de la Ilustración de moda es desarrollar un lenguaje tan único y propio como su firma, creando un estilo con la espontaneidad e imaginación que requiere la moda.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_3_2.titulo-segundo
      h2 3.2  Técnicas de ilustración y expresión de la figura humana

    .bloque-texto-g.inverse.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3-imagen8.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 
          strong ¿Qué es el figurín?
          br
          br
          | El figurín es la representación de la figura humana con una idea de indumentaria, poniendo énfasis en el equilibrio total entre el estilo de vestir, el sentido de volumen y otros elementos, que ayudan a mantener unas proporciones y poses coherentes, que se ajustan para expresar distintos ideales y conceptos.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3-imagen9.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 
          strong Y en la actualidad…
          br
          br
          | En la actualidad y en décadas pasadas, la composición, los materiales y los gestos de los figurines cambian en respuesta a las mismas consideraciones que afectan al diseño de prendas, reflejando las condiciones sociales de una época particular, por ejemplo, la revolución sexual de la década de 1960 suscitó que la ilustración de moda se volviera más atrevida.

    .bloque-texto-g.inverse.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3-imagen10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 
          strong El rol del ilustrador
          br
          br
          | Por lo anterior, el ilustrador debe seleccionar la técnica de acuerdo al textil en el que se elaborará la prenda, por ejemplo, en una transparencia se usa una técnica a base de agua como acuarela, ecoline, de acuerdo a lo que quiera expresar o representar.
    
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3-imagen11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 
          strong Las técnicas de ilustración
          br
          br
          | Las técnicas de ilustración están relacionadas con la expresión, pose, sentimiento y actitud reflejados en el figurín: rigidez, suavidad, delicadeza, movimiento en la figura humana.
          br
          br
          | Se clasifican en técnicas secas (lápiz, lápices de colores, lápices conté, pasteles, crayolas), siendo el lápiz la técnica más utilizada, por la facilidad en el manejo, corrección y evolución en el dibujo; técnicas húmedas (marcadores o rotuladores, acuarela, acrílico, ecoline) y otras técnicas no convencionales (el té, el café, el maquillaje); cada marca utiliza estas técnicas dependiendo del segmento o perfil de usuario al que va dirigida.
    
    .bloque-texto-c.color-acento-contenido.p-4.mb-5
      i.fas.fa-quote-right
      h4.text-regular.mb-2 Utilizada por los diseñadores para plasmar sus ideas sobre el papel, la ilustración de figurines de moda a menudo requiere dibujos rápidos y gestuales que transmiten la esencia de una prenda. Estas ilustraciones suelen presentar figuras largas y alargadas para imitar la altura de las modelos y, como el enfoque está en la ropa –y no en los rostros– los rasgos faciales a menudo son escasos. Dentro de la propia ilustración de moda existen muchos estilos diferentes, algunos más rudimentarios y otros más pulidos.
      .h5.mb-0 (Vargas, 2019)

    .carousel-additional
      #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
        .carousel-inner
          .carousel-item.active
            .row.justify-content-center
              .col-10
                figure
                  img(src="@/assets/curso/tema3-imagen12.svg")
          .carousel-item
            .row.justify-content-center
              .col-10
                figure
                  img(src="@/assets/curso/tema3-imagen13.svg")
          .carousel-item
            .row.justify-content-center
              .col-10
                figure
                  img(src="@/assets/curso/tema3-imagen14.svg")
          .carousel-item
            .row.justify-content-center
              .col-10
                figure
                  img(src="@/assets/curso/tema3-imagen15.svg")
          .carousel-item
            .row.justify-content-center
              .col-10
                figure
                  img(src="@/assets/curso/tema3-imagen16.svg")
          .carousel-item
            .row.justify-content-center
              .col-10
                figure
                  img(src="@/assets/curso/tema3-imagen17.svg")

        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next

    .row.justify-content-center
      .col-lg-3
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Ilustración a mano.

    Separador

    #t_3_3.titulo-segundo.mb-0
      h2 3.3  Estructuras del figurín, principios y técnicas para elaborar figurines

  .container.tarjeta.tarjeta--rosa.p-4.p-md-5.no-borders.top.bottom

    .row.justify-content-center.align-items-center.mb-5.tarjeta--rosa-box
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0.p-5
          strong Dibujar para la moda: “dibujo de moda”
          br
          br
          | Los antiguos griegos consideraban que la belleza era una cuestión de proporciones perfectas. Según esta concepción, el dibujo de la figura clásica utilizaba la cabeza, -vista en relación con el cuerpo como un todo- como una unidad de medida para determinar puntos de referencia y amplitudes para las diferentes partes del cuerpo. “A diferencia del Arte, el dibujo de moda requiere una evaluación menos objetiva de la realidad. El figurín de moda, o croquis, es infinitamente maleable, ideal para visualizar estándares de belleza que a menudo son inalcanzables.”
          br
          br
          | (Wesen, 2012, p.33)
      .col-lg-5(style="background-color: white!important")
        figure
          img(src="@/assets/curso/tema3-imagen18.jpg")
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul-box
      .col-lg-5(style="background-color: white")
        figure
          img(src="@/assets/curso/tema3-imagen19.jpg")
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0.p-5
          strong ¡El figurín es la herramienta!
          br
          br
          | El figurín es una herramienta para visualizar los conceptos de diseño, la forma en que se estilice debe servir al propósito de la marca o del creativo de moda, lo importante es la coherencia de la composición de los figurines que reflejen el perfil del usuario.
    .row.justify-content-center.align-items-center.mb-5.tarjeta--rosa-box
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0.p-5
          strong Patrón de medida único
            br
            br
            | La cabeza, es el patrón de medida elegido para la ilustración de la moda, porque es la parte del cuerpo humano que menos transformaciones tiene durante el crecimiento, por esta razón se elige como canon de medida. Siendo la medida normal en proporciones siete cabezas y media, la ideal ocho cabezas y media para iniciar la ilustración de un figurín, nueve, diez, once y doce cabezas una estilización de la figura y decisión personal. La clave está en experimentar y luego escoger las proporciones que más convengan.
      .col-lg-5(style="background-color: white")
        figure
          img(src="@/assets/curso/tema3-imagen20.jpg")
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul-box
      .col-lg-5(style="background-color: white")
        figure
          img(src="@/assets/curso/tema3-imagen21.jpg")
      .col-lg-7.mb-5.mb-lg-0
        p.mb-0.p-5
          strong Boceto y proporciones
          br
          br
          | La representación de la figura humana y sus proporciones es un boceto como la herramienta más sencilla para tomar notas y transmitir o recordar ideas, diseños o tendencias de moda.
          br
          br
          | El ilustrador conocerá las posiciones básicas del cuerpo: dónde colocar las líneas de cadera en relación con la línea de los hombros, cómo girar la pierna y el brazo para indicar movimiento y cómo vestir el cuerpo con una gran variedad de estilos.
          br
          br
          | En la actualidad, se permite la transformación del figurín con características físicas más acordes a la realidad de los usuarios de las diferentes prendas de vestir; es decir, con siluetas más reales, alcanzando la democratización de la moda (figuras obesas, delgadas, embarazadas, estatura alta, estatura baja, cuerpos mutados, cuerpos protésicos, entre otros).
          br
          br
          | El material complementario “Cómo dibujar figurines de moda desde cero” en donde podrá profundizar un poco sobre la construcción de figurines.
    .row.justify-content-center
      .col-lg-6
        a.anexo.white.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Cómo dibujar figurines de moda desde cero (Proporciones) Curso de dibujo

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-borders.top.bottom
    
    Separador

    #t_3_4.titulo-segundo
      h2 3.4  Ropero, desarrollo e interpretación por medio de dibujos planos o geometrale

    .cajon.color-acento-botones.p-4.mb-4
      p La técnica de dibujo plano es la más utilizada por todo tipo de personas que quieren plasmar sus ideas de una forma inmediata; desarrollarla, será el inicio de una creación de vestuario.

    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-5
        figure
          img(src="@/assets/curso/tema3-imagen22.jpg")
      .col-lg-7
        p.mb-5 El perfeccionamiento de esta técnica es la que se llama “Ropero”, que se caracteriza por tener una línea clara y precisa de cada uno de los detalles que tiene la prenda, siempre teniendo en cuenta el control de las proporciones que se manejan con reglas a escala para mayor exactitud de las medidas; sin embargo, en la mayoría de los casos se realiza a mano alzada y es el dibujante con su experiencia el que logra equilibrar las dimensiones del dibujo.
          br
          br
          | Para lograr que la ilustración entregue toda la información pertinente al desarrollador de moda, es importante que este conozca de: patronaje, proporciones, confección de prendas y materiales e insumos; porque son estos elementos los que le dan la validez al dibujo por la forma como se caracterizan; bien sea en costuras, largos de prendas, ruedos, dobladillos, cortes, alforzas, recogidos, pliegues y accesorios como hebillas, botones y cierres, entre otros.
          br
          br
          | La interpretación que el dibujante logre plasmar en el boceto facilitará el buen desarrollo que se dará en todos los departamentos de la empresa, los cuales toman del dibujo la parte que les corresponde: patronaje, trazo, corte, ensamble, calidad y terminación; logrando la producción homogénea de las prendas a confeccionar.
        
        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular “Los bocetos planos se utilizan para las presentaciones y para la producción, en la que se requiere un mayor grado de información técnica
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 (Wesen, 2012, p.7)

    .row.justify-content-center
      .col-lg-10
        .box-rosa-soft.p-5.mb-4
          p.mb-4.text-center
            strong Fichas técnicas diseño de modas
          .row.justify-content-center
            .col-lg-6.mb-4
              figure
                img(src="@/assets/curso/tema3-imagen23.png")
            .col-lg-6.mb-4
              figure
                img(src="@/assets/curso/tema3-imagen24.png")
            .col-lg-6
              figure
                img(src="@/assets/curso/tema3-imagen25.png")
        .row.justify-content-center
          .col-lg-6.mb-lg-0.mb-5
            figure
              img(src="@/assets/curso/tema3-imagen26.svg")
          .col-lg-6
            figure
              img(src="@/assets/curso/tema3-imagen27.svg")
  
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'La ilustración y el figurín existen desde épocas muy remotas. El dibujo ha acompañado a la humanidad en todas las civilizaciones siendo la herramienta más utilizada para expresar ideas, incluso para mostrar el poder económico de la alta sociedad, se han desarrollado técnicas especializadas con las que se han creado grandes obras de arte. Diseñadores y marcas de moda han utilizado la ilustración para mostrar sus colecciones y generar contacto visual de las ideas con el mundo exterior.',
        imagen: require('@/assets/curso/tema3-imagen1.jpg'),
      },
      {
        titulo: '',
        texto:
          "A principios del siglo pasado, aparecen las grandes revistas especializadas en moda, como Vogue, Elle, Vannity Fair, Harper's Bazaar, Telva, Glamour, Advance, Moda de Paris, Francois, Moda Práctica, Las Ziveiteilige Klaird entre otras, que incluyeron en sus portadas dibujos en figurín y dibujos planos, bocetos, esquemas, pinturas, permitiendo incursionar y desarrollar el uso de técnicas de ilustración y color hasta convertirlas en referentes para los creativos en el mundo de la moda, en su momento.",
        imagen: require('@/assets/curso/tema3-imagen2.jpg'),
      },
      {
        titulo: '',
        texto:
          'La ilustración de moda es una tarea que se encomienda a dibujantes especializados que tienen como función la expresión bidimensional de prendas de vestir en forma detallada. El dibujo en plano consiste en un boceto que representa la parte frontal, el perfil y la parte posterior, destacando el corte, la línea y los detalles de la prenda, forros y acabad os. Este tipo de representación (ropero) es de gran utilidad para el patronista, que debe interpretar y recrear con la máxima fidelidad la idea creada por el diseñador. El dibujo en plano es una especie de enlace entre el boceto y la prenda acabada y en ocasiones los creativos prefieren este tipo de dibujo al figurín. ',
        imagen: require('@/assets/curso/tema3-imagen3.jpg'),
      },
      {
        titulo: '',
        texto:
          'En la actualidad se han desarrollado otras técnicas para la actividad del dibujo plano y figurines, evolucionando a la utilización de programas digitales especializados en facilitar herramientas para el dibujo; llegando a construcciones en 3D con mayor realismo que permiten visualizar la prenda hasta el punto de casi tocarla, entrando en el mundo digital como interfase entre el creativo y el desarrollador. El figurín y el dibujo plano son herramientas indispensables para promocionar colecciones, marcas y productos de moda. ',
        imagen: require('@/assets/curso/tema3-imagen4.jpg'),
      },
      {
        titulo: '',
        texto:
          '“Una buena ilustración no es solamente un buen dibujo. Una ilustración siempre tiene una función, siempre hace algo: contar una historia, vender un producto, describir un entorno, enseñar el funcionamiento de algo, etc.” (Redondo, 2014, p. 3).',
        imagen: require('@/assets/curso/tema3-imagen5.jpg'),
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
