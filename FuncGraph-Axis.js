function xAxis(){
    this.number = "";
    this.update = function(){
        ctx = myGameArea.context;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0,centerY);
        ctx.lineTo(windowX,centerY);
        ctx.closePath();
        ctx.stroke();
        ctx.lineWidth = 2;
        for (let i=centerX; i<=windowX; i=i+markers){
            if (show_markers===1){
                ctx.beginPath();
                ctx.moveTo(i,centerY-5);
                ctx.lineTo(i,centerY+5);
                ctx.closePath();
                ctx.stroke();
            }
            if (show_grids === 1){
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(i,0);
                ctx.lineTo(i,windowY);
                ctx.closePath();
                ctx.stroke();
                ctx.lineWidth = 2;
            }
            ctx.font = "8px Arial";
            if (show_numbers===1){
                if (i != centerX){
                    this.number = standard_num(i-centerX);
                    ctx.fillStyle = "black";
                    ctx.fillText(this.number,i-(ctx.measureText(this.number).width/2),centerY+12);
                }
            } 
        }
        for (let i=centerX; i>=0; i=i-markers){
            if (show_markers===1){
                ctx.beginPath();
                ctx.moveTo(i,centerY-5);
                ctx.lineTo(i,centerY+5);
                ctx.closePath();
                ctx.stroke();
            }
            if (show_grids === 1){
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(i,0);
                ctx.lineTo(i,windowY);
                ctx.closePath();
                ctx.stroke();
                ctx.lineWidth = 2;
            }
            if (show_numbers === 1){
                if (i != centerX){
                    this.number = standard_num(i-centerX);
                    ctx.fillStyle = "black";
                    ctx.fillText(this.number,i-(ctx.measureText(this.number).width/2),centerY-12);
                }
            }
        }
    }
}
function yAxis(){
    this.number = "";
    this.update = function(){
        this.number = "";
        ctx = myGameArea.context;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(centerX,0);
        ctx.lineTo(centerX,windowY);
        ctx.closePath();
        ctx.stroke();
        for (let i=centerY; i>=0; i=i-markers){
            if (show_markers===1){
                ctx.beginPath();
                ctx.moveTo(centerX-5,i);
                ctx.lineTo(centerX+5,i);
                ctx.closePath();
                ctx.stroke();
            }
            if (show_grids === 1){
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(0,i);
                ctx.lineTo(windowX,i);
                ctx.closePath();
                ctx.stroke();
                ctx.lineWidth = 2;
            }
            if(show_numbers === 1){
                if ( i != centerY){
                    this.number = standard_num(centerY-i);
                    ctx.fillStyle = "black";
                    ctx.fillText(this.number,centerX+10,i+3);
                }
            }
        }
        for (let i=centerY; i<=windowY; i=i+markers){
            if (show_markers===1){
                ctx.beginPath();
                ctx.moveTo(centerX-5,i);
                ctx.lineTo(centerX+5,i);
                ctx.closePath()
                ctx.stroke();
            }
            if (show_grids === 1){
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(0,i);
                ctx.lineTo(windowX,i);
                ctx.closePath();
                ctx.stroke();
                ctx.lineWidth = 2;
            }
            if(show_numbers === 1){
                if ( i != centerY){
                    this.number = standard_num(centerY-i);
                    ctx.fillStyle = "black";
                    ctx.fillText(this.number,centerX-(ctx.measureText(this.number).width)-10,i+3);
                }
            }
        }
    }
}
function Axis(){
    this.xAxis = new xAxis();
    this.yAxis = new yAxis();
    this.update = function(){
        this.xAxis.update();
        this.yAxis.update();
    }
}