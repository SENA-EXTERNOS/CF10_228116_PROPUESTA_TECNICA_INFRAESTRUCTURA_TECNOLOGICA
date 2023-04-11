<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mt-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Estimado aprendiz, en este componente formativo encontrará las herramientas necesarias para acercarse a la verificación y evaluación de la propuesta técnica de la infraestructura tecnológica, suministrada por proveedores y fabricantes, basada en elementos fundamentales para poderla interpretar, analizar y evaluar a través de la aplicación de los conocimientos claros y sencillos, según ejemplos del entorno real de las pequeñas, medianas y grandes empresas.

    p.my-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zKLQxejRQ-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
