<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 7
      h1 Inventarios para #[i Hardware] y #[i Software]
    p Un inventario para  #[i hardware], y tanto para #[i software], se conoce como el instrumento que recopila toda la información sobre los componentes físicos y lógicos de los diferentes dispositivos electrónicos y redes informáticas; es una lista detallada de todo el #[i hardware] y el #[i software] utilizado en una organización.
   
    .row.justify-content-center.mt-5
      .col-md-10
        figure
          img(src='@/assets/curso/temas/tema7/img3.svg', alt='alt')     

    .row.justify-content-center.mt-5 
      figure.mt-5.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
     
    .row.justify-content-center.bg_acordeon_tema7.mg-img.mt-5.img-img-gris.t-img 
      p.mb-5.mt-5.px-5 Para el inventario de #[i hardware] se requiere usar el modelo clásico de inventarios. Los diferentes campos de una tabla de Excel deben tener:   
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema7/img2.png', alt='alt')       
      .col-md-6 
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon").mt-5
          .row(titulo="ID del producto").p-2
            .row.justify-content-center
              p Cada producto estará marcado o señalizado para poder identificarlo. También sirve para que los empleados conozcan la procedencia del aparato; el serial del equipo en muchos casos permite su identificación.
          div(titulo="Tipo de producto").p-2
            .row.justify-content-center        
              p Se pueden clasificar en: ordenador de sobre mesa, portátil, teclado, ratón, tableta gráfica, móvil de empresa, pantalla, impresora, entre otros. 
          div(titulo="Marca").p-2
            .row.justify-content-center        
              p Marca del producto.
          div(titulo="Garantía").p-2
            .row.justify-content-center        
              p Fecha de validez de la garantía.
          div(titulo="Características").p-2
            .row.justify-content-center        
              p Descripción de cómo es el producto.   
          div(titulo="Estado").p-2
            .row.justify-content-center        
              p En servicio, reparada, fuera de servicio.
          div(titulo="Ubicación").p-2
            .row.justify-content-center        
              p Departamento de Recursos Humanos, Producción, Dirección, entre otros.
          div(titulo="Cantidad de productos").p-2
            .row.justify-content-center        
              p Número de productos que se poseen con esas características. 

    p.mt-5.mb-5  Por su parte, el inventario de #[i hardware] puede desglosarse tanto como consideremos, incluyendo los datos técnicos de la CPU, placa base, RAM, entre otros. Acá se encuentra toda la información que nos ayude a controlar el estado de los elementos que forman el TI de la empresa.                                      
    .row.justify-content-center.mb-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img4.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Una vez hemos realizado el inventario de #[i hardware] se puede complementar con el inventario de #[i software], lo cual es útil para controlar todos los programas informáticos que hemos adquirido y de los cuales poseemos licencia de uso. De este modo, se anotaría el número de licencia, fecha de uso, número de usuarios dados de alta y el precio de dicha licencia.
            
    .row.justify-content-center.bg_final.mg-img.mt-5.mg-img-final.t-img 
      .col-md-7.px-5
        p Hoy en día existen varias compañías que ofrecen #[i software] para realizar inventarios a la red, elementos tecnológicos y programas que conforman el departamento de las tecnologías de la información y comunicación en una pequeña, mediana o grande empresa.  Entre ellos tenemos para empresas grandes:  
        ol.lista-ol--cuadro
          li 
          |#[span.text-bold.color-vineta-li--vineta >] #[span.text-bold Total Network Inventory 3:] Es un #[i software] que permite realizar la auditoria del computador y el inventario del #[i software]. Suministra la información general de cualquiera de los equipos de la red y el programa instalado en cada uno de ellos.
          li 
          |#[span.text-bold.color-vineta-li--vineta >] #[span.text-bold Forti One:] Ejecuta el inventario informático del #[i hardware] y #[i software].        
      .col-md-5.px-5
        figure
          img(src='@/assets/curso/temas/tema7/img5.png', alt='alt')                     

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
