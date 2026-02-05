function test() {
    pid_list =["p00","p11","p12",
        "p21","p22","p23","p24",
        "p31","p32","p33","p34","p35","p36","p37","p38",
        "p411","p412","p421","p422","p431","p432","p441","p442","p451","p452","p461","p462","p471","p472","p481","p482"
    ]
    ss_apt = []
    ss_star = []
    base_apt = {}
    cc_apt = {}


    apt_a = document.getElementById("debug1")
    document.addEventListener('click', (e) => {
        pid_list.forEach(pid =>{
            ss_apt[pid] = document.querySelector('input[name="sapt_'+pid+'"]:checked') || 0
            ss_star[pid] = document.querySelector('input[name="sstar_'+pid+'"]:checked') || 0
            let ss_star_num=""
            if (ss_star[pid]===0) {ss_star_num=""}
            else {ss_star_num=ss_star[pid].value}
            document.getElementById("p_select_apt_button_"+pid).innerHTML = select_apt_display(ss_apt[pid].value)+ss_star_num
            base_apt[pid] = {}
            cc_apt[pid] = {}
            cc_apt[pid]['apt_shiba_'] = 0
            cc_apt[pid]['apt_da_'] = 0
            cc_apt[pid]['apt_tan_'] = 0
            cc_apt[pid]['apt_ma_'] = 0
            cc_apt[pid]['apt_chuu_'] = 0
            cc_apt[pid]['apt_chou_'] = 0
            cc_apt[pid]['apt_nige_'] = 0
            cc_apt[pid]['apt_senkou_'] = 0
            cc_apt[pid]['apt_sashi_'] = 0
            cc_apt[pid]['apt_oiko_'] = 0
        
            if (document.getElementById('p_select_uma_icon_'+pid).value) {
                
                base_apt[pid]['apt_shiba_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_shiba
                base_apt[pid]['apt_da_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_da
                base_apt[pid]['apt_tan_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_tan
                base_apt[pid]['apt_ma_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_ma
                base_apt[pid]['apt_chuu_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_chuu
                base_apt[pid]['apt_chou_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_chou
                base_apt[pid]['apt_nige_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_nige
                base_apt[pid]['apt_senkou_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_senkou
                base_apt[pid]['apt_sashi_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_sashi
                base_apt[pid]['apt_oiko_'] = j_data.card_id[String(document.getElementById('p_select_uma_icon_'+pid).value)][0].apt_oiko
                
                
                cc_apt[pid]['apt_shiba_'] = base_apt[pid]['apt_shiba_']
                cc_apt[pid]['apt_da_'] = base_apt[pid]['apt_da_']
                cc_apt[pid]['apt_tan_'] = base_apt[pid]['apt_tan_']
                cc_apt[pid]['apt_ma_'] = base_apt[pid]['apt_ma_']
                cc_apt[pid]['apt_chuu_'] = base_apt[pid]['apt_chuu_']
                cc_apt[pid]['apt_chou_'] = base_apt[pid]['apt_chou_']
                cc_apt[pid]['apt_nige_'] = base_apt[pid]['apt_nige_']
                cc_apt[pid]['apt_senkou_'] = base_apt[pid]['apt_senkou_']
                cc_apt[pid]['apt_sashi_'] = base_apt[pid]['apt_sashi_']
                cc_apt[pid]['apt_oiko_'] = base_apt[pid]['apt_oiko_']

            }
            
            })

        apt_display()
        const button_list = [
            ['p11','p00',"null"],
            ['p12','p00',"null"],
            ['p21','p11','p00'],
            ['p22','p11','p00'],
            ['p23','p12','p00'],
            ['p24','p12','p00'],
            ['p31','p21','p11'],
            ['p32','p21','p11'],
            ['p33','p22','p11'],
            ['p34','p22','p11'],
            ['p35','p23','p12'],
            ['p36','p23','p12'],
            ['p37','p24','p12'],
            ['p38','p24','p12'],
            ['p411','p31','p21'],
            ['p412','p31','p21'],
            ['p421','p32','p21'],
            ['p422','p32','p21'],
            ['p431','p33','p22'],
            ['p432','p33','p22'],
            ['p441','p34','p22'],
            ['p442','p34','p22'],
            ['p451','p35','p23'],
            ['p452','p35','p23'],
            ['p461','p36','p23'],
            ['p462','p36','p23'],
            ['p471','p37','p24'],
            ['p472','p37','p24'],
            ['p481','p38','p24'],
            ['p482','p38','p24'],
        ]
        button_list.forEach(([x,y,z]) => apt_sum(x,y,z))





        


        

        //apt_a.innerHTML = 97078787
        apt_display()

    }   )
}

function apt_sum(sub_x,sub_y,sub_z) {
    
    m = Number(ss_star[sub_x].value) || 0
    //apt_a.innerHTML = m

    a = Number(cc_apt[sub_y][ss_apt[sub_x].value]) + m
    if (a - Number(base_apt[sub_y][ss_apt[sub_x].value])>10) {a = a - (a - Number(base_apt[sub_y][ss_apt[sub_x].value]) - 10)}
    cc_apt[sub_y][ss_apt[sub_x].value] = a 

    if (sub_z!=="null") {
        b = Number(cc_apt[sub_z][ss_apt[sub_x].value]) + m
        if (b - Number(base_apt[sub_z][ss_apt[sub_x].value])>10) {b = a - (a - Number(base_apt[sub_z][ss_apt[sub_x].value]) - 10)}
        cc_apt[sub_z][ss_apt[sub_x].value] = b
    }
    
    
    
}

function select_apt_display(apt_text){
    apt_text = apt_text || ""
    if (apt_text==="") {return ""}
    if (apt_text==="apt_shiba_") {return "芝"}
    if (apt_text==="apt_da_") {return "ダ"}
    if (apt_text==="apt_tan_") {return "短"}
    if (apt_text==="apt_ma_") {return "マ"}
    if (apt_text==="apt_chuu_") {return "中"}
    if (apt_text==="apt_chou_") {return "長"}
    if (apt_text==="apt_nige_") {return "逃"}
    if (apt_text==="apt_senkou_") {return "先"}
    if (apt_text==="apt_sashi_") {return "差"}
    if (apt_text==="apt_oiko_") {return "追"}
}


function apt_display() {
    pid_list.forEach(pid =>{
            if (document.getElementById('p_select_uma_icon_'+pid).value) {
            document.getElementById("apt_shiba_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_shiba_'])
            document.getElementById("apt_da_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_da_'])
            document.getElementById("apt_tan_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_tan_'])
            document.getElementById("apt_ma_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_ma_'])
            document.getElementById("apt_chuu_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_chuu_'])
            document.getElementById("apt_chou_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_chou_'])
            document.getElementById("apt_nige_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_nige_'])
            document.getElementById("apt_senkou_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_senkou_'])
            document.getElementById("apt_sashi_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_sashi_'])
            document.getElementById("apt_oiko_"+pid).innerHTML = apt_convert(cc_apt[pid]['apt_oiko_'])
            }
        })
}


function apt_convert(apt_val) {
   const apt_num = Number(apt_val)
   if (apt_num == 1) {return "G"}
   if (apt_num >= 2 && apt_num <= 4) {return "F"}
   if (apt_num >= 5 && apt_num <= 7) {return "E"}
   if (apt_num >= 8 && apt_num <= 10) {return "D"} 
   if (apt_num >= 11 && apt_num <= 13) {return "C"}
   if( apt_num >= 14 && apt_num <= 16) {return "B"}
   if( apt_num >= 17) {return "A"}
}