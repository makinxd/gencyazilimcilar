<script>

    import Sparticles from "sparticles";
  
    let sparticles,
        options = { count: 150, color: "#282828", shape: "circle", speed: 4, minSize: 4, alphaSpeed: 0, drift: 1, yVariance: 0, xVarience: 0, parallax: 4 };
  
    function addSparticles(node) {
      new Sparticles(node, options, 2560, 1080);
    }
  
  </script>
  
  <main use:addSparticles>
</main>