<script>
  export let data;
  const { slug, projects } = data;

  let sliderElement;
  let showLeft = false;

  function slideLeft(slider) {
    slider.scrollTo({
      left: slider.scrollLeft - 600,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (slider.scrollLeft <= 0) showLeft = false;
    }, 500);
  }

  function slideRight(slider) {
    slider.scrollTo({
      left: slider.scrollLeft + 600,
      behavior: "smooth",
    });

    showLeft = true;
  }
</script>

<div class="slider-wrapper row xfill">
  <h2>OTROS PROYECTOS</h2>
  {#if showLeft}
    <div class="arrow-left row acenter yfill" on:click={() => slideLeft(sliderElement)}>
      <img src="/arrow-left.svg" alt="Left" />
    </div>
  {/if}

  <ul class="slider xfill" bind:this={sliderElement}>
    {#each projects as project}
      <li class="slide">
        <a class="fill" href="/{slug}/{project.slug}">
          <div class="card col jend fill">
            <h3>{project.title}</h3>
          </div>
        </a>
      </li>
    {/each}
  </ul>

  <div class="arrow-right row acenter yfill" on:click={() => slideRight(sliderElement)}>
    <img src="/arrow-right.svg" alt="Right" />
  </div>
</div>

<style lang="scss">
  .slider-wrapper {
    position: relative;
    padding: 20px 0;

    &:hover {
      .arrow-left,
      .arrow-right {
        opacity: 1;
      }
    }

    h2 {
      padding-left: 60px;
      color: $sec;

      @media (max-width: $tablet) {
        padding-left: 30px;
      }
    }

    .arrow-left,
    .arrow-right {
      cursor: pointer;
      position: absolute;
      top: 0;
      filter: drop-shadow(0 0 5px rgba($black, 0.5));
      padding: 35px;
      opacity: 0;
      transition: 500ms;
      z-index: 1;

      @media (hover: none) {
        display: none;
      }
    }

    .arrow-left {
      left: 0;
    }

    .arrow-right {
      right: 0;
    }
  }

  .slider {
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    padding: 0 20px;

    @media (max-width: $tablet) {
      padding: 0 10px;
    }
  }

  .slide {
    --card-width: 85vw;
    --max-card-width: 600px;
    width: var(--card-width);
    height: calc(var(--card-width) / 1.618);
    max-width: var(--max-card-width);
    max-height: calc(var(--max-card-width) / 1.618);
    scroll-snap-align: center;
    padding: 20px 10px;

    @media (max-width: $tablet) {
      padding: 10px;
    }

    a {
      color: unset;
    }
  }

  .card {
    background: $pri;
    border-radius: 16px;
    padding: 20px;
  }
</style>
