<script>
  import { ui } from "$content/home";
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
    <h1>DISEÑO GRÁFICO</h1>
  </section>
</div>

<style lang="scss">
  .header {
    height: calc(100vh - 120px);
    text-align: center;
    color: $white;
    padding: 80px;

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
