function centerGraph(){
    centerX = windowX/2;
    centerY = windowY/2;
    change_unit();
}
function standard_num(num){
    numnum = parseFloat(num*parseFloat(unit)).toFixed(unit_float);
    if ((Math.abs(numnum)>=0)&&(Math.abs(numnum)<1)){
        return remove_trailing(numnum.toString()); 
    } else if (Math.abs(numnum)>=1){
        if (numnum!=parseInt(numnum)){
            return remove_trailing(numnum.toString()); 
        } else {
            return parseInt(numnum).toString();
        }
    }
}
function change_markers(){
    markers = parseInt(document.getElementById("marker_range").value);
    if (markers<10){
        markers = 10;
    }
    markercursor = 1;
    unit_marker = standard_num(markers);
    updateGameArea();
}
function remove_trailing(fifi){
    control = 0;
    trail_removed = 0;
    while(control===0){
        if (fifi.charAt(fifi.length-1-trail_removed) === "0"){
            trail_removed++;
        } else {
            control = 1;
        }
    }
    return fifi.substring(0,fifi.length-trail_removed);
}
function change_unit(){
    unit = document.getElementById("unit-value").value;
    uni = parseFloat(unit);
    if ((Math.abs(uni)>0)&&(Math.abs(uni)<=1)){
        unit = remove_trailing(unit);
    } else {
        if (Math.abs(uni)!=parseInt(Math.abs(uni))){
            unit = remove_trailing(unit);
        }
    }
    if (unit.includes(".")){
        unit_float = (unit.toString()).split(".")[1].length;
    } else {
        unit_float = 0;
    }
    show_range_value()
    change_markers();
}
function hide_numbers(){
    show_numbers = (show_numbers+1)%2;
    change_unit();
}
function hide_markers(){
    show_markers = (show_markers+1)%2;
    change_unit();
}
function hide_grids(){
    show_grids = (show_grids+1)%2;
    change_unit();
}
function show_range_value(){
    unitis = parseFloat(parseFloat(markers*unit).toFixed(unit_float));
    document.getElementById("marker_info").textContent = markers.toString()+", unit is "+unitis.toString();
}
function modify_funcu(idd){
    modify_code = document.getElementById("textarea"+idd.toString()).value;
    funcs.get_funcs(idd).code = modify_code;
    funcs.get_funcs(idd).funci = new Function("x","return "+devar(modify_code,funcs.get_funcs(idd).vars,funcs.get_funcs(idd).jumps));
    change_unit();
}
function delete_funcu(idd){
    document.getElementById(idd).remove();
    funcs.remove_funcs(idd);
    change_unit();
}
function hide_funcu(idd){
    funcs.hide_funcs(idd);
    if(funcs.get_funcs(parseInt(idd)).hide===0){
        document.getElementById("HDB"+idd.toString()).textContent = "Hide";
    } else {
        document.getElementById("HDB"+idd.toString()).textContent = "Show";
    }
    change_unit();
}
function clone_funcu(idd){
    namef = "Clone of "+funcs.get_funcs(idd).name;
    codef = funcs.get_funcs(idd).code;
    colorf = funcs.get_funcs(idd).color;
    varis = funcs.get_funcs(idd).varis;
    vars = funcs.get_funcs(idd).vars;
    idf = funcs.new_id();
    funcs.add_funcs(new func(idf,namef,colorf,codef,varis,vars));
    add_func_tab(namef,idf,codef);
    change_unit();
}
function add_funcu(){
    namef = document.getElementById("funcname").value;
    codef = document.getElementById("funccode").value;
    colorf = document.getElementById("funccolor").value;
    vard = [];
    for (let i=4; i<document.getElementById("func_create").children.length; i++){
        vard.push([parseFloat(document.getElementById("varistart"+(i-4).toString()).value),parseFloat(document.getElementById("varijump"+(i-4).toString()).value)]);
    }
    console.log(vard);
    varf = false;
    if (document.getElementById("funcvar").checked === true){
        varf = true;
    }
    idf = funcs.new_id();
    funcs.add_funcs(new func(idf,namef,colorf,codef,varf,vard,1));
    add_func_tab(namef,idf,codef);
    change_unit();
    initfunc();
}
function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}
function checkvar(){
    if (!document.getElementById("funcvar").checked){
        document.getElementById("funcvarplus").setAttribute("class","btn btn-primary d-none");
        while (document.getElementById("func_create").children.length>4){
            document.getElementById("func_create").removeChild(document.getElementById("func_create").children[4]);
        }
    } else {
        document.getElementById("funcvarplus").setAttribute("class","btn btn-primary");
    }
}
function devar(codestr,varlist,jumplist){
    for (let i=0; i<varlist.length; i++){
        codestr = codestr.replaceAll("[*var"+i.toString()+"*]",varlist[i][0]+jumplist[i]*varlist[i][1]);
    }
    return codestr;
}
function init_prop(){
    document.getElementById("gridctrl").checked = true;
    document.getElementById("markersctrl").checked = true;
    document.getElementById("numbersctrl").checked = true;
    document.getElementById("funcvar").checked = false;
    document.getElementById("funcvarplus").setAttribute("class","btn btn-primary d-none");
}
function initfunc(){
    document.getElementById("funcname").value = "";
    document.getElementById("funccode").value = "";
    document.getElementById("funcvar").checked = false;
    checkvar();
}
function inject_funcu(idd){
    initfunc();
    document.getElementById("funcname").value = funcs.get_funcs(idd).name;
    document.getElementById("funccode").value = funcs.get_funcs(idd).code;
    document.getElementById("funcvar").checked = funcs.get_funcs(idd).varis;
    for(let i=0; i<funcs.get_funcs(idd).vars.length; i++){
        add_varu();
        document.getElementById("varistart"+i.toString()).value = funcs.get_funcs(idd).vars[i][0];
        document.getElementById("varijump"+i.toString()).value = funcs.get_funcs(idd).vars[i][1];
    }
}
function dotChange(idd){
    funcs.get_funcs(idd).mode = (funcs.get_funcs(idd).mode+1)%2;
    change_unit();
    if (funcs.get_funcs(idd).mode === 0){
        document.getElementById("dot"+idd.toString()).textContent = "Deconnect Dots";
    } else {
        document.getElementById("dot"+idd.toString()).textContent = "Connect Dots";
    }
}
function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }
function screenshot(){
    downloadURI(document.getElementsByTagName("canvas")[0].toDataURL("image/png").toString(),"screeshot.png");
}
