<script context="module">
  export async function load({ params, fetch }) {
    const req = await fetch(`./${params.section}/projects.json`);
    const res = await req.text();
    console.log(res);

    return {
      props: {
        projects: res,
      },
    };
  }
</script>
