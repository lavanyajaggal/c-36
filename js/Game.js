class Game{
    constructor(){}
    getState(){
        var stateRef = database.ref("GameState")
        stateRef.on("value",function(data){
         gameState = data.val()  
        })
    }
    update(state){
        database.ref("/").update({
            GameState:state
        })
    }
    async start(){
        if(gameState===0){
          player=new Player(); 
          var count=await database.ref("PlayerCount").once("value")
          if(count.exists()){

          playerCount=count.val()
          player.getPlayerCount()
        
        }
          form=new Form()
          form.display();
        }
    }
    play(){
        form.hide();
        textSize(20);
        text("Game has begun",250,30);
        if(PlayerInputs !==undefined){
            var dispalyPosition=100
            for(var plr in PlayerInputs){
                if(plr==="player"+player.index)
                fill("red")
                else
                fill("black")
                dispalyPosition+=10
                textSize(20)
                text(PlayerInputs[plr].name+"="+PlayerInputs[plr].distance,120,dispalyPosition)
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=60
            player.update()
        }
    }
}
