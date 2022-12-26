var unit = 1;
var unit_float = 0;
var markers = 25;
var unit_marker = 0;
var windowX = 600;
var windowY = 600;
var centerX = windowX/2;
var centerY = windowY/2;
var markercursor = 1;
var show_numbers = 1;
var show_markers = 1;
var show_grids = 1;
var zoom_ind = 1;
var axis = new Axis();
var funcs = new Funcsgraph();
var xmove = 0;
var ymove = 0;
var xpin = 0;
function startGame(){
    myGameArea.start();
    change_unit();
    init_prop();
    initfunc();
}
document.getElementById("marker_range").addEventListener('input',change_markers);
document.getElementById("marker_range").addEventListener('input',show_range_value);
document.getElementById("gridctrl").addEventListener('input',hide_grids);
document.getElementById("markersctrl").addEventListener('input',hide_markers);
document.getElementById("numbersctrl").addEventListener('input',hide_numbers);
document.getElementById("funcvar").addEventListener("change",checkvar);
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
        this.canvas.width = windowX;
        this.canvas.height = windowY;
        this.downtouch = 0;
        this.touchx = 0;
        this.touchy = 0;
        this.offset = 0;
        this.context = this.canvas.getContext("2d");
        document.getElementById("caca").appendChild(this.canvas);
        this.offset = parseInt(document.getElementsByTagName("canvas")[0].getBoundingClientRect().right-document.body.getBoundingClientRect().right);
        console.log(this.offset);
        this.interval = setInterval(updateGameArea, 50);
        this.canvas.addEventListener("mousedown", function(e){
            myGameArea.downtouch = 1;
            myGameArea.touchx = e.pageX;
            myGameArea.touchy = e.pageY;
        })
        window.addEventListener("mousemove", function(e){
            if (myGameArea.downtouch === 1){
                myGameArea.x = e.pageX;
                myGameArea.y = e.pageY;
                centerX = centerX - (myGameArea.touchx - myGameArea.x)/10;
                centerY = centerY - (myGameArea.touchy - myGameArea.y)/10;
                xmove = (myGameArea.touchx - myGameArea.x)/10;
                ymove = (myGameArea.touchy - myGameArea.y)/10;
                change_unit();
            }
        })
        window.addEventListener("mouseup", function(e){
            myGameArea.downtouch = 0; 
        })
        this.canvas.addEventListener("mousemove", function(e){ 
            this.offset = parseInt(document.getElementsByTagName("canvas")[0].getBoundingClientRect().right-document.body.getBoundingClientRect().right);
            xpin = e.pageX+this.offset;
            for (let i=0; i<funcs.funcs_list.length; i++){
                if (funcs.funcs_list[i].pinned){
                    document.getElementById("pinxpos"+funcs.funcs_list[i].id.toString()).textContent = standard_num(xpin-centerX);
                    document.getElementById("pinypos"+funcs.funcs_list[i].id.toString()).textContent = funcs.funcs_list[i].funci(standard_num(xpin-centerX));
                }
            }
            change_unit();
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function updateGameArea(){
    if (markercursor === 1){
        markercursor = 0;
        myGameArea.clear();
        axis.update();
        funcs.update();
    }
}