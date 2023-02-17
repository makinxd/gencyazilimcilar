<script>

    import Sparticles from "sparticles";
  
    let sparticles,
        options = { count: 150, color: "#303030", shape: "image", speed: 2, minSize: 18, alphaSpeed: 0, drift: 1, parallax: 2, yVariance: 0, xVarience: 0, imageUrl: "images/logo/gencyazilimcilarlogo.png"};
  
    function addSparticles(node) {
      new Sparticles(node, options, 2560, 1080);
    }
  
  </script>
  
  <main use:addSparticles>
</main>