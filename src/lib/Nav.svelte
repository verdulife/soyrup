<script>
  import { ui } from "$content/nav";
  import { page } from "$app/stores";
</script>

<nav class="row jbetween acenter xfill">
  <a href="/" class="row acenter">
    <p class="logo"><b>RUP</b> | PORTFOLIO</p>
  </a>

  <ul class="desktop-menu row yfill">
    {#each ui.routes as { slug, title }}
      <li class="yfill" class:active={$page.url.pathname === slug}>
        <a href={slug} class="row nowrap acenter fill">
          <p>{title}</p>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    height: 120px;
    letter-spacing: 0.15em;
    padding: 0 40px;

    @media (max-width: $mobile) {
      padding: 0 20px;
    }
  }

  .logo {
    font-size: 18px;
    color: $sec;
  }

  li {
    cursor: pointer;
    padding: 0 20px;

    a {
      text-transform: uppercase;
      color: $sec;
      transition: 200ms;

      &:hover {
        color: $pri;
      }
    }
  }

  .active a {
    text-decoration: underline;
  }
</style>
