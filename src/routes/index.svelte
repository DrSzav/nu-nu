<script context="module">
  import SinglePost from '../components/SinglePost.svelte';

   import photos from '../scrapedData.json'
   
    export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      console.log('posts:',posts)
      return { posts };
    });
  }
</script>

<script>
  export let posts;
   
   
 
 // preload();
</script>


<svelte:head>
  <title>tj nu-nu</title>
</svelte:head>
<div class="nunu-container">
<h1>mas nuevo que tu cara</h1>
<SinglePost post={posts[0]}/>

</div>

<h1 style="margin-top:200px;">La Pared de #tjnunu</h1>
<div title="giphy gif">
<iframe src="https://giphy.com/embed/3oKIPoaTdtR3qMU2Ig" frameBorder="0" class="giphy-embed" allowFullScreen style="pointer-events: none; width:100%;"></iframe>
</div>
<h3 style="margin-bottom:100px;">quieres compartir algo bien shido? pues pon #tjnunu en tus fotos, es tan facil no seas flojo.</h3>
<div class="photoContainer">

{#each photos as photorow}
    <div class="row">
    {#each photorow as photo}
   
    <div class="photoHolder">
    {#if !photo.is_video}
      <a class="photoLink" href="https://instagram.com/p/{photo.shortcode}">
      
            <img style="margin-bottom:-10px;" alt={photo.text} src={photo.display_url}/>
        </a>
        {/if}
   
  
     </div>
    {/each}
  </div>
{/each}

<SinglePost post={posts[1]}/>
<SinglePost post={posts[2]}/>

</div>

<style>
.nunu-container{
  max-width: 800px;
  margin: auto;
}
  .photoLink{
    overflow: hidden;
         -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
  .photoHolder{
    display: flex;
    flex:1;
    align-items: center;
    text-align: center;
    margin-bottom: 5px;
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
