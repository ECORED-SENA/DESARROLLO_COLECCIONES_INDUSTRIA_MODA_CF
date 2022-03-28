<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diseño y planos técnicos

    figure.mb-5(data-aos="fade" data-aos-delay="500")
      img(src="@/assets/curso/tema2-imagen1.svg")

    p.mb-5(data-aos="fade" data-aos-delay="500") El dibujo técnico es la rama de representación que se emplea en la industria para representar los objetos a realizar. Su diferencia con la ilustración, es que el dibujo técnico es normalizado o estandarizado internacionalmente, ya que usa medidas precisas (llamadas cotas) que orientan la fabricación de los productos.
      br
      br
      | En el diseño de modas se emplea para hacer los planos técnicos (geometrales) tanto de las prendas como de los insumos y accesorios a emplear.
    
    Separador

    #t_2_1.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 2.1  Dibujo técnico: escuadra, ángulos y líneas paralelas

  .container.tarjeta.tarjeta--fucsia.p-4.p-md-5.no-borders.top.bottom(data-aos="fade" data-aos-delay="500")
    .row.justify-content-center.align-items-center
      .col-lg-8.mb-lg-0.mb-5
        p.mb-0.text-white El dibujo como medio de expresión, desempeña un papel de primer orden en las actividades humanas, puesto que antes de que se cree el proyecto, cualquiera que sea, es necesario diseñarlo con sus características e indicaciones en un dibujo. El dibujo técnico es una rama del dibujo, que se emplea en la industria, para representar objetos o ideas técnicas de carácter práctico, por medio de líneas, símbolos y convenciones se otorga información útil a quien llevará a cabo su materialización.
          br
          br
          | El trazo de dibujo técnico se logra mediante variadas líneas, se diferencia del dibujo a mano alzada por el uso de instrumentos, tales como: escuadra, cartabón, compás, transportador, lápices en diferentes durezas que van de la 2H a la 6B, escalímetro, entre otros; para conseguir la precisión en las medidas, ángulos y proporciones.
          br
          br
          i (Castellanos (2009); Concepto.de, s.f.; Parramón (2007); Pérez (1998); SENA; Barco; Martínez y Motivar (1984).
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2-imagen2.svg")

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-borders.top.bottom
    TabsC.color-primario.mb-5(data-aos="fade" data-aos-delay="500")
      .py-3.py-md-4.box-blue-soft-2(titulo="Para qué es el<br>dibujo técnico")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src="@/assets/curso/tema2-imagen3.jpg")
          .col-md-4
            a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/gCTalQvVmeA" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/tema1-imagen24.svg")
              .anexo__texto
                p <strong>Video.</strong> Para qué es el dibujo técnico
      .py-3.py-md-4.box-blue-soft-2(titulo="Dibujos<br>antiestrés")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src="@/assets/curso/tema2-imagen4.jpg")
          .col-md-4
            a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/GcaRZAsjIa4" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/tema1-imagen24.svg")
              .anexo__texto
                p <strong>Video.</strong> Dibujos antiestrés
      .py-3.py-md-4.box-blue-soft-2(titulo="Trazado de paralelas<br>y perpendiculares")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src="@/assets/curso/tema2-imagen5.jpg")
          .col-md-4
            a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/Kwb7U5sC9dI" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/tema1-imagen24.svg")
              .anexo__texto
                  p <strong>Video.</strong> Trazado de paralelas y perpendiculares.
      .py-3.py-md-4.box-blue-soft-2(titulo=" Uso de escuadra y cartabón,<br>paralelas y perpendiculares")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0
            figure.mb-5
              img(src="@/assets/curso/tema2-imagen6.jpg")
          .col-md-4
            a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/okjnJuAzG84" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/tema1-imagen24.svg")
              .anexo__texto
                p <strong>Video.</strong> Uso de escuadra y cartabón, paralelas y perpendiculares.

    .row.justify-content-center
      .col-md-4.mb-md-0.mb-5(data-aos="fade-down" data-aos-delay="500")
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Anexo_F_U2 Guia_Uso_de_las_Escuadras-DSR.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema2-imagen7.svg")
          .anexo__texto
            p <strong>Anexo.</strong> Dibujo y sistemas de representación. Uso de las escuadras
      .col-md-4.mb-md-0.mb-5(data-aos="fade-up" data-aos-delay="500")
        a.anexo.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Anexo_E _U2uso_escuadras.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema2-imagen7.svg")
          .anexo__texto
            p <strong>Anexo.</strong> Uso de escuadras como hacer rectas paralelas y perpendiculares
      .col-md-4(data-aos="fade-down" data-aos-delay="500")
        a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/user/profesoraltuna/videos" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Canal de YouTube - Profesor Altuna

    Separador

    #t_2_2.titulo-segundo
      h2 2.2  Líneas rectas, lenguaje de líneas y escalas

    p.mb-0(data-aos="fade" data-aos-delay="500") En el dibujo técnico se emplean diferentes tipos de líneas para describir las <strong class="color-primario">figuras de los objetos</strong> a realizar. Las más conocidas son:


  .container.tarjeta.tarjeta--fucsia.p-4.p-md-5.no-borders.top.bottom(data-aos="fade" data-aos-delay="500")
    .row.justify-content-center.align-items-center
      .col-lg-5.mb-lg-0.mb-5
        figure
          img(src="@/assets/curso/tema2-imagen8.svg")
      .col-lg-7
        p.mb-0.text-white.px-5 En el dibujo técnico se emplean varios tipos de líneas, a lo que se le denomina lenguaje o valor de líneas, estas han sido normalizadas o estandarizadas con el fin de que su interpretación sea la misma en cualquier lugar del mundo. Para la rotulación de los planos se emplea <strong class="color-primario">la letra técnica</strong>, que al igual que las líneas se encuentra <strong class="color-primario">normalizada</strong>.
          br
          br
          strong.color-primario La escala es la relación de tamaño entre el objeto real y el dibujo que lo está representando, 
          | ya que, si se va a dibujar una casa, un auto o una prenda de vestir, no se podrá dibujar a tamaño real (lo que se denomina escala 1:1) sino que deberá hacerse a una escala menor y así poder trazarlo en una pieza de papel.
          br
          br
          | (González, 2017; Pérez, 1998; SENA et al., 1984; Significados, s.f.).
  .container.tarjeta.tarjeta--rosa.p-4.p-md-5.no-borders.top.bottom(data-aos="fade" data-aos-delay="500")
    .row.justify-content-center.align-items-center
      .col-md-4.mb-md-0.mb-5
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/Qp_OPq1FQwk" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Letra normalizada - con audio.
      .col-md-4.mb-md-0.mb-5
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/2dzfmbITR7o" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Escalas - dibujo técnico.
      .col-md-4
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/Cihw88CFEr4" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Aprende sobre el uso del escalímetro en un minuto. Modos de uso del escalímetro.
  .container.tarjeta.tarjeta--azul.p-4.p-md-5.no-borders.top.bottom(data-aos="fade" data-aos-delay="500")
    .row.justify-content-center.align-items-center
      .col-md-3.mb-md-0.mb-5
        a.anexo.white.mb-4.mb-lg-0(href="https://www.significados.com/linea/" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Enlace.</strong> Significado de la línea.
      .col-md-3.mb-md-0.mb-5
        a.anexo.white.mb-4.mb-lg-0(href="https://dibujotecnico.com/lineas-normalizadas/" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Enlace.</strong> Líneas normalizadas.
      .col-md-3
        a.anexo.white.mb-4.mb-lg-0(href="https://www.mvblog.cl/apuntes/dibujo/dibujo-tecnico-tipos-de-linea-y-usos/" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Enlace.</strong> Dibujo técnico: tipos de líneas, grosores y usos.
      .col-md-3
        a.anexo.white.mb-4.mb-lg-0(href="https://www.youtube.com/c/ArturoGeometria/videos?view=0&sort=da&flow=grid" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Enlace.</strong> Geometría
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-borders.top.bottom

    Separador

    #t_2_3.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 2.3  Dibujo desde la observación, plano técnico y cotas

    //- .bloque-texto-g.inverse.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down" data-aos-delay="500")
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/tema2-imagen9.jpg')})`}"
    //-   )
    //-   .bloque-texto-g__texto.p-4
    //-     p.mb-0 El dibujo de objetos comienza por la observación, cuando se observa para dibujar se tienen en cuenta detalles, proporciones y la construcción en general de los mismos. Una vez observado se pasa al proceso de bocetos, en el que se hacen anotaciones a tener en cuenta al momento de realizar los planos.
    //-       br
    //-       br
    //-       | El plano técnico es la representación bidimensional (2D) de un objeto, consta de las siguientes vistas: planta, alzado, inferior, perfil derecho, perfil izquierdo y posterior, de las cuales se presentan las que sean requeridas; es decir, si llevan información se tienen en cuenta, de lo contrario se omiten.

    //- p.mb-5(data-aos="fade-down" data-aos-delay="500") Adicional a las vistas, se presentan los cortes, en los cuales se muestran partes internas o detalles de los productos.
    //-   br
    //-   br
    //-   | El proceso de acotado o marcación de las cotas es fundamental en el dibujo técnico, pues es con estas que se determinan medidas, diámetros, espesores, ángulos y proporciones. Un correcto acotado tiene el número preciso de las medidas, ni más, ni menos de las necesarias.
    //-   br
    //-   br
    //-   | Adaptado de Arturo Geometría (2019); Biguri (s.f.); Etiduela (s.f.); Raya & Dibujar Bien. (2013).
    
    .row.justify-content-center(data-aos="fade-down" data-aos-delay="500")
      .col-11
        figure
          img(src="@/assets/curso/tema2-imagen10.svg").mb-2
          figcaption Adaptado de Arturo Geometría (2019); Biguri (s.f.); Etiduela (s.f.); Raya & Dibujar Bien. (2013).

  .container.tarjeta.tarjeta--rosa.p-4.p-md-5.no-borders.top.bottom
    .row.justify-content-center.align-items-center
      .col-md-4.mb-5(data-aos="fade-right" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/8wm4YXIvGO0" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Cómo dibujar bien: secretos de las proporciones y medidas.
      .col-md-4.mb-5(data-aos="fade-down" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/R6olMYk8KYg" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Técnicas para aprender a dibujar - el trazo y ejercicios para calentar.
      .col-md-4.mb-5(data-aos="fade-left" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/cPNB1f1Cxhc" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Manejo de compás.
      .col-md-4.mb-md-0.mb-5(data-aos="fade-right" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/FYNESsXntAw" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Curso de Geometrales y Fichas Técnicas.
      .col-md-4(data-aos="fade-left" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/v1vjHB60c8Q" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Acotación - Normas básicas para aprender a acotar.

  .container.tarjeta.tarjeta--azul.p-4.p-md-5.no-borders.top.bottom
    .row.justify-content-center.align-items-center
      .col-md-3.mb-md-0.mb-5(data-aos="fade-right" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(href="https://ibiguridt.wordpress.com/temas/vistas/#vistas" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Enlace.</strong> Vista de piezas.
      .col-md-3.mb-md-0.mb-5(data-aos="fade-down" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(href="https://www.pinterest.es/pin/312366924129653797/?nic_v1=1aHzF6Qj7kxamPeUpupd8Ep8UM3Dv%2BquUKwn96BEBBExyc2kMhRYATeRbiK7aHT2Wk" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Enlace.</strong>  Imágenes en Pinterest - dimensión cota.
      .col-md-3(data-aos="fade-up" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(:href="obtenerLink('/downloads/GEOMETRALES.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Enlace.</strong> Geometrales.
      .col-md-3(data-aos="fade-left" data-aos-delay="500")
        a.anexo.white.mb-4.mb-lg-0(:href="obtenerLink('/downloads/Acotacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Enlace.</strong> Acotación.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-borders.top.bottom
    Separador

    #t_2_4.titulo-segundo(data-aos="fade" data-aos-delay="500")
      h2 2.4  Transformaciones geométricas, ángulos y proyecciones

    .bloque-texto-g.inverse.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade" data-aos-delay="500")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2-imagen11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En el dibujo técnico se recurre a la <strong class="color-primario">transformación geométrica de las formas</strong>, como son la traslación, rotación, simetría, entre otras, para el desarrollo de los planos y de las proyecciones tridimensionales de las piezas.
          br
          br
          strong.color-primario La proyección gráfica de un objeto en tres dimensiones 
          | se denomina 
          strong.color-primario isometría 
          | y, según el sistema normalizado en el que se trabaje, se realizan bajo proyecciones a diferentes ángulos y con relación a diferentes vistas.
          br
          br
          | (Biguri (s.f.); Castellanos (2009); Dibujo Técnico paso a paso (2019); Mulet (2014).
        
        .row.mt-5.justify-content-center
          .col-lg-6
            a.anexo.white.mb-4.mt-4.mb-lg-0(href="https://youtu.be/NummIe4XG2U" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/tema1-imagen24.svg")
              .anexo__texto
                p <strong>Video.</strong> Giro de una figura (Transformaciones geométricas: Igualdad).
    
  .container.tarjeta.tarjeta--rosa.p-4.p-md-5.no-borders.top.bottom(data-aos="fade-down" data-aos-delay="500")
    .row.justify-content-center.align-items-center
      .col-md-4.mb-5
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/CYK5rZE6hW4" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Traslación de figuras geométricas.
      .col-md-4.mb-5
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/NummIe4XG2U" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Giro de una figura (Transformaciones geométricas: Igualdad).
      .col-md-4.mb-5
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/un6QINDDsjs" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Como dibujar una perspectiva a dos puntos de fuga.
      .col-md-4.mb-md-0.mb-5
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/wQeEt2RFfK0" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Dibujar una figura en perspectiva isométrica con curva.
      .col-md-4
        a.anexo.white.mb-4.mb-lg-0(href="https://youtu.be/IREoh0PkgTw" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/tema1-imagen24.svg")
          .anexo__texto
            p <strong>Video.</strong> Perspectiva de 2 puntos para artistas.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.no-borders.top

  
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

<style lang="sass" scoped></style>
