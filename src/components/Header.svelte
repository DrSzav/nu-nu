<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'

  export let segment
</script>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2em;
    width: 100%;
    background-color: rgba(243, 225, 201, 0.95);
    z-index: 100;
    padding: 40px;
  }
</style>

<header>
  <Logo />
  <Nav {segment} />
</header>
