<script>

    import Sparticles from "sparticles";
  
    let sparticles,
        options = { count: 150, color: "#222222", shape: "image", speed: 5, minSize: 18, alphaSpeed: 0, drift: 1, parallax: 4, yVariance: 0, xVarience: 0, imageUrl: "images/logo/gencyazilimcilarlogo.png"};
  
    function addSparticles(node) {
      new Sparticles(node, options, 2560, 1080);
    }
  
  </script>
  
  <main use:addSparticles>
</main>