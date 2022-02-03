<script context="module">
  export async function load({ params, fetch }) {
    const req = await fetch(`/${params.section}/${params.slug}.json`);
    const res = await req.json();

    return {
      props: {
        section: params.section,
        projects: res,
      },
    };
  }
</script>

<script>
  import Mockup from "$lib/Mockup.svelte";
  import Gallery from "$lib/Gallery.svelte";
  import Others from "$lib/Others.svelte";

  export let section, projects;
  const project = projects.current;

  console.log(project);
</script>

<svelte:head>
  <title>{project.title - section}</title>
</svelte:head>

<section class="current-project col acenter xfill">
  <h1>{project.title}</h1>
  <p>{project.description}</p>

  <Mockup title={project.title} src={project.image} />
  <Gallery title={project.title} images={project.content.images} />
</section>

<section class="other-projects xfill">
  <Others data={{ section, projects: projects.others }} />
</section>

<style lang="scss">
  .current-project {
    padding: 80px;
    padding-top: 150px;

    @media (max-width: $tablet) {
      padding: 20px;
    }

    h1,
    p {
      text-align: center;
      color: $sec;
    }
  }

  .other-projects {
  }
</style>
