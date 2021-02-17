// Animation inside Jumbotron section:

anime({
    targets: '.square',
    translateX: 250,
    rotateZ: 360,
    scale: 3,
    duration: 3000,
    loop: true
  });

  anime({
    targets: '.square-light',
    translateX: 650,
    rotateZ: 360,
    scale: 3,
    duration: 6000,
    loop: true
  });
 

  // Social icons animation
  anime({
    targets: '.social-link-item',
    translateX: 2,
    scale: 1.5,
    duration: 4000,
  });