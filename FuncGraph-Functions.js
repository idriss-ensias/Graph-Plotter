function func(id,name,color,code,varis,vars,mode){
    this.name = name;
    this.id = id;
    this.color = color;
    this.code = code;
    this.varis = varis;
    this.vars = vars;
    this.jumps = [];
    this.pinned = false;
    this.pin = new pin(this,this.color,5,0);
    this.mode = mode;
    for (let i=0; i<this.vars.length; i++){
        this.jumps.push(0);
    }
    this.hide = 0;
    this.update = function(){
        this.funci = new Function("x","return "+devar(this.code,this.vars,this.jumps));
        ctx = myGameArea.context;
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        if(this.mode === 0){
            ctx.beginPath();
            ctx.moveTo(0,centerY-(this.funci((-centerX)*unit)/unit));
            for(let i=1; i<=windowX; i++){
                ctx.lineTo(i,centerY-(this.funci((i-centerX)*unit)/unit));
            }
            ctx.stroke();
        } else if (this.mode === 1){
            for(let i=0; i<=windowX; i++){
                if(isNumeric(this.funci((i-centerX)))){
                    ctx.beginPath();
                    ctx.arc(i,centerY-(this.funci((i-centerX)*unit)/unit),1,0,Math.PI,true);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        }
        if(this.pinned){
            this.pin.update();
        }
    }
}
function pin(func,color,radius){
    this.func = func;
    this.color = color;
    this.radius = radius;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(xpin,centerY-(this.func.funci((xpin-centerX)*unit)/unit),this.radius,0,2*Math.PI,false);
        ctx.closePath();
        ctx.fill();
    }
}
function Funcsgraph(){
    this.funcs_list = [];
    this.update = function(){
        for(let i=0; i<this.funcs_list.length; i++){
            if (this.funcs_list[i].hide === 0){
                this.funcs_list[i].update();
            }
        }
    }
    this.add_funcs = function(func){
        this.funcs_list.push(func);
    }
    this.get_funcs = function(id_f){
        for(let i=0; i<this.funcs_list.length; i++){
            if(this.funcs_list[i].id===id_f){
                return this.funcs_list[i];
            }
        }
    }
    this.new_id = function(){
        idd = 0;
        for (let i=0; i<this.funcs_list.length; i++){
            if (this.funcs_list[i].id>idd){
                idd = this.funcs_list[i].id + 1;
            }
        }
        return idd+1;
    }
    this.remove_funcs = function(idd){
        new_funcs_list = [];
        for(let i=0; i<this.funcs_list.length; i++){
            if(this.funcs_list[i].id!=idd){
                new_funcs_list.push(this.funcs_list[i]);
            }
        }
        this.funcs_list = new_funcs_list;
    }
    this.hide_funcs = function(idd){
        for(let i=0; i<this.funcs_list.length; i++){
            if(this.funcs_list[i].id===idd){
                this.funcs_list[i].hide = (this.funcs_list[i].hide+1)%2;
                break;
            }
        }
    }
}