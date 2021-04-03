class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(900,700,900,20,options);      
      World.add(world, this.ground);
    }

    display(){     
      var pos = this.ground.position;
      strokeWeight(2);
      fill("black");
      rectMode(CENTER);
      rect(pos.x,pos.y,900,20);
    }
  }