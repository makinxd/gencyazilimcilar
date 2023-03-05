<script>
  import Sparticles from "sparticles";

  let sparticles,
    options = { count: 100, color: "#505050", shape: "circle", speed: 1, minSize: 4, maxSize: 8, alphaSpeed: 10, yVariance: 5, xVarience: 5};
  
  function addSparticles(node) {
    new Sparticles(node, options, 1920, 1080);
  }
  
</script>
  
<main use:addSparticles></main>