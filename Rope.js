class Rope {
    constructor(bodyX,pointB){
        var option ={
            bodyA:bodyX,
            pointB :pointB,
            stiffness:0.2,
            lenght:10
            
        }
        this.chain =Constraint.create (option)
        this.pointB=pointB
        World.add(myWorld,this.chain)
    }
    fly(){
       this.chain.bodyA=null 
    }
    attacher(bodyA){
        this.chain.bodyA=bodyA;
    }
    display() {
        if (this.chain.bodyA){
     var pointA= this.chain.bodyA.position
     var pointB=this.pointB
     push ();
     strokeWeight(2);
     stroke("white")
     line(pointA.x,pointA.y,pointB.x,pointB.y)
    pop ();
    }
    }    
}
