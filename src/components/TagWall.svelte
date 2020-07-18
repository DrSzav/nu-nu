<script context="module">
  
  import { getInstagramPhotos } from './tagWallHelper';
  import { onMount } from 'svelte';

let photoPromise = Promise.resolve([]);
async function preload(){
 
    const photos = await getInstagramPhotos(3);
    
    return { photos } ;
}

</script>

<script>
  let photos = [];
  onMount(async ()=>{
     console.log("fetching photos");
    let results = getInstagramPhotos(3);
    console.log("results:")
    console.log(results);
    photos = results ? results : [];
    console.log(photos);
  });
</script>


<h1>#tjnunu</h1>
<div class="photoContainer">

{#each photos as photorow}
    <div class="row">
    {#each photorow as photo}
    <div class="photoHolder">
      <a class="photoLink" href="https://instagram.com/p/{photo.shortcode}"><img alt={photo.text} src={photo.display_url}/></a>
     </div>
    {/each}
  </div>
{/each}

</div>


<style>
  .photoLink{

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
