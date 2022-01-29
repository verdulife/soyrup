<script>
  import { ui } from "$content/layout.js";
  import Nav from "$lib/Nav.svelte";
  import "$fonts/integral.css";
  import "$fonts/operator.css";
</script>

<main>
  <Nav />

  <div class="view fill">
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

  .view {
    height: calc(100% - 120px);
    
    @media (max-width: $mobile) {
      height: calc(100% - 80px);
    }
  }
</style>
