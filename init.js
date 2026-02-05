document.addEventListener('DOMContentLoaded', load_data, false);

async function load_data() {
    const response = await fetch('./data.json')
    j_data = await response.json()
    card_count = Object.keys(j_data.card_id).length - 1 
    create_layout()
    select_apt_listener()
    select_uma_listener()
    test()
}

   function create_layout() {
   document.querySelectorAll('.p_sideAce,.p_sideA,.p_sideB').forEach(function (main_index, idx) {
      const pid = main_index.id || main_index.closest('[id]')?.id || ('auto' + idx);
      const p_new_1 = document.createElement('div');
      p_new_1.className = 'p_apt_ver';
      p_new_1.innerHTML = `
<img src="" class ="p_select_uma_button" id ="p_select_uma_icon_${pid}" data-target="${pid}" value ="0">Icon_${pid}</img>
<div class="p_select_uma" id="p_select_uma_${pid}" data-id="${pid}">
   <div class="p_select_uma_content" data-target="${pid}">
      <button class="p_select_uma_close" >x</button>
   </div>
</div>

</div>
   <div class ="p_apt_hor">
      <div class ="p_apt_ver">
         <div class ="p_apt_name">短</div>
         <div class ="p_apt_text" id = "apt_tan_${pid}" value ="0">A</div>
         <div class ="p_apt_name">逃</div>
         <div class ="p_apt_text" id = "apt_nige_${pid}" value ="0">A</div>
      </div>
      <div class ="p_apt_ver">
         <div class ="p_apt_name">マ</div>
         <div class ="p_apt_text" id = "apt_ma_${pid}" value ="0">A</div>
         <div class ="p_apt_name">先</div>
         <div class ="p_apt_text" id = "apt_senkou_${pid}" value ="0">A</div>
      </div>
   </div>
</div>
`;
      main_index.appendChild(p_new_1);
      const p_new_2 = document.createElement('div');
      p_new_2.className = 'p_apt_ver';
      p_new_2.innerHTML = `
<button class="p_select_apt_button" id="p_select_apt_button_${pid}" data-target="${pid}">Select</button>
<div class="p_select_apt" id="p_select_apt_${pid}" data-id="${pid}">
   <div class="p_select_apt_content">
      <button class="p_select_apt_close">x</button>
      <div>
            <input type="radio" id="sstar_1_${pid}" name="sstar_${pid}" value = "1">
            <label for="sstar_1_${pid}">★</label>
            <input type="radio" id="sstar_2_${pid}" name="sstar_${pid}" value = "2">
            <label for="sstar_2_${pid}">★★</label>
            <input type="radio" id="sstar_3_${pid}" name="sstar_${pid}" value = "3">
            <label for="sstar_3_${pid}">★★★</label>
            <input type="radio" id="sapt_tan_${pid}" name="sapt_${pid}" value = "apt_tan_">
            <label for="sapt_tan_${pid}">短</label>
            <input type="radio" id="sapt_ma_${pid}" name="sapt_${pid}" value = "apt_ma_">
            <label for="sapt_ma_${pid}">マ</label>
            <input type="radio" id="sapt_chuu_${pid}" name="sapt_${pid}" value = "apt_chuu_">
            <label for="sapt_chuu_${pid}">中</label>
            <input type="radio" id="sapt_chou_${pid}" name="sapt_${pid}" value = "apt_chou_">
            <label for="sapt_chou_${pid}">長</label>
            <input type="radio" id="sapt_shiba_${pid}" name="sapt_${pid}" value = "apt_shiba_">
            <label for="sapt_shiba_${pid}">芝</label>
            <input type="radio" id="sapt_da_${pid}" name="sapt_${pid}" value = "apt_da_">
            <label for="sapt_da_${pid}">ダ</label>
            <input type="radio" id="sapt_nige_${pid}" name="sapt_${pid}" value = "apt_nige_">
            <label for="sapt_nige_${pid}">逃</label>
            <input type="radio" id="sapt_senkou_${pid}" name="sapt_${pid}" value = "apt_senkou_">
            <label for="sapt_senkou_${pid}">先</label>
            <input type="radio" id="sapt_sashi_${pid}" name="sapt_${pid}" value = "apt_sashi_">
            <label for="sapt_sashi_${pid}">差</label>
            <input type="radio" id="sapt_oiko_${pid}" name="sapt_${pid}" value = "apt_oiko_">
            <label for="sapt_oiko_${pid}">追</label>
      </div>
   </div>
</div>
<div class ="p_apt_hor">
   <div class ="p_apt_ver">
      <div class ="p_apt_name">芝</div>
      <div class ="p_apt_text" id = "apt_shiba_${pid}" value ="0">A</div>
      <div class ="p_apt_name">中</div>
      <div class ="p_apt_text" id = "apt_chuu_${pid}" value ="0">A</div>
      <div class ="p_apt_name">差</div>
      <div class ="p_apt_text" id = "apt_sashi_${pid}" value ="0">A</div>
   </div>
   <div class ="p_apt_ver">
      <div class ="p_apt_name">ダ</div>
      <div class ="p_apt_text" id = "apt_da_${pid}" value ="0">A</div>
      <div class ="p_apt_name">長</div>
      <div class ="p_apt_text" id = "apt_chou_${pid}" value ="0">A</div>
      <div class ="p_apt_name">追</div>
      <div class ="p_apt_text" id = "apt_oiko_${pid}" value ="0">A</div>
   </div>
</div>
`;
      main_index.appendChild(p_new_2);

   })
   document.querySelectorAll('.p_select_uma_content').forEach(main_index => {
      for (let i = 0; i<= card_count; i++) {
         let p_new_3 = document.createElement('div');
         p_new_3.className = 'p_select_uma_item'
         p_new_3.innerHTML = '<img src ="./Texture2D/'+j_data.card_id[Object.keys(j_data.card_id)[i]][0].card_icon+'" width="100%" height="100%" data-target="'+Object.keys(j_data.card_id)[i]+'"}"></img>'
         main_index.appendChild(p_new_3);
      }
   })
};