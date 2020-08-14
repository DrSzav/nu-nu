<script context="module">

   import photos from '../scrapedData.json'

</script>

<script>

 
 // preload();
</script>


<svelte:head>
  <title>tj nu-nu</title>
</svelte:head>
<h1>La Pared de #tjnunu</h1>
<h3>quieres compartir algo bien shido? pues pon #tjnunu en tus fotos, es tan facil no seas flojo.</h3>
<div class="photoContainer">

{#each photos as photorow}
    <div class="row">
    {#each photorow as photo}
   
    <div class="photoHolder">
      <a class="photoLink" href="https://instagram.com/p/{photo.shortcode}">
       {#if photo.is_video}
         <p style="font-size:500%; margin:0"> 📼</p>
         <p style="font-size:100%;">{photo.text}</p>
        {:else}
            <img alt={photo.text} src={photo.display_url}/>
        {/if}
      </a>
  
     </div>
    {/each}
  </div>
{/each}


</div>
<div class="home-container">
  <div class="home-copy">
   
    <p>Check out the docs on <a href="https://www.github.com/Charca/sapper-blog-template" target="_blank">GitHub</a> to get started.</p>
  </div>

  <figure>
    <img alt='Person typing on laptop' src='undraw-illustration.svg'>
    <figcaption>Illustration thanks to <a href="https://undraw.co" target="_blank">Undraw</a></figcaption>
  </figure>
</div>

<style>
  .photoLink{
    overflow: hidden;
  }
  .photoHolder{
    display: flex;
    flex:1;
    align-items: center;
  }
  .row{
    min-width: 30%;
    display:flex;
    flex:1;
    flex-direction: column;
    padding: 10px;
  }

  .photoContainer{
    display: flex;
    flex-wrap: wrap;
  }
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
    z-index:1000;
  }

  .home-copy {
    flex: 1;
    z-index:1000;
  }

  h1 {
    font-family: 'Nova Mono', monospace;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  figcaption {
    font-size: .8em;
    font-style: italic;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
      z-index:1000;
    }

    .home-copy {
      z-index: 1000;
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>
