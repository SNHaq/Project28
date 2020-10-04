class Launcher{
    constructor(bodyA, pointB){
     var options = {
       bodyA:bodyA,
       pointB:pointB,
       stiffness: 1,
       length: 1
      }
      this.bodyA = bodyA;
      this.pointB = pointB;
      this.launcher = Constraint.create(options);
      World.add(world, this.launcher);
    }
    attach(bodyA){
        this.launcher.bodyA = bodyA;
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
    if(this.launcher.bodyA){
        strokeWeight(3);
        line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y);
    }
    }
}