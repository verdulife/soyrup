<script>
  import { ui } from "$content/layout.js";
  import Nav from "$lib/Nav.svelte";
  import "$fonts/integral.css";
  import "$fonts/operator.css";
</script>

<main>
  <Nav />

  <div class="scroll fill">
    <slot />
  </div>
</main>

<style lang="scss">
  :global {
    @import "./src/_reset.scss";
    @import "../node_modules/verdu/verdu.scss";

    .scroll {
      scroll-behavior: smooth;
    }
  }

  .scroll {
    background: url("./dots.svg") no-repeat center;
    background-size: cover;
  }
</style>
