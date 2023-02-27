<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 10
      h1 Seguridad de la información
  
    p.mt-5.mb-5 Es la preservación de la confidencialidad, integridad y disponibilidad de la información. Hoy en día la información corporativa es uno de los activos más importantes que maneja una empresa, convirtiéndose en una herramienta fundamental del sistema de gestión que garantiza la seguridad y resguardo de esta.  A diario estamos amenazados por riesgos que ponen en peligro la integridad de la información y con ello la viabilidad del negocio.
    .row.justify-content-center.mt-5
      .col-md-5
        figure(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema10/img1.png', alt='alt')
      .col-md-7
        .cajon.color-secundario.color-secundario-cajon-verde.p-3
            .row.justify-content-center.p-3 
              p La importancia de la seguridad informática según la autora Agustina (2019):
              p “Los sistemas pueden contener datos confidenciales, información sobre los procesos y operaciones organizacionales, planes estratégicos y de negocios, secretos comerciales y demás información de vital importancia. Sin embargo, el valor de dicha información se pierde en gran escala si la misma es conocida por personas externas a la empresa”. (p.24)
              p La seguridad informática tiene un papel muy esencial para las empresas, ya que cuida la privacidad, administra y organiza la información, como el autor Carvajal lo menciona (2019): #[b #[i “En un mundo en el que las tecnologías de la información y comunicación (TIC) parecen estar presentes en casi todas nuestras actividades diarias poco se ha reflexionado sobre los riesgos que pueden representar las mismas para los seres humanos” (p.19)]].     
        p.mt-5 Un sistema de gestión de seguridad de la información nos va a permitir:
         ol.lista-ol--cuadro
            li 
            |#[span.text-bold.color-vineta-li--vineta >] Seguridad
            li 
            |#[span.text-bold.color-vineta-li--vineta >] Análisis de la estructura de los sistemas de la información
            li 
            |#[span.text-bold.color-vineta-li--vineta >] Controlar la información
            li 
            |#[span.text-bold.color-vineta-li--vineta >] Proteger a nuestra organización                       
              

    h3(data-aos="fade-right").mt-5 Tipos y componentes
    
    p.mt-mb-5 Los tipos de seguridad para acceder a la información se dividen en:
    TabsC.color-primario
      .py-3.py-md-4(titulo="Seguridad de <i>hardware</i>")
        .row.px-4
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/img2.png', alt='')
          .col-md-6.mb-4.mb-md-0.mt-5
            p Es la que controla la parte física del #[i hardware] o equipos de cómputo.  Se encarga de la protección de todos aquellos dispositivos o aparatos informáticos e incrementar su grado de seguridad gracias a instrumentos como los #[i firewalls] por #[i hardware], servidores #[i proxy], cortafuegos o módulos de seguridad.  Esta seguridad de #[i hardware] es la que mayor protección da a todos los sistemas informáticos, pero no es la única.
      .py-3.py-md-4(titulo="Seguridad de <i>software</i>")
        .row.px-4
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/img3.png', alt='')
          .col-md-6.mb-4.mb-md-0.mt-5
            p Esta protección es clave para asegurar la integridad de los datos que se encuentran en los programas y aplicaciones.  Evita contaminar la información de los ataques de #[i hackers] o programas maliciosos (como los virus). 
            p Existen numerosos programas que están especializados en esta área y en sus distintas variantes. Algunas de ellas son el control de acceso; protección frente a virus y #[i malwares; firewalls], detección de usuarios no deseados, entre otras más funciones.  Algunos #[i softwares] de seguridad informática son Balbix, Aircrack, Bricata, BeEF, <i>Cain and Abel, Could Defencer, Burp Suite Scanner</i> o GNU MAC Manager.
      .py-3.py-md-4(titulo="Seguridad de la red")
        .row.px-4
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema10/img4.png', alt='')              
          .col-md-6.mb-4.mb-md-0.mt-5
            p Sin internet no tendríamos ese gran almacenamiento que es la nube, y es por ello por lo que hay que prestar una atención necesaria a este tipo de seguridad informática y proteger la red. Documentos, datos bancarios, información, imágenes y un largo etcétera, son elementos que podrían caer en manos no deseadas. Las amenazas con las que se enfrenta la seguridad en la red son múltiples: #[i phising], virus, troyanos, suplantación de identidad, programas espías y de publicidad o robo de datos. Así, los antivirus y los #[i antispyware], cortafuegos o redes privadas aseguran mantener a raya las acciones maliciosas. 
            p De igual manera, no existen soluciones para determinadas amenazas. Es conveniente poseer distintos niveles para que, en caso de que alguno falle, siempre haya otro disponible que luche contra el elemento enemigo.
   
    .row.justify-content-center.mt-5
      .col-md-5
        figure
            img(src='@/assets/curso/temas/tema10/img5.png', alt='alt')
      .col-md-7.mt-5
        h5.mt-5 Los componentes de la seguridad de la información son: 
        ol.lista-ol--cuadro
          li 
          |#[span.text-bold.color-vineta-li--vineta >] Programas antivirus y #[i antispyware.]
          li 
          |#[span.text-bold.color-vineta-li--vineta >] Cortafuegos o #[i firewalls], que bloquean accesos sin autorización a una red.
          li 
          |#[span.text-bold.color-vineta-li--vineta >] Modelos de prevención de intrusiones o IPS, que identifican amenazas de propagación rápida, como pueden ser los ataques de día cero o de hora cero.
          li 
          |#[span.text-bold.color-vineta-li--vineta >] Diseño de redes privadas virtuales o VPN que proveen de un sistema de acceso remoto y seguro para los sistemas locales.

    h3(data-aos="fade-right").mt-5 Marcos de referencia

    .row.justify-content-center.mt-5
      .col-md-10
        figure
            img(src='@/assets/curso/temas/tema10/img6.png', alt='alt')  

    h3(data-aos="fade-right").mt-5 Buenas prácticas

    p.mt-5.mb-5 La seguridad informática cada día nos exige tener más precauciones al usar nuestros dispositivos móviles que estén bajo el dominio de la red internet o de una red local. Por esto debemos ser usuarios responsables y conscientes de los riesgos que esto conlleva. La pérdida de datos, infecciones de virus, suplantación de la información y robo de datos son asuntos para mantenerse alerta. La solución se dará al aplicar las siguientes buenas prácticas digitales para proteger la información:

    .row.justify-content-center.mt-5                     
      .col-md-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1 
            span Instalar un #[i Firewall] y un #[i software antimalware.]
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Instalar un Antivirus.
          li 
            .lista-ol--cuadro__vineta
              span 3
            span Crear y hacer uso de contraseñas fuertes y seguras:  
              span.text-regular Construir varias contraseñas en las que use minúsculas, mayúsculas, números y caracteres especiales.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Realizar copias de seguridad con regularidad y frecuencia. 
          li 
            .lista-ol--cuadro__vineta
              span 5
            span Proteger el correo electrónico y utilizar filtros #[i antispam] y sistemas de encriptado de mensajes, para asegurar la protección y privacidad de toda esa información.
            
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema10/img7.png', alt='alt') 

            
      .col-md-4.mt-5
        figure
          img(src='@/assets/curso/temas/tema10/img8.png', alt='alt') 

      .col-md-7.mt-5
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 6
            span Precaución con las conexiones inalámbricas gratuitas o públicas.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Evitar acceder a webs importantes a través de enlaces o marcadores, será más confiable el ingreso directamente por las páginas, desde el URL oficial a través de la barra de direcciones del navegador del sitio que se quiere.
          li 
            .lista-ol--cuadro__vineta
              span 8
            span Precaución con las descargas de archivos, evitando los directorios de dudosa reputación, y en el caso de los #[i smartphones], no instalar nada fuera de los típicos mercados de APPS de cada plataforma.
          li 
            .lista-ol--cuadro__vineta
              span 9
            | Utilizar aplicaciones de cifrado para la apertura y gestión de la información.

    h3(data-aos="fade-right").mt-5 Estándares
    .row.justify-content-center
      .col-md-10
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema10/img9.png", alt="alt").img100
            .col
              h5 Estándares  
              p Los estándares de ciberseguridad son técnicas generalmente establecidas y publicadas que permiten proteger el entorno cibernético de un usuario u organización, siempre y cuando se cumpla esa normatividad.

    h3.mt-5 Normatividad en seguridad informática
    p.mt-5.mb-5 Son estándares de confiabilidad, supervisados por el equipo de Tecnologías de la Información y mantenidos por buenas prácticas. En este punto delimitamos la siguiente normativa:

    .row.justify-content-center      
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema10/img10.png', alt='alt')       
      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon").mt-5
          .row(titulo="Norma ISO/IEC 27000 ").p-2
            .row.justify-content-center.px-5
              p Las normas más utilizadas para esta finalidad pertenecen a la familia ISO/IEC 27000. La Norma ISO 27000 es una familia de normas que definen cómo implementar un Sistema de Gestión de Seguridad de la Información (SGSI) en una empresa, creada por la Organización Internacional de Normalización (ISO).

          div(titulo="ISO / IEC 27001– Sistemas de Gestión de Seguridad de la Información").p-2
            .row.justify-content-center.px-5        
              p Norma que define cómo planificar y verificar un SGSI. Tras un análisis de riesgo, planifica acciones que mitigarán estos riesgos. Sus procedimientos abarcan rubros legales, físicos y técnicos. Especifica formalmente un sistema de gestión destinada a brindar seguridad de la información bajo control explícito de gestión. Se trata de los requisitos necesarios para que exista un Sistema de Gestión de Seguridad de la Información (SGSI).

          div(titulo="ISO / IEC 27002 – Buenas Prácticas para la Seguridad de la Información").p-2
            .row.justify-content-center.px-5        
              p Se trata de una guía práctica que consta de un conjunto de controles que apoyan la aplicación del Sistema de Gestión de Seguridad de la Información en la empresa. Incorpora y proporciona 14 dominios, 35 objetivos de control y 114 controles, donde se podrá encontrar buenas prácticas de gestión de seguridad.
              p Dominios de ISO 27002:
              ol.lista-ol--cuadro
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Políticas de seguridad.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Aspectos organizativos de la Seguridad de la Información.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Seguridad ligada a los Recursos Humanos.                
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Gestión de activos.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Control de accesos.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Cifrado.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Seguridad física y ambiental.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Seguridad en la operativa. 
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Seguridad en las telecomunicaciones.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Adquisición, desarrollo y mantenimiento de los sistemas de información.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Relaciones con proveedores. 
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Gestión de incidentes en la Seguridad de la Información.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Aspectos de la Seguridad de la Información en la gestión de la continuidad de negocio.
                li 
                |#[span.text-bold.color-vineta-li--vineta >] Cumplimiento.                                                                                                                                                                                              
                      
          div(titulo="ISO / IEC 27003 - Guía para la implementación de un Sistema de Gestión de Seguridad de la Información").p-2
            .row.justify-content-center        
              p Como si fuese una guía de instalación, la misma posee un conjunto de directrices detalladas para la adopción del SGSI.
          div(titulo="ISO / IEC 27004 - Evaluación de la seguridad de la información").p-2
            .row.justify-content-center        
              p Ofrece métricas para gestionar la seguridad, específicamente recomendaciones de quién, cuándo y cómo se deben medir estos parámetros.   
          div(titulo="ISO / IEC 27005 - Cómo identificar los Riesgos").p-2
            .row.justify-content-center        
              p Se especializa en la gestión y evaluación de riesgos de seguridad. Para implementar cada norma, una entidad externa deberá elaborar dos auditorías minuciosas, una relacionada con la documentación y otra con la implementación.  

    .row.justify-content-center.mt-5
      .col-md-7
        .cajon.color-secundario.color-secundario-cajon-verde.p-3
            .row.justify-content-center.p-3   
              p  Estimado aprendiz: hemos llegado al final de este componente formativo. Esperamos que continúe recorriendo este camino lleno de aprendizajes. Recuerde explorar los recursos que se encuentran disponibles. Diríjase al menú principal en donde encontrará la síntesis del tema abordado, una actividad didáctica, material complementario, entre otros.          


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
