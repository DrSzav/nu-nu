<script context="module">
  import formatDate from 'date-fns/format';
</script>

<script>
  export let post;

  $: printDate = formatDate(new Date(post.date), 'MMMM D, YYYY');
</script>

<style>
  .container{
    z-index: 100;
    margin-top:20vh;
-webkit-box-shadow: 3px 5px 39px -10px rgba(0,0,0,0.97);
-moz-box-shadow: 3px 5px 39px -10px rgba(0,0,0,0.97);
box-shadow: 3px 5px 39px -10px rgba(0,0,0,0.97);
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
    background-color: rgba(255, 255, 255, 0.2);
    padding: 4%;
    text-align: center;
    font-size: 150%;
    margin:5%;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

    <div class="post-item shadow-pop-tr">
      <h2>
        <a rel='prefetch' href='blog/{post.fileName}'>{post.title}</a>
      </h2>
          <div class="post-item-footer">
        <span class="post-item-date">{printDate}</span>
      </div>
      <a rel='prefetch' href='blog/{post.fileName}'>
        <img style="opacity:.7;" src='{post.thumbnail}' alt='{post.title}-img'/>
      </a>

  
    </div>
