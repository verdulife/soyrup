<script>
  import { diseno_grafico } from "$content/diseno_grafico";
  import { diseno_web } from "$content/diseno_web";
  import { motion_graphics } from "$content/motion_graphics";
  import { page } from "$app/stores";
  import Mockup from "$lib/Mockup.svelte";

  const data = $page.params;
  const sections = { diseno_grafico, diseno_web, motion_graphics };
  const project = sections[`${data.section}`];
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<Mockup {project} />
