<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Cotizaciones técnicas
    #t_3_1.titulo-segundo.color-primario.mt-5
      h2 3.1 Concepto y tipos

    p.mt-5.mb-5 La cotización técnica es un documento formal en donde se detalla el precio de un bien o servicio para el proceso de compra o negociación. Determina el valor real de un bien, de un servicio o de un activo financiero. 
    .row.justify-content-center.mb-5
     .col-md-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img1.png', alt='alt')       
     .col-md-6
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta
            span 1
          | Se conoce también como el documento contable que contiene la información suministrada por un vendedor a solicitud de un cliente, en donde son entregados todos los detalles de los artículos o servicios y condiciones sobre las cuales se plantea la negociación.      
        li 
          .lista-ol--cuadro__vineta
            span 2
          | Es un documento formal informativo para realizar una futura compra.
        li 
          .lista-ol--cuadro__vineta
            span 3
          | Sirve para dar la información de un bien o servicio a adquirir.  
        li 
          .lista-ol--cuadro__vineta
            span 4
          | Es una oportunidad de venta.  
        li 
          .lista-ol--cuadro__vineta
            span 5
          | Es un presupuesto disponible para adquirir un producto, en donde existe la oportunidad de dar a conocer el costo aproximado del servicio o producto, incluyendo todos los datos como precio, lapsos de entrega, mano de obra, entre otros.                                         

    h5.mt-5  Con la definición del concepto, se hace necesario definir los tipos de cotizaciones técnicas

    .row.justify-content-center.mt-5
      .col-md-11.mt-5
        .cajon.color-secundario.color-secundario-cajon-verde.p-3
          .row.justify-content-center.p-3 
            .col-md-8
             p #[span.text-bold Cotización de las empresas o comercial:] Hace referencia al documento informativo que el departamento de compras de cualquier entidad emite o genera para llevar a cabo una negociación con otra empresa o personal natural.     
             p Este documento no genera ningún registro contable. Solo tiene por objetivo determinar el valor real o un precio justo aproximado al bien o al servicio con el que ambas empresas están negociando.
            .col-md-4
              .img-cajon-2 
                figure
                  img(src='@/assets/curso/temas/tema3/img2.png', alt='alt') 

    <separador></separador>
    #t_3_2.titulo-segundo.color-primario.mt-5
      h2 3.2 caracteristicas

    .row.justify-content-center.mt-5        
      .col-md-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img3.png', alt='alt')       
      .col-md-7.mt-5
        p Se recomienda hacer dos, tres o más cotizaciones, a diferentes proveedores para tener la idea que el bien o producto que ofrecen va a ser el mejor y el que se necesita. A veces, no es recomendable elegir la cotización que tiene el menos valor porque puede brindar un bien más económico con características inferiores en cuanto a la calidad, a diferencia de los otros.
        p Entre los principales elementos que componen una cotización suelen destacarse: 
    
    figure.mt-5
      img(src='@/assets/curso/temas/tema3/img4.png', alt='alt')         




        


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
