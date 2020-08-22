class Paper{
    constructor(){
       var options = {
           isStatic : false,
           restitution : 0.3,
           friction : 0.3,
           density : 0.1
       }
    
    this.body = Bodies.circle(100,400,70,options);
    this.image = loadImage("images/paper.png")
    World.add (world,this.body)
    }

    display(){
      //push();
      //translate(this.body.position.x,this.body.position.y)
      //rotate(this.body.angle)
      //imageMode(CENTER)
      //image(this.image,0,0,50,50)
      //pop();
      fill("white")
      imageMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}