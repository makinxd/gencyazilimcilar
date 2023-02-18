<script>

    import Sparticles from "sparticles";
  
    let sparticles,
        options = { count: 100, color: "#505050", shape: "circle", speed: 0, minSize: 4, bounce: true, alphaSpeed: 0, yVariance: 10, xVarience: 10 };
  
    function addSparticles(node) {
      new Sparticles(node, options, 2560, 1080);
    }
  
  </script>
  
  <main use:addSparticles>
</main>