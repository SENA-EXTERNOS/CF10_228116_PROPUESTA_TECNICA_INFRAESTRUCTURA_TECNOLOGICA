<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Ficha técnica

    .row.justify-content-center.mb-5
      .col-md-8.mt-5
        .bloque-texto-b.color-bloque-texto-verde-primario
          .bloque-texto-b__texto
            p Una ficha técnica de producto o servicio es un documento en el cual se detallan todas las características y funciones de un producto, incluyendo su composición, características físicas y técnicas, tamaños, recomendaciones, modos de uso, y otros datos relevantes.  Allí podemos ver lo más importante acerca de ese elemento en una sola mirada o vista.
        p.mt-5 Es de gran utilidad a la hora de comercializar o dar a conocer un bien o servicio. Es importante que contenga información confiable que aporte datos claros y exactos y que dé seguridad al cliente que va a adquirir el servicio o producto. En ella se exponen todas las especificaciones de una materia prima o mercancía. Al proporcionar descripciones objetivas, técnicas y juiciosas, es útil para quienes realizan inspecciones o para quienes venden productos o servicios.            
      .col.md-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/img1.png', alt='alt') 
    h3(data-aos="fade-right") Características de una ficha técnica 
    .row.justify-content-center.mt-5
      .col-md-11.mt-5
        .cajon.color-secundario.color-secundario-cajon-verde.p-3
          .row.justify-content-center.p-3 
            .col-md-5
              .img-cajon 
                figure
                  img(src='@/assets/curso/temas/tema1/img2.svg', alt='alt')             
            .col-md-7
              p Las características de una ficha técnica son las siguientes:
              ol.lista-ol--cuadro
                li #[span.text-bold >] Información resumida y de mucha utilidad, lo más importante acerca de un producto, elemento o servicio.
                li #[span.text-bold >] Transmite información relevante.  
                li #[span.text-bold >] Información contenida debe ser verdadera y comprobada.
                li #[span.text-bold >] Los datos deben ser claros y exactos.
  
    h3(data-aos="fade-right").mt-5 Elementos de una ficha técnica
    p Los elementos que contiene una ficha técnica son:
    figure(data-aos="fade-left").mt-5
      img(src='@/assets/curso/temas/tema1/img3.png', alt='alt') 

    h3(data-aos="fade-right").mt-5 Usos y elaboración de la ficha técnica

    p.mt-5.mb-5 A continuación, exploraremos los usos y la elaboración de una ficha técnica.
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon").mt-5
      .row.justify-content-center(titulo="Usos").p-2
        .col-md-4
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img4.png', alt='alt')            
        .col-md-7
          p.mb-5 El uso de una ficha técnica, que involucra elementos de tecnología como dispositivos de #[i hardware] (máquina) y de #[i software] (programas), es bastante importante, ya que da una versión o panorama general y detalles específicos acerca del producto en cuanto a su composición, estructura física o intangible, funciones y su adecuada utilización, en busca de la calidad.
          p En un sistema de gestión de calidad suele aplicarse el uso de la ficha técnica a los productos, objetos o servicios, con el fin de tener un cliente satisfecho.

      .row.justify-content-center(titulo="Elaboración").p-2
        .col-md-4
          img.img-a.img-t(src='@/assets/curso/temas/tema1/img5.png', alt='alt')  
        .col-md-7          
          p Para la elaboración de una ficha técnica se debe tener en cuenta lo siguiente:
          ol.lista-ul
            li 
              i.fas.fa-angle-right
              p.mb-0 Los elementos que contiene de un producto pueden variar según la categoría, el sector empresarial, la marca y el público objetivo. Es por ese motivo que uno de los pasos más importantes para definir qué especificaciones incluir en la ficha técnica de un producto es la selección de la información que puede resultar más relevante para los consumidores. Además, el formato de la ficha técnica de un producto también está sujeto a las regulaciones y normas del comercio local e internacional.  
            li 
              i.fas.fa-angle-right
              p.mb-0 Es necesario presentar las características más importantes de lo que se está vendiendo, es decir, se deben incluir todos los puntos que definen el producto y que les permiten a los consumidores tener claro todo lo que necesitan saber sobre él.
            li 
              i.fas.fa-angle-right
              p.mb-0 Si se trata de un #[i e-commerce ], la ficha de un producto debe servir para atraer a los clientes que suelen adquirir productos y servicios de forma online. Es necesario que la ficha esté optimizada para aparecer en las búsquedas de los usuarios, ya que de esta manera es más sencillo llegar al público meta (Machuca, 2022).


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
