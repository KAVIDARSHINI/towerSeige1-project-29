class Sling{
    constructor(bA,pB){
        var options = {
            bodyA : bA,
            pointB : pB,
            stiffness : 0.01,
            length : 0.1 
        }

        this.sling = Constraint.create(options);
        this.pointB = pB;
        World.add(world,this.sling);

    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
    
            strokeWeight(5);
            fill(255);
            line(posA.x,posA.y,posB.x,posB.y);
        }
       

    }

    fly(){
        this.sling.bodyA = null;
    }
}