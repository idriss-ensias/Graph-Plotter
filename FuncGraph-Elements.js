function add_func_tab(func_name,func_id,func_code){
    bigdiv = document.createElement("div");
    bigdiv.setAttribute("class","row");
    bigdiv.setAttribute("id",func_id.toString());
    bigcol = document.createElement("div");
    bigcol.setAttribute("class","col");
    namebutton = document.createElement("button");
    namebutton.setAttribute("class","btn btn-info w-100 m-1");
    namebutton.setAttribute("type","button");
    namebutton.setAttribute("data-toggle","collapse");
    namebutton.setAttribute("data-target","#collapse"+func_id.toString());
    namebutton.setAttribute("aria-expanded","false");
    namebutton.setAttribute("aria-controls","collapse"+func_id.toString());
    namebutton.textContent = func_name;
    insidediv = document.createElement("div");
    insidediv.setAttribute("class","collapse m-1 w-100");
    insidediv.setAttribute("id","collapse"+func_id.toString());
    carddiv = document.createElement("div");
    carddiv.setAttribute("class","card card-body");
    cardrow1 = document.createElement("div");
    cardrow1.setAttribute("class","row");
    cardcol1 = document.createElement("div");
    cardcol1.setAttribute("class","col");
    functiontext = document.createElement("textarea");
    functiontext.setAttribute("class","form-control m-1");
    functiontext.setAttribute("id","textarea"+func_id.toString());
    functiontext.value = func_code;
    cardrow2 = document.createElement("div");
    cardrow2.setAttribute("class","row");
    cardcol2 = document.createElement("div");
    cardcol2.setAttribute("class","col");
    deletebutton = document.createElement("button");
    deletebutton.setAttribute("type","button");
    deletebutton.setAttribute("class","btn btn-danger w-100 m-1");
    deletebutton.setAttribute("onclick","delete_funcu("+func_id.toString()+")")
    deletebutton.textContent = "Delete";
    cardrow3 = document.createElement("div");
    cardrow3.setAttribute("class","row");
    cardcol3 = document.createElement("div");
    cardcol3.setAttribute("class","col");
    hidebutton = document.createElement("button");
    hidebutton.setAttribute("type","button");
    hidebutton.setAttribute("class","btn btn-secondary w-100 m-1");
    hidebutton.setAttribute("onclick","hide_funcu("+func_id.toString()+")")
    hidebutton.setAttribute("id","HDB"+func_id.toString());
    hidebutton.textContent = "Hide";
    cardrow4 = document.createElement("div");
    cardrow4.setAttribute("class","row");
    cardcol4 = document.createElement("div");
    cardcol4.setAttribute("class","col");
    modifybutton = document.createElement("button");
    modifybutton.setAttribute("type","button");
    modifybutton.setAttribute("class","btn btn-secondary w-100 m-1");
    modifybutton.setAttribute("onclick","modify_funcu("+func_id.toString()+")")
    modifybutton.textContent = "Modify";
    cardrow5 = document.createElement("div");
    cardrow5.setAttribute("class","row");
    cardcol5 = document.createElement("div");
    cardcol5.setAttribute("class","col");
    clonecolor = document.createElement("input");
    clonecolor.setAttribute("type","color");
    clonecolor.setAttribute("class","form-control m-1");
    clonecolor.setAttribute("id","color"+func_id.toString());
    clonecolor.value = funcs.get_funcs(func_id).color;
    cardrow7 = document.createElement("div");
    cardrow7.setAttribute("class","row");
    cardcol7 = document.createElement("div");
    cardcol7.setAttribute("class","col");
    injectbutton = document.createElement("button");
    injectbutton.setAttribute("class","btn btn-secondary w-100 m-1");
    injectbutton.setAttribute("onclick","inject_funcu("+func_id.toString()+")");
    injectbutton.textContent = "Inject";
    cardcol7.appendChild(injectbutton);
    cardrow7.appendChild(cardcol7);
    cardrow8 = document.createElement("div");
    cardrow8.setAttribute("class","row");
    cardcol8_1 = document.createElement("div");
    cardcol8_1.setAttribute("class","col");
    cardcol8_2 = document.createElement("div");
    cardcol8_2.setAttribute("class","col");
    cardcol8_3 = document.createElement("div");
    cardcol8_3.setAttribute("class","col");               
    pincheckbox = document.createElement("input");
    pincheckbox.setAttribute("type","checkbox");
    pincheckbox.setAttribute("class","form-check-label w-100");
    pincheckbox.setAttribute("id","pincheckbox-"+func_id.toString());
    pinxpos = document.createElement("button");
    pinxpos.setAttribute("class","btn btn-primary w-100");
    pinxpos.setAttribute("id","pinxpos"+func_id.toString());
    pinxpos.textContent = "0";
    pinypos = document.createElement("button");
    pinypos.setAttribute("class","btn btn-primary w-100");
    pinypos.setAttribute("id","pinypos"+func_id.toString());
    pinypos.textContent = "0";
    cardcol8_1.appendChild(pincheckbox);
    cardcol8_2.appendChild(pinxpos);
    cardcol8_3.appendChild(pinypos);
    cardrow8.appendChild(cardcol8_1);
    cardrow8.appendChild(cardcol8_2);
    cardrow8.appendChild(cardcol8_3);
    cardrow9 = document.createElement("div");
    cardrow9.setAttribute("class","row");
    cardcol9 = document.createElement("div");
    cardcol9.setAttribute("class","col");
    dotbutton = document.createElement("button");
    dotbutton.setAttribute("type","button");
    dotbutton.setAttribute("class","btn btn-secondary w-100 m-1");
    dotbutton.setAttribute("id","dot"+func_id.toString());
    dotbutton.setAttribute("onclick","dotChange("+func_id.toString()+")");
    dotbutton.textContent = "Connect Dots";
    cardcol9.appendChild(dotbutton);
    cardrow9.appendChild(cardcol9);
    cardrow6_list = [];
    for (let i=0; i<funcs.get_funcs(func_id).vars.length; i++){
        cardrow6_list.push(document.createElement("div"));
        cardrow6_list[i].setAttribute("class","row");
        cardrow6_list[i].appendChild(document.createElement("div"));
        cardrow6_list[i].children[0].setAttribute("class","col");
        cardrow6_list[i].appendChild(document.createElement("div"));
        cardrow6_list[i].children[1].setAttribute("class","col");
        cardrow6_list[i].children[0].appendChild(document.createElement("input"));
        cardrow6_list[i].children[0].children[0].setAttribute("type","range");
        cardrow6_list[i].children[0].children[0].setAttribute("class","form-control-range p-1");
        cardrow6_list[i].children[0].children[0].setAttribute("id","varrange-"+i.toString()+"-"+func_id.toString());
        cardrow6_list[i].children[1].appendChild(document.createElement("button"));
        cardrow6_list[i].children[1].children[0].setAttribute("type","button");
        cardrow6_list[i].children[1].children[0].setAttribute("class","btn btn-primary w-100 m-1");
        cardrow6_list[i].children[1].children[0].setAttribute("id","varinfo-"+i.toString()+"-"+func_id.toString());
        cardrow6_list[i].children[1].children[0].textContent = cardrow6_list[i].children[0].children[0].value;
    }
    cardcol5.appendChild(clonecolor);
    cardcol4.appendChild(modifybutton);
    cardcol3.appendChild(hidebutton);
    cardcol2.appendChild(deletebutton);
    cardcol1.appendChild(functiontext);
    cardrow5.appendChild(cardcol5);
    cardrow4.appendChild(cardcol4);
    cardrow3.appendChild(cardcol3);
    cardrow2.appendChild(cardcol2);
    cardrow1.appendChild(cardcol1);
    carddiv.appendChild(cardrow1);
    for (let j=0; j<cardrow6_list.length; j++){
        carddiv.appendChild(cardrow6_list[j]);
    }
    carddiv.appendChild(cardrow5);
    carddiv.appendChild(cardrow8);
    carddiv.appendChild(cardrow4);
    carddiv.appendChild(cardrow3);
    carddiv.appendChild(cardrow9);
    carddiv.appendChild(cardrow7);
    carddiv.appendChild(cardrow2);
    insidediv.appendChild(carddiv);
    bigcol.appendChild(namebutton);
    bigcol.appendChild(insidediv);
    bigdiv.appendChild(bigcol);
    document.getElementById("functionplane").appendChild(bigdiv);
    for (let k=0; k<cardrow6_list.length; k++){
        cardrow6_list[k].children[0].children[0].addEventListener("input",(event) => {
            idff = event.currentTarget.id.split("-")[2];
            varff = event.currentTarget.id.split("-")[1];
            document.getElementById("varinfo-"+varff.toString()+"-"+idff.toString()).textContent = event.currentTarget.value.toString();
            funcs.get_funcs(parseInt(idff)).jumps[parseInt(varff)] = parseInt(event.currentTarget.value);
            change_unit();
        })
    }
    document.getElementById("color"+func_id.toString()).addEventListener("input",(event) => {
        funcs.get_funcs(parseInt(func_id)).color = document.getElementById("color"+func_id.toString()).value;
        change_unit();
    })
    document.getElementById("pincheckbox-"+func_id.toString()).addEventListener("input",(event) => {
        pin_id = parseInt(event.currentTarget.id.split("-")[1]);
        funcs.get_funcs(pin_id).pinned = event.currentTarget.checked;
        if (funcs.get_funcs(pin_id).pinned === false){
            document.getElementById("pinxpos"+pin_id.toString()).textContent = 0;
            document.getElementById("pinypos"+pin_id.toString()).textContent = 0;
        }
        change_unit();
    })
}
function add_varu(){
    if (document.getElementById("funcvar").checked){
        varidd = document.getElementById("func_create").children.length-4;
        varitr = document.createElement("tr");
        varitd1 = document.createElement("td");
        varitd2 = document.createElement("td");
        varitd3 = document.createElement("td");
        varistart = document.createElement("input");
        varistart.setAttribute("class","form-control");
        varistart.setAttribute("type","text");
        varistart.setAttribute("id","varistart"+varidd.toString());
        varistart.setAttribute("placeholder","Start");
        varijump = document.createElement("input");
        varijump.setAttribute("class","form-control");
        varijump.setAttribute("type","text");
        varijump.setAttribute("id","varijump"+varidd.toString());
        varijump.setAttribute("placeholder","Jump");
        varival = document.createElement("button");
        varival.setAttribute("type","button");
        varival.setAttribute("class","btn btn-primary");
        varival.textContent = "[*var"+varidd.toString()+"*]";
        varitd1.appendChild(varistart);
        varitd2.appendChild(varijump);
        varitd3.appendChild(varival);
        varitr.appendChild(varitd1);
        varitr.appendChild(varitd2);
        varitr.appendChild(varitd3);
        document.getElementById("func_create").appendChild(varitr);
    }
}