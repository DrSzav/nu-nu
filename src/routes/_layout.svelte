<script>
  import Header from '../components/Header.svelte';
  import Headroom from "svelte-headroom";
  import TrippyPaper from '../components/TrippyPaper.svelte';
  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
    align-items: center;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2%;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index:1000;
    margin-top: 20vh;
  }

  .elevated{
    z-index: 1000;
  }

  .overlay {
 width: 100vw;
    height: 100vh;
    position: fixed;
    opacity: .6;
    background: radial-gradient(circle, white 0%, rgb(68, 163, 173) 100%);
}


  footer {
    color: #fff;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }
</style>

<div class="layout">
  <div class="overlay"></div>
  <Headroom class="elevated" tolerance={10}>
  <Header {segment}/>
  </Headroom>

  <TrippyPaper>
  </TrippyPaper>
  <main>
    <slot></slot>
  </main>

  <footer>
    <span>
      &copy; {new Date().getFullYear()} Your Blog.
      Powered by <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>.
      Template by <a href="https://www.twitter.com/Charca" target="_blank">Maxi Ferreira</a>.
    </span>
  </footer>
</div>
