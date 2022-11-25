<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Cuadro comparativo
    
    #t_2_1.titulo-segundo.color-primario.mt-5
      h2 2.1 Concepto y tipos

    .row.justify-content-center.mt-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Es un instrumento de estudio que permite hacer comparaciones visuales de un elemento entre sus ventas y desventajas. Posee entre dos o más elementos, productos o servicios de manera general donde se visualiza la mejor alternativa a elegir.<br><br>
            p El cuadro comparativo está representado por una tabla en donde se organiza la información de forma ordenada mediante columnas o cabeceras que incluyen elementos a comparar entre sí, y filas que hacen referencia al concepto o descripción de cada variable, haciendo posible identificar las semejanzas y diferencias de dos o más conceptos, elementos o hechos, facilitando el procesamiento de los datos.
    
    <separador></separador>
    #t_2_2.titulo-segundo.color-primario.mt-5
      h2 2.2 Usos y elaboración

    .row.justify-content-center.mt-5
      AcordionA(tipo="b" clase-tarjeta="bg_slyder_acordeon")
        .row(titulo="Usos")
          .col-md-7.mb-4.mb-md-0
            p Se utiliza básicamente para comparar la información con el fin de facilitar la identificación de las características semejantes y diferentes en los conceptos.
            p Suelen usarse para:
            ol.lista-ol--cuadro
              li #[span.text-bold.color-vineta-li--vineta >] Adquirir nuevos conocimientos y para memorizar contenidos de forma fácil, clara y rápida.
              li #[span.text-bold.color-vineta-li--vineta >] Ayuda a organizar el pensamiento.  
              li #[span.text-bold.color-vineta-li--vineta >] Permite clasificar y categorizar la información.                           
          .col-md-5
            figura(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='')

        .row(titulo="Elaboración")
          .col-md-7.mb-4.mb-md-0
            p Para elaborar un cuadro comparativo se debe tener en cuenta lo siguiente:
            ol.lista-ol--cuadro
              li #[span.text-bold.color-vineta-li--vineta >] Identificar los elementos que se desean comparar.
              li #[span.text-bold.color-vineta-li--vineta >] Enmarcar o determinar los parámetros a comparar.  
              li #[span.text-bold.color-vineta-li--vineta >] Identificar y escribir las características de cada concepto, hecho o elemento a comprar.  
              li #[span.text-bold.color-vineta-li--vineta >] Enunciar afirmaciones de semejanzas y diferencias más relevantes de los conceptos comparados.
          .col-md-5
            figura(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='')


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

<style lang="sass"></style>
