<script>
  export let title, src;
  let contentType = "image";

  title = title || "No title";

  if (src.includes("https://")) contentType = "web";
  if (src.includes("/embed/")) contentType = "video";
</script>

<div class="mockup-wrapper row jcenter xfill">
  <img class="mockup" src="/mockup.png" alt="Mockup" />

  {#if contentType === "image"}
    <img {src} alt={title} />
  {:else if contentType === "web"}
    <iframe {src} {title} frameborder="0" />
  {:else}
    <iframe
      {src}
      {title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  {/if}
</div>

<style lang="scss">
  .mockup-wrapper {
    position: relative;
    padding: 40px;
    margin-bottom: 100px;

    .mockup {
      position: absolute;
      top: 40px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 100%;
      max-width: 1000px;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    img,
    iframe {
      width: 100%;
      max-width: 720px;
      height: 100%;
      object-fit: contain;
      object-position: center;
      margin-top: 40px;
    }
  }
</style>
