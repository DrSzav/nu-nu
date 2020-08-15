<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      console.log('posts:',posts)
      return { posts };
    });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .container{
    z-index: 100;
    margin-top:20vh;
/* -webkit-box-shadow: 3px 5px 39px -10px rgba(0,0,0,0.97);
-moz-box-shadow: 3px 5px 39px -10px rgba(0,0,0,0.97);
box-shadow: 3px 5px 39px -10px rgba(0,0,0,0.97); */
    text-align:center;
  }

  h2,
  .post-item-footer {
    /*font-family: Rubik, sans-serif;*/
    font-weight: 700;
  }

  .post-item-date {
    color: #222;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }

  .post-item{
    /* background-color: rgba(250, 231, 255, 0.8); */
    padding: 4%;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container shadow-drop-2-center">
  <h1>nu-nu</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item shadow-pop-tr">
     
      <a rel='prefetch' href='blog/{post.fileName}'>
        <img style="opacity:.8;" src='{post.thumbnail}' alt='{post.title}-img'/>
      </a>
       <h2>
        <a rel='prefetch' href='blog/{post.fileName}'>{post.title}</a>
      </h2>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>
