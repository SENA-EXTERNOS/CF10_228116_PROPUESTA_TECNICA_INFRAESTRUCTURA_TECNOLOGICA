<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 8
      h1 Procedimientos administrativos de adquisición
    

    .row.justify-content-center.align-items-center.p-3.bg8
      .col-md-8.my-3
        p Los equipos tecnológicos adquiridos por una empresa, por lo general tendrán un período de obsolescencia no mayor a 5 años. El Departamento de Sistemas – TICS, apoyado en las solicitudes de las dependencias entrega un concepto técnico, es decir, da su opinión para el reemplazo de estos equipos, los cuales son enviados a bodega para ser dados de baja del inventario de <i>hardware</i> y <i>software</i>.
        p.mb-0 Llevar a cabo la emisión del concepto técnico también incluye datos de costo, beneficios e innovación, en cuanto a los equipos tecnológicos en una compañía. A partir de esa información, el departamento indicado anteriormente, se encargará de elaborar un plan o procedimiento administrativo para la adquisición de nuevos elementos tecnológicos, que conllevan a la actualización de la infraestructura de las tecnologías.
      .col-md-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/tema8/img1.png', alt='alt') 
    .row.justify-content-center.align-items-center    
      .col-md-5.mt-5
        figure
          img(src='@/assets/curso/temas/tema8/img2.png', alt='alt')         
      .col-md-7.mt-5
        p.text-bold.mt-5 Por lo anterior, este procedimiento administrativo de adquisición se encargará de tener en cuenta la ficha técnica, los proveedores las cotizaciones, garantías y comparaciones suministradas por el departamento correspondiente para tal fin, y con base en ello, poder adquirir los recursos que se precisen con las características que el departamento de TIC mencione en el diagnóstico.                      
    
    p.mt-5.mb-5  Para hacer la adquisición del #[i hardware] y el #[i software], se comienza llevando a cabo un estudio a una necesidad de la empresa, seguida de un análisis de ese requerimiento, el cual a su vez lleva a contactar proveedores y así a la toma de la decisión de adquirirlos de acuerdo con las ventajas o posibilidades de la organización, o la persona que está en el papel del consumidor.   
    p.mb-5 Para llevar a cabo lo anterior, es importante tener en cuenta los siguientes aspectos:

    .row.justify-content-center.mt-5                     
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema8/img3.png', alt='alt') 
      .col-md-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1 
            span Tanto el #[i hardware] como el #[i software] pueden variar en cuanto a marcas, velocidad y características, pero siempre con el propósito general de cumplir con las expectativas del consumidor y estos requieren ser adaptables.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Estos solo cumplen con una parte de lo esperado, ya que la otra fase está a cargo del proveedor, quien se encarga de dar credibilidad a su trabajo y de acuerdo con su disponibilidad y flexibilidad que ofrezca.
          li 
            .lista-ol--cuadro__vineta
              span 3
            span Es importante destacar que el modelo de compra de #[i software] de aplicación, y de #[i hardware], no escapa a los lineamientos generales de cualquier otro modelo de compra organizacional; y también, como es sabido por los administradores, el procedimiento de compras se caracteriza por tener un alto nivel de complejidad.  

    p.mt-5.mb-5 Desde una perspectiva genérica, podemos decir que el proceso de compra tanto para #[i hardware] y #[i software], en las pequeñas y medianas empresas, puede ser subdividido en las siguientes fases:
    .row.justify-content-center.mt-5
      .col-md-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Necesidades") Definición de necesidad de informatización (usuarios).

          p(numero="2" titulo="Equipos") Identificación de los equipos (hardware) en los que el software deberá trabajar.

          p(numero="3" titulo="Programas") Selección de los programas (software) adecuados.

          p(numero="4" titulo="Instalación") Instalación, operación y mantenimiento del sistema (#[i hardware, software] y usuarios).       
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema8/img4.png', alt='alt') 

    h3(data-aos="fade-right").mt-5 Principios para el procedimiento

    p.mt-5.mb-5 Los principios a tener en cuenta para el procedimiento administrativo de adquisición del <i>hardware</i> y <i>software</i> en una compañía, son los siguientes:                

      AcordionA(tipo="b" clase-tarjeta="bg_slyder_acordeon").mt-5
        .row(titulo="Flexibilidad:")
          .col-md-7.mb-4.mb-md-0.mt-5
            p Es la capacidad que tienen, tanto el <i>software</i> como el <i>hardware</i>, para adaptarse a múltiples propósitos en lugar de una sola función.  
            p Los productos flexibles de <i>hardware</i> y <i>software</i> proporcionan un valor adicional, ya que se pueden usar de maneras diferentes.
          .col-md-5
            figura(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema8/img5.png', alt='')

        .row(titulo="Escalabilidad:")
          .col-md-7.mb-4.mb-md-0.mt-5
            p Capacidad de adaptación y respuesta que tiene el <i>hardware</i> o <i>software</i> con respecto al rendimiento de este, a medida que aumentan de forma significativa el número de usuarios. La escalabilidad de un sistema es un aspecto complejo e importante del diseño, ya que se debe agregar <i>hardware</i> adicional o actualizar el existente sin modificar mucho la aplicación.           
          .col-md-5
            figura
              img(src='@/assets/curso/temas/tema8/img6.png', alt='')
        
        .row(titulo="Seguridad:")
          .col-md-7.mb-4.mb-md-0.mt-5
            p Protección propia tanto del <i>hardware</i> como del <i>software</i> ante las amenazas que podría afectar a equipos y programas.  El número de programas y/o aplicaciones que añadimos a nuestros computadores guardan todo tipo de información relevante sobre nosotros, un historial significativo de las consultas y visitas a los diferentes sitios de la web y el trabajo de las diferentes aplicaciones para realizar tareas a diario. Impedir que cualquier persona pueda acceder a ellos y robarnos nuestros datos es un campo fundamental de la ciberseguridad. 
          .col-md-5
            figura
              img(src='@/assets/curso/temas/tema8/img7.png', alt='')              

        .row(titulo="Sencillez:")
          .col-md-7.mb-4.mb-md-0.mt-5
            p Capacidad de comprensión, facilidad en el manejo y adaptabilidad gráfica de interpretación del entorno y de la información que es suministrada, para ser procesada y asimilada por el usuario final.
          .col-md-5
            figura
              img(src='@/assets/curso/temas/tema8/img8.png', alt='')    

        .row(titulo="Fiabilidad:")
          .col-md-7.mb-4.mb-md-0.mt-5
            p Capacidad de buen funcionamiento o rendimiento que tienen tanto el <i>hardware</i> como el <i>software</i>. Para ello, en el estudio de adquisición, se involucran ciertas características que poseen en cuanto a marca y configuración que potencializarán esta cualidad de fiabilidad.  
          .col-md-5
            figura
              img(src='@/assets/curso/temas/tema8/img10.png', alt='')   


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
