<script>

  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'
  import TrippyPaper from './TrippyPaper2.svelte'
  export let segment
</script>

<style>
.text-shadow-pop-tr {
	-webkit-animation: text-shadow-pop-tr 0.6s both;
	        animation: text-shadow-pop-tr 0.6s both;
}

@-webkit-keyframes text-shadow-pop-tr {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px -1px #555555, 2px -2px #555555, 3px -3px #555555, 4px -4px #555555, 5px -5px #555555, 6px -6px #555555, 7px -7px #555555, 8px -8px #555555;
    -webkit-transform: translateX(-8px) translateY(8px);
            transform: translateX(-8px) translateY(8px);
  }
}
@keyframes text-shadow-pop-tr {
  0% {
    text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    text-shadow: 1px -1px #555555, 2px -2px #555555, 3px -3px #555555, 4px -4px #555555, 5px -5px #555555, 6px -6px #555555, 7px -7px #555555, 8px -8px #555555;
    -webkit-transform: translateX(-8px) translateY(8px);
            transform: translateX(-8px) translateY(8px);
  }
}

  .headerContainer{
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    color: azure;
  }
  header {
    -webkit-box-shadow: inset 0px -3px 58px -28px rgba(0,0,0,0.84);
-moz-box-shadow: inset 0px -3px 58px -28px rgba(0,0,0,0.84);
box-shadow: inset 0px -3px 58px -28px rgba(0,0,0,0.84);
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
  
    width: 100%;
    background-color: rgba(243, 225, 201, 0.95);
    z-index: 1000000000;

    align-items: center;
  }
  @-webkit-keyframes text-shadow-pop-tr {
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
  <div class="headerContainer text-shadow-pop-tr" >
    <Logo />
    <Nav {segment} />
  </div>
</header>
