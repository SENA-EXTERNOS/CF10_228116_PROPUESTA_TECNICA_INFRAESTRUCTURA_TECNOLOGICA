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
      .col-md-11
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Estimado aprendiz: en este componente formativo encontrará las herramientas necesarias para acercarse a la verificación y evaluación de la Propuesta técnica de la infraestructura tecnológica proporcionada por proveedores y fabricantes, basada en elementos fundamentales para poderla interpretar, analizar y evaluar a través de la aplicación de los conocimientos claros y sencillos, según ejemplos del entorno real de las pequeñas, medianas y grandes empresas.

      .col-md-6.mt-5
        p.mt-5.mb-5 El ir abordando cada una de las temáticas de este componente como son ficha técnica, cuadro comparativo, cotizaciones, catálogos de fabricantes, garantía, inventarios de hardware y software, procedimientos administrativos y logísticos y la seguridad de la información, le facilitará la adquisición de programas de software y equipos de cómputo con tecnologías de punta que incursionan en el mercado y que cuentan con garantías que proyectan la confianza en la consecución de estos.
        p Por favor explore con atención el siguiente video que le mostrará lo que debe tener presente a la hora de la selección y adquisición de equipos de #[i hardware] y programas de #[i software.]
      .col-md-5.mt-5
        figure(data-aos="zoom-left")
          img(src='@/assets/curso/temas/introduccion-2.png', alt='alt')

    .row.justify-content-center.mt-5
      .col-md-11         
        figure.mt-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            

    
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
