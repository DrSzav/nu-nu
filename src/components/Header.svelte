<script>

  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'
  import TrippyPaper from './TrippyPaper2.svelte'
  export let segment
</script>

<style>
.text-shadow-pop-tl {
	-webkit-animation: text-shadow-pop-tl 0.6s both;
	        animation: text-shadow-pop-tl 0.6s both;
}

  .headerContainer{
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    color: azure;
  }
  header {
    display: flex;
    flex-direction: column;
    
    max-width: 1400px;
  
    width: 100%;
    background-color: rgba(243, 225, 201, 0.95);
    z-index: 100;

    align-items: center;
  }
  @-webkit-keyframes text-shadow-pop-tl {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: -1px -1px #555555, -2px -2px #555555, -3px -3px #555555, -4px -4px #555555, -5px -5px #555555, -6px -6px #555555, -7px -7px #555555, -8px -8px #555555;
    -webkit-transform: translateX(8px) translateY(8px);
            transform: translateX(8px) translateY(8px);
  }
}
@keyframes text-shadow-pop-tl {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: -1px -1px #555555, -2px -2px #555555, -3px -3px #555555, -4px -4px #555555, -5px -5px #555555, -6px -6px #555555, -7px -7px #555555, -8px -8px #555555;
    -webkit-transform: translateX(8px) translateY(8px);
            transform: translateX(8px) translateY(8px);
  }
}
</style>

<header>
<TrippyPaper>
</TrippyPaper>
  <div class="headerContainer text-shadow-pop-tl" >
    <Logo />
    <Nav {segment} />
  </div>
</header>
