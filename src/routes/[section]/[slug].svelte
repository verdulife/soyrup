<script context="module">
  export async function load({ params, fetch }) {
    const req = await fetch(`/${params.section}/${params.slug}.json`);
    const res = await req.json();

    return {
      props: {
        section: params.section,
        project: res,
      },
    };
  }
</script>

<script>
  import Mockup from "$lib/Mockup.svelte";

  export let section, project;
</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<Mockup data={{ section, project }} />
