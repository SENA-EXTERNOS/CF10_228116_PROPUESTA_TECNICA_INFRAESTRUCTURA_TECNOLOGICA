<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Prueba de funcionamiento
    p Una prueba de funcionamiento es la que determina el estado, funcionamiento y el propósito de la creación de un producto o servicio.  En el caso de las computadoras y los programas, es fundamental este proceso, ya que a través de esta prueba de funcionamiento se  permite identificar los requisitos para lo que fue creado y para el propósito claro de su uso y funcionalidad.  
    #t_6_1.titulo-segundo.color-primario.mt-5
      h2 6.1 Técnicas

    .row.justify-content-center.mb-5
      .col-md-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img1.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            p Se basa en el chequeo, verificación, control y funcionamiento tanto del #[i hardware] como del #[i software.] <br><br>
            p Para llevar a cabo estas pruebas de funcionamiento técnicas se debe seguir una lista de chequeo para revisar el funcionamiento técnico de cada una de sus partes en el caso de la máquina o del #[i hardware.] <br><br>
            p Para los programas o #[i software] se implementa de la misma manera una lista de chequeo o #[i Check List], la cual suele ser utilizada para la realización de comprobaciones rutinarias con el fin de verificar el funcionamiento a partir de una instalación correcta o limpia en el computador.

    <separador></separador>
    #t_6_2.titulo-segundo.color-primario.mt-5
      h2 6.2 Procedimiento de prueba

    p.mt-5.mb-5 Permite asegurar que cada componente de un sistema esté operando como debe y que el sistema esté funcionando de acuerdo con los requerimientos locales específicos. Un programa de prueba integral y bien estructurado es aquel que asegura que todos los componentes del sistema sean probados.             
    p.mb-5 Para la mayoría de los componentes tecnológicos se debe preparar una estrategia de prueba muy estructurada y cuidadosa antes de recibir los productos para efectuar las pruebas; la cual debe ser diseñada para probar que el producto ejecuta debidamente todas las funciones requeridas conforme a las especificaciones. Entre los pasos que puede comprender la estrategia para probar la nueva tecnología, se pueden considerar los siguientes:

    .row.justify-content-center.mb-5
      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema6/img2.png", alt="alt")
      .col-lg-8
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Paso 1") Asignar la responsabilidad de las pruebas a un comité técnico apropiado.

          p(numero="2" titulo="Paso 2") Recibir formalmente el sistema prototipo o la versión para producción.

          p(numero="3" titulo="Paso 3") Instalar el sistema en un espacio para prueba.

          p(numero="4" titulo="Paso 4") Realizar las pruebas programadas tomando debida nota si los componentes reúnen o no las especificaciones establecidas.

          p(numero="5" titulo="Paso 5") Integrar un panel de usuarios para probar el sistema en un ejercicio de simulación.

          p(numero="6" titulo="Paso 6") De ser el caso, incluir usuarios externos en el proceso de prueba.

          p(numero="7" titulo="Paso 7") Solicitar a los proveedores que corrijan cualquier problema identificado y lo presenten para una nueva prueba.

          p(numero="8" titulo="Paso 8") Si la prueba inicial con carga ligera indica que el producto es adecuado, conducir pruebas con carga pesada simulando hasta donde sea posible la carga esperada bajo condiciones reales.

          p(numero="9" titulo="Paso 9") Contar con auditores independientes que verifiquen la integridad de las fuentes de origen.

          p(numero="10" titulo="Paso 10") Ofrecer a los comités técnico y de administración un reporte de las pruebas.

          p(numero="11" titulo="Paso 11") Una vez que el sistema ha aprobado todas las pruebas y la administración ha dado su visto bueno, proceder a la implantación.

          p(numero="12" titulo="Paso 12") Si las pruebas solo han comprendido prototipos o cantidades limitadas del producto, la versión definitiva necesita ser probada otra vez antes de su instalación, especialmente cuando forma parte de una red o se encuentra geográficamente disperso.
    
        


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
