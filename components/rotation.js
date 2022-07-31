AFRAME.registerComponent("terrain-rotation-reader", {
    schema : {
        speedOfRotation: {type: "number", default: 0},
        speedOfAscent: {type: "number", default: 0}
    },
    init: function (){
        window.addEventListener("keydown", (e) => {

            if (e.key === "ArrowRight") {
                //if (this.data.speedOfRotation < 0.5) {
                    this.data.speedOfRotation += 1
                //}
            }

            if (e.key === "ArrowLeft") {
                //if (this.data.speedOfRotation > -0.5) {
                    this.data.speedOfAscent += 0.5
                    this.data.speedOfRotation += 0.5
                //}
            }

            if (e.key == "ArrowUp") {
                //if (this.data.speedOfRotation > -0.5) {
                    this.data.speedOfAscent += 1
                //}
            }

            if (e.key == "ArrowDown") {
                //if (this.data.speedOfRotation > -0.5) {
                    this.data.speedOfAscent -= 1
                //}
            }
        })  
    },
    update: function (){

    },
    tick: function (){      
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y = this.data.speedOfRotation
        var mapPosition = this.el.getAttribute("position")
        mapPosition.z = this.data.speedOfAscent
        this.el.setAttribute("rotation", {x: mapRotation.x, y: mapRotation.y, z: mapRotation.z})
        this.el.setAttribute("position", {x: mapPosition.x, y: mapPosition.y, z: mapPosition.z})
    }
})

AFRAME.registerComponent("car-rotation-reader", {
    schema : {
        speedOfRotation: {type: "number", default: 0},
        speedOfAscent: {type: "number", default: 0},
    },
    init: function (){
        window.addEventListener("keydown", (e) => {

        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");

        var carRotation = this.data.speedOfRotation;      
        var carPosition = this.data.speedOfAscent;


            if (e.key === "ArrowRight") {
                carRotation.y -= 0.5
                this.el.setAttribute("rotation", carRotation)
            }

            if (e.key === "ArrowLeft") {
                carRotation.y += 0.5
                this.el.setAttribute("rotation", carRotation)
            }

            if (e.key == "ArrowUp") {
                carPosition.z -= 0.05
                this.el.setAttribute("position", carPosition)
            }

            if (e.key == "ArrowDown") {
                carPosition.z += 0.05
                this.el.setAttribute("position", carPosition)
            }
            
        })  
    },
    update: function (){

    },
    tick: function (){      
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation
        mapRotation.z += this.data.speedOfRotation
        this.el.setAttribute("rotation", {x: mapRotation.x, y: mapRotation.y, z: mapRotation.z})
    }
})