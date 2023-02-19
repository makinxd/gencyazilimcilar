<script>

    import Sparticles from "sparticles";
  
    let sparticles,
        options = { count: 150, color: "#555555", shape: "circle", speed: 5, minSize: 3, maxSize: 5, alphaSpeed: 0, yVariance: 0, xVarience: 0 };
  
    function addSparticles(node) {
      new Sparticles(node, options, 2560, 1080);
    }
  
  </script>
  
  <main use:addSparticles>
</main>