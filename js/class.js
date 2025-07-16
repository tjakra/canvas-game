class Entity{
    constructor([position,width,height,velocity,color,healthbar,health]){
        this.position=position
        this.width=width
        this.height=height
        this.velocity=velocity
        this.color=color
        this.healthbar=healthbar
        this.health=health
    }
    draw(){
        // mengatur warna, tinggi, lebar dan tata letak player
        kotak(this.position.x,this.position.y,this.width,this.height,this.color)

        // background darah
        kotak(this.healthbar.x - 5,this.healthbar.y - 5,this.healthbar.w + 10,this.healthbar.h + 10,"red")

        // bar darah
        kotak(this.healthbar.x,this.healthbar.y,this.health,this.healthbar.h,"green")
    }
    update(){
        this.draw()
        // aklerasi kecepan player
        this.position.x += this.velocity.x
    }
}

class Object{
    constructor(position,width,height,velocity,color){
        this.position
        this.width
        this.height
        this.velocity
        this.color
    }
    draw(){
        
    }
}