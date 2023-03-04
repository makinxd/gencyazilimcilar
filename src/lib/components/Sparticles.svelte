<script>
  import Sparticles from "sparticles";

  let sparticles,
    options = { count: 120, color: "#303030", shape: "circle", speed: 1, minSize: 12, maxSize: 24, alphaSpeed: 0, yVariance: 5, xVarience: 5, glow: 50};
  
  function addSparticles(node) {
    new Sparticles(node, options, 2560, 1080);
  }
  
</script>
  
<main use:addSparticles></main>