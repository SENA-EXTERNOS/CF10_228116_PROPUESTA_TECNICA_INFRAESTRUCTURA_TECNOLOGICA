<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Garantía

    .row.justify-content-center.mb-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            p La garantía es el respaldo que existe ante la adquisición de un bien o servicio por daños de fabricación por parte del proveedor.<br><br>
            p Es una obligación temporal donde el proveedor del bien o servicio debe responder durante un tiempo determinado por el producto suministrado en cuanto al proceso de fabricación, calidad, idoneidad, seguridad y material utilizado en la fabricación del producto vendido o del servicio prestado. En caso de presentarse un reclamo se debe solicitar la garantía al vendedor y posteriormente, si el caso lo amerita, al proveedor que fabricó el producto.
            
    h3(data-aos="fade-right").mt-5 Características de la garantía           
    p.mt-5.mb-5 La garantía debe contener los siguientes elementos:

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Duración" :icono="require('@/assets/curso/temas/tema5/img2.png')")
        .row.px-4
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema5/img6.png" alt="")
          .col-md-6.mb-4.mb-md-0.text-m-t           
            p Tiempo o periodo de la garantía al realizar la compra del mismo producto o servicio.
      .py-4.py-md-5(titulo="Cobertura" :icono="require('@/assets/curso/temas/tema5/img3.png')")
        .row.px-4
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema5/img7.png" alt="")        
          .col-md-6.mb-4.mb-md-0.text-m-t
            p A qué se tiene derecho si producto adquirido presenta fallas. Por ejemplo, cambio del producto, reparación, entre otros.

      .py-4.py-md-5(titulo="Derecho de desistimiento" :icono="require('@/assets/curso/temas/tema5/img4.png')")
        .row.px-4
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema5/img8.png" alt="")         
          .col-md-6.mb-4.mb-md-0.text-m-t
            p El tiempo que se tendrá para retractarse de la compra del producto por algún defecto o fallo de este.

      .py-4.py-md-5(titulo="Otros asuntos a tener en cuenta" :icono="require('@/assets/curso/temas/tema5/img5.png')")
        .row.px-4
          .col-md-6.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema5/img9.png" alt="")          
          .col-md-6.mb-4.mb-md-0.text-m-t
            p Garantía ampliada o extendida. Aumenta el tiempo que dura la cobertura, después de que se venza el plazo de la primera garantía.

    h3(data-aos="fade-right").mt-5 Tipos de garantías

    p.mt-5.mb-5 Los dos tipos de garantías existentes son:
    .row.justify-content-center.mb-5
      .col-md-6 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img10.png", alt="alt").img100
            .col
              h5 Garantía Legal: 
              p Es la obligación que reside en el estatuto del consumidor, a cargo del proveedor y productor de responder por la calidad y la idoneidad del producto.
      .col-md-6 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema5/img11.png", alt="alt").img100
            .col
              h5 Garantía Suplementaria:  
              p Es aquella que es extra a la legal y la amplía o la mejora, ya sea de forma gratuita u onerosa.

    h3 Utilidad
    p.mt-5.mb-5  Es la funcionalidad que ofrece un producto o servicio para satisfacer una necesidad particular. Se utiliza para determinar si un servicio es «adecuado para su propósito». Para tener utilidad, un servicio debe respaldar el desempeño del consumidor o eliminar las limitaciones del consumidor; muchos servicios hacen ambas cosas.
    p(data-aos="fade-right") ¿Cómo se relacionan la utilidad y la garantía?
    .row.justify-content-center.mt-5
      .col-md-11.bg_cajon.mt-5
          .row.justify-content-end.p-3
            .col-md-7.mt-4
              p.text-bold Tanto la utilidad como la garantía son esenciales para que un servicio facilite los resultados deseados y, por lo tanto, ayude a crear valor.
              p Por ejemplo, un parque temático recreativo puede ofrecer muchas atracciones diseñadas para brindar experiencias emocionantes a los visitantes del parque (servicios públicos), pero sí una cantidad significativa de atracciones no está disponible con frecuencia, debido a dificultades mecánicas, el parque no está cumpliendo con la garantía (es no apto para su uso) y los  consumidores no recibirán el valor esperado. 
              p Asimismo, si las atracciones están siempre en funcionamiento durante las horas anunciadas, pero no tienen características que brinden los niveles de emoción esperados por los visitantes, la utilidad no se cumple aunque la garantía sea suficiente. Nuevamente, los consumidores no recibirían el valor esperado.                       
            
              
    h3.mt-5 Riesgos
    p.mt-5.mb-5  Se define como un evento inesperado en un momento. Si nos enfocamos en la parte tecnológica podemos concluir que dicho riesgo hace referencia a un producto o a un #[i software] (programa), en el cual se pasó por alto tener en cuenta ciertos detalles en su construcción, ya sea para el diseño del programa o para la elaboración de un producto.
    p Para los riesgos relacionados con la eficiencia del desempeño que afectan la calidad del producto, lo más importante a tener en cuenta es lo siguiente:

    .row.justify-content-center.mt-5
      .col-md-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Identificar los riesgos de la calidad del producto, centrándose en características como comportamiento temporal, el uso de recursos y la capacidad.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Evaluar los riesgos identificados, asegurándose de que se abordan las categorías de arquitectura pertinentes. Evaluar el nivel global de riesgo para cada riesgo identificado en términos de probabilidad e impacto, utilizando criterios claramente definidos.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Adoptar las medidas adecuadas para mitigar los riesgos de cada elemento en función de la naturaleza del elemento del riesgo y del nivel de este.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Gestionar los riesgos de forma continua para garantizar que estos se mitiguen adecuadamente antes de su entrega.  Realizar pruebas correspondientes a su funcionamiento.

      .col-md-5   
        figure
          img(src='@/assets/curso/temas/tema5/img13.png', alt='alt') 
     
        


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
