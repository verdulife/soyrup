<script>
  import { ui } from "$content/nav";
  import { page } from "$app/stores";
</script>

<nav class="row jbetween acenter">
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
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: calc(100% - 40px);
    max-width: 1200px;
    height: 80px;
    background: rgba($black, 0.1);
    backdrop-filter: blur(10px);
    letter-spacing: 0.15em;;
    border-radius: 16px;
    box-shadow: inset 0 0 2px -1px rgba($white, 0.6);
    padding: 0 40px;
    z-index: 99;

    @media (max-width: $mobile) {
      height: 60px;
      padding: 0 20px;
      justify-content: center;
    }
  }

  .logo {
    font-size: 18px;
    color: $sec;

    @media (max-width: $mobile) {
      font-size: 14px;
    }
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
      font-size: 12px;
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
