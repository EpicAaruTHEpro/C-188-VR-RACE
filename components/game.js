AFRAME.registerComponent("game-play", {
    schema : {
        elementId: {type: "string", default: "#flag"},
        duration: {type: "number", default: 0},
        gameState: {type: "string", default: "play"}
    },
    init: function() {
        let timerel = document.querySelector("#timer")
        this.startTimer(this.data.duration, timerel) 
    },
    update: function (){
        this.isCollided(this.data.elementId)
    },
    tick: function (){
    },
    isCollided: function (elementId) {
        const element = document.querySelector(elementId)
        element.addEventListener("collide", e => {
            if (elementId.includes("#flag")) {
                this.data.gameState = "over"
                this.stopTimer()
            }
        })
    },
    startTimer: function(duration, timerel) {
        let mins, secs
        setInterval(() => {
            if (this.data.gameState === "play") {  
                mins = parseInt(duration/60)
                secs = parseInt(duration%60)
                if (mins < 10) {
                    mins = "0" + mins
                }

                if (secs < 10) {
                    secs = "0" + secs
                }

                timerel.setAttribute("text", {value:mins + ":" + secs})
                duration += 1 }
        }, 1000);
    },
    stopTimer: function() {
        console.log(this.data.gameState)
        this.gameOver();
    },
    gameOver: function () {
        var element = document.querySelector("#game_over_text");
        element.setAttribute("visible", true);
      },
    
})
