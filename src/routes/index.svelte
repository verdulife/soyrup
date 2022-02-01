<script>
  import Slider from "$lib/Slider.svelte";
  import Contact from "$lib/Contact.svelte";

  import { ui } from "$content/home";
  import { diseno_grafico } from "$content/diseno_grafico";
  import { diseno_web } from "$content/diseno_web";
  import { motion_graphics } from "$content/motion_graphics";
</script>

<svelte:head>
  <title>{ui.title}</title>
  <meta name="description" content={ui.description} />
</svelte:head>

<section class="view header col fcenter xfill">
  <div class="video-wrapper">
    <video src="./reel.mp4" playsinline autoplay loop muted />
  </div>
  <small>{ui.pretitle}</small>
  <h1>{ui.title}</h1>

  <p>
    Diseñador <strong>Gráfico</strong>, <strong>Web</strong> y realizador de videos <strong>Motion Graphics</strong>.
  </p>

  <a class="btn pri semi" href="./#diseno_grafico">VER PROYECTOS</a>
</section>

<section id="diseno_grafico">
  <Slider data={diseno_grafico} />
</section>

<section id="diseno_web">
  <Slider data={diseno_web} />
</section>

<section id="motion_graphics">
  <Slider data={motion_graphics} />
</section>

<section id="contacto">
  <Contact />
</section>

<style lang="scss">
  section {
    padding-top: 120px;
    margin-bottom: -60px;

    @media (max-width: $mobile) {
      padding-top: 80px;
      margin-bottom: -80px;
    }
  }

  .header {
    position: relative;
    text-align: center;
    color: $white;
    padding: 80px;

    @media (max-width: $mobile) {
      padding: 20px;
    }

    *:not(.video-wrapper) {
      z-index: 1;
    }

    .video-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      opacity: 0.1;

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        mix-blend-mode: multiply;
      }
    }

    small {
      font-size: 70px;
      color: $pri;
      margin-bottom: -30px;
      letter-spacing: 5px;

      @media (max-width: $mobile) {
        font-size: 24px;
        margin-bottom: -10px;
      }
    }

    h1 {
      font-size: 170px;
      line-height: 1;
      margin-bottom: 40px;

      @media (max-width: $mobile) {
        font-size: 60px;
        margin-bottom: 30px;
      }
    }

    p {
      max-width: 900px;
      font-family: "Lora", serif;
      font-size: 24px;
      color: $sec;
      margin-bottom: 40px;

      @media (max-width: $mobile) {
        font-size: 16px;
      }
    }
  }
</style>
