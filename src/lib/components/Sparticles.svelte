<script>

    import Sparticles from "sparticles";
  
    let sparticles,
        options = { count: 200, color: "#404040", shape: "circle", speed: 12, minSize: 3, alphaSpeed: 0, drift: 1, parallax: 1};
  
    function addSparticles(node) {
      new Sparticles(node, options, 2560, 1080);
    }
  
  </script>
  
  <main use:addSparticles>
</main>