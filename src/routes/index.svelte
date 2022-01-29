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

<div class="scroll">
  <section class="header col fcenter xfill">
    <small>{ui.pretitle}</small>
    <h1>{ui.title}</h1>
    <p>{@html ui.description}</p>

    <img src="./arrow-down.svg" alt="Ver más" />
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
</div>

<style lang="scss">
  section {
    margin-bottom: 60px;
    
    @media (max-width: $mobile) {
      margin-bottom: 20px;
    }
  }

  .header {
    height: calc(100vh - 120px);
    text-align: center;
    color: $white;
    padding: 80px;

    @media (max-width: $mobile) {
      height: calc(100vh - 80px);
      padding: 20px;
    }

    small {
      font-size: 70px;
      color: $pri;
      margin-bottom: -30px;
      letter-spacing: 5px;
    }

    h1 {
      font-size: 170px;
      line-height: 1;
      margin-bottom: 40px;

      @media (max-width: $mobile) {
        font-size: 80px;
      }
    }

    p {
      max-width: 900px;
      font-family: "Lora", serif;
      font-size: 24px;
      color: $sec;
      margin-bottom: 20vh;

      small {
        font-size: 18px;
      }

      @media (max-width: $mobile) {
        font-size: 16px;

        small {
          font-size: 14px;
        }
      }
    }

    img {
      position: absolute;
      bottom: 40px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 30px;
      animation: bounce 1s infinite;
    }
  }
</style>
