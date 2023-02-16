<script>

    import Sparticles from "sparticles";
  
    let sparticles,
        options = { count: 150, color: "#303030", shape: "circle", speed: 10, minSize: 3, alphaSpeed: 4, drift: 1, parallax: 1};
  
    function addSparticles(node) {
      new Sparticles(node, options, 2560, 1080);
    }
  
  </script>
  
  <main use:addSparticles>
</main>