class Player{
    constructor(){
this.index=null;
this.distance=0;
this.name=null;
    }
   getPlayerCount(){
       var count = database.ref ('PlayerCount')
       count.on("value",function(data){
           playerCount=data.val()
       })
   }
   updateCount(count){
       database.ref("/").update({
           PlayerCount:count
       })
   }
   update(){
       var playerIndex="Players/player"+this.index
       database.ref(playerIndex).set({
           name:this.name,distance:this.distance
       })
   }
   static getinfo(){
       var playerInfo=database.ref('Players')
       playerInfo.on("value",(data)=>{
           PlayerInputs=data.val();
       })
   }
}