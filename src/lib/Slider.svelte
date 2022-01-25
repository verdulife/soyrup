<script>
  export let data;
  const { projects } = data;
</script>

<div class="slider-wrapper row xfill">
  <h2>{data.title}</h2>

  <ul class="slider xfill">
    {#each projects as project}
      <li class="slide">
        <div class="card col jend fill">
          <h3>{project.title}</h3>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .slider-wrapper {
    padding: 20px 0;

    h2 {
      padding-left: 60px;
      color: $sec;
    }
  }

  .slider {
    padding: 0 20px;
  }

  .slide {
    width: 30%;
    aspect-ratio: 16/10;
    padding: 20px;
  }

  .card {
    background: $pri;
    border-radius: 16px;
    padding: 20px;
  }
</style>
