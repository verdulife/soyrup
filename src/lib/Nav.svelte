<script>
  import { ui } from "$content/nav";
  import { page } from "$app/stores";
</script>

<nav class="row jbetween acenter xfill">
  <a href="/" class="row acenter">
    <strong class="logo"><b>RUP</b> | PORTFOLIO</strong>
  </a>

  <ul class="desktop-menu row yfill">
    {#each ui.routes as { slug, title }}
      <li class="yfill" class:active={$page.url.pathname === slug}>
        <a href={slug} class="row nowrap acenter fill">{title}</a>
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
      height: 80px;
      padding: 0 20px;
      justify-content: center;
    }
  }

  .logo {
    font-size: 18px;
    color: $sec;
  }

  ul {
    @media (max-width: $mobile) {
      display: none;
    }
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
