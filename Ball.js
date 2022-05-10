class Ball{
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.3,
         
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.width = 25;
      this.height = 25;
      this.image = loadImage("ball.png");
  
      World.add(world, this.body);
    }
    score(){
        if(this.body.position.x>=135&&this.body.position.x<=312 && this.body.position.y>=0 && this.body.position.y<=80){
                World.remove(world, this.body);
            score = 1;
            
        }
        
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image, 0, 0, this.width*5 , this.height*5 );
      pop();
    }
  };
  