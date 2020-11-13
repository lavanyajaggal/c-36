class Form{
    constructor(){
        this.input=createInput("Enter Your Name");
        this.button=createButton("play");
        this.gretting=createElement('h2');
    }
    hide(){
        this.gretting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title= createElement('h3');
        title.html("Multiplayer Car Racing ")
        title.position(320,50);
       
        this.input.position(100,200);
       
        this.button.position(100,300);
       
    this.button.mousePressed(()=>{
        this.input.hide();
     this.button.hide();
        player.name = this.input.value()
        playerCount+=1
        player.index=playerCount;
        player.update()
        player.updateCount(playerCount)
        this.gretting.html("hello"+player.name)
        this.gretting.position(200,100)
    })
    }
}