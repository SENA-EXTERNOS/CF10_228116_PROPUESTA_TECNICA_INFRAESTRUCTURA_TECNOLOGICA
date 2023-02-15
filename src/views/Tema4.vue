<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Catálogos de fabricantes

    .row.justify-content-center.mb-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.svg')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p El catálogo de fabricantes es un tipo de <i>brochure</i> o folleto de comercialización que enumera los detalles esenciales del producto, con el fin de ayudar a los compradores a tomar una decisión de compra. Estos detalles incluyen características del producto como descripciones, dimensiones, precio, capacidad, peso, disponibilidad, color, marcas, reseñas de clientes, entre otros.<br><br>
            p Un ejemplo de un catálogo de fabricantes es el mercado de la empresa Amazon, en donde se puede obtener una gran cantidad de información (precio, dimensiones, ofertas/descuentos, reseñas) con un solo clic.
            
    p ¿Quiénes distribuyen este tipo de catálogos?

    p Estos catálogos llegan a las empresas por medio de los proveedores, quienes pueden ser los mismos fabricantes del producto/servicio o los distribuidores autorizados.

    h3(data-aos="fade-right").mt-5 Proveedores
    p.mt-5 Un proveedor es una empresa o persona que suministra el material o artículos necesarios e indispensables para realizar la actividad económica para prestar un servicio o fabricación de un producto. 
    p También se conoce como la figura que suministra o abastece determinados productos o servicios a negocios, compañías, empresas o a personas naturales, para que los utilicen, o bien para que los trasformen o los pongan a la venta.
    p.mb-5 A continuación, se presentan algunos ejemplos de los tipos de proveedores y conceptos claves para establecer una relación con ellos:
    .row.justify-content-center.mb-5
      .col-md-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img2.png', alt='alt')         
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon").mt-5
          .row(titulo="Proveedores de insumos").p-2
            .row.justify-content-center
              p Son organizaciones dedicadas a la producción de insumos, por ejemplo, los proveedores de madera, que abastecen a una empresa de muebles para crear los productos y poderlos comercializar.           
          div(titulo="Proveedores tecnológicos").p-2
            .row.justify-content-center        
              p Estos proveedores distribuyen suministros tecnológicos como piezas, partes o equipos; por lo general son empresas autorizadas por la marca. Algunos de ellos son Makro, Ktronix, Éxito, Quality, entre otros.
          div(titulo="Claves para la relación con los proveedores").p-2
            .row.justify-content-center        
              p Los conceptos claves que se deben desarrollar con los proveedores, son: establecer lazos de confianza y alternativas de adquisición de los productos, capacidad de respuesta, historial de satisfacción del cliente, reclamos y certificaciones de calidad.
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
