<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 9
      h1 Procedimientos logísticos de la organización

    .row.justify-content-center.mb-5
      .col-md-8
        .bloque-texto-b.color-bloque-texto-verde-primario
          .bloque-texto-b__texto
            p Permiten llevar a cabo la confianza y anticipación de los procesos para establecer una coordinación previa y anticipada a la gestión, mediante el análisis, estudio, costos y compras de los productos teniendo en cuenta la calidad en todos los procesos. 
        p.mt-5 La logística es como una mesa circular donde cada uno de los involucrados en las etapas habla de forma directa y aporta por el bien de la compañía u organización y del cliente final. Durante este proceso, el consumidor final espera validar tres aspectos del producto: tiempo, calidad y costo.
      .col.md-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema9/img1.png', alt='alt')   

    <separador></separador>
    #t_9_1.titulo-segundo.color-primario.mt-5
      h2 9.1 Protocolos

    .row.justify-content-center.mt-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/img2.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Los protocolos en el procedimiento logístico de una organización permiten activar diferentes alertas que se presenten de acuerdo con cada departamento involucrado y de la mesa logística.<br><br>
            p Estas alertas pueden ser, según la complejidad del caso:<br><br>
            ol.lista-ol--cuadro
              li 
              |#[span.text-bold.color-vineta-li--vineta >] Alerta verde que permiten prever la ocurrencia, alerta amarilla implica diferentes situaciones próximas de riesgo
              li 
              |#[span.text-bold.color-vineta-li--vineta >] Alerta roja indica la ocurrencia de una parte o de la totalidad del riesgo, presentando efectos radicales.
      
    <separador></separador>
    #t_9_2.titulo-segundo.color-primario.mt-5
      h2 9.2 Manejo de contingencias

    .row.justify-content-center.mt-5      
      .col-md-8
       p El plan de contingencias determina las medidas que debemos adoptar, los recursos necesarios y las actuaciones a desarrollar, con el objetivo principal de reducir los daños que se puedan producir en la organización. 
       p Un plan de contingencias es un conjunto de procedimientos alternativos a la operatividad normal de una entidad, cuya finalidad es la de permitir, en caso de presentarse un incidente de carácter interno o externo, enfrentar la emergencia de manera oportuna, adecuada y efectiva.  
      .col-md-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema9/img3.png', alt='alt') 

    .row.justify-content-center.bg_final.mg-img.mt-5.mg-img-final.t-img           
      .col-md-7     
        figure
          img(src='@/assets/curso/temas/tema9/img5.png', alt='alt') 


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

<style lang="sass"></style>
