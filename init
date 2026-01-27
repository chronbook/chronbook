document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.p_sideA,.p_sideB').forEach(function (main_index, idx) {
      const pid = main_index.id || main_index.closest('[id]')?.id || ('auto' + idx);
      const p_new_1 = document.createElement('div');
      p_new_1.className = 'p_apt_ver';
      p_new_1.innerHTML = `
<div class ="p_apt_icon" id = "apt_icon_${pid}">Icon</div>
<div class ="p_apt_hor">
   <div class ="p_apt_ver">
      <div class ="p_apt_name">短</div>
      <div class ="p_apt_text" id = "apt_tan_${pid}">A</div>
      <div class ="p_apt_name">逃</div>
      <div class ="p_apt_text" id = "apt_nige_${pid}">A</div>
   </div>
   <div class ="p_apt_ver">
      <div class ="p_apt_name">マ</div>
      <div class ="p_apt_text" id = "apt_ma_${pid}">A</div>
      <div class ="p_apt_name">先</div>
      <div class ="p_apt_text" id = "apt_senkou_${pid}">A</div>
   </div>
</div>
</div>
`;
      main_index.appendChild(p_new_1);
      const p_new_2 = document.createElement('div');
      p_new_2.className = 'p_apt_ver';
      p_new_2.innerHTML = `
<button class="select_apt_button" data-target="${pid}">Select</button>
<div class="select_apt" id="select_apt_${pid}" data-id="${pid}">
   <div class="select_apt_content">
      <button class="select_apt_close">×</button>
      <div>
         <div class="option">
            <input type="radio" id="sstar_1_${pid}" name="sstar_${pid}">
            <label for="sstar_1_${pid}">★</label>
         </div>
         <div class="option">
            <input type="radio" id="sstar_2_${pid}" name="sstar_${pid}">
            <label for="sstar_2_${pid}">★★</label>
         </div>
         <div class="option">
            <input type="radio" id="select_star_3_${pid}" name="sstar_${pid}">
            <label for="sstar_3_${pid}">★★★</label>
         </div>
         <hr>
         <div class="option">
            <input type="radio" id="sapt_tan_${pid}" name="sapt_${pid}">
            <label for="sapt_tan_${pid}">短</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_ma_${pid}" name="sapt_${pid}">
            <label for="sapt_ma_${pid}">マ</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_chuu_${pid}" name="sapt_${pid}">
            <label for="sapt_chuu_${pid}">中</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_chou_${pid}" name="sapt_${pid}">
            <label for="sapt_chou_${pid}">長</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_shiba_${pid}" name="sapt_${pid}">
            <label for="sapt_shiba_${pid}">芝</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_da_${pid}" name="sapt_${pid}">
            <label for="sapt_da_${pid}">ダ</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_nige_${pid}" name="sapt_${pid}">
            <label for="sapt_nige_${pid}">逃</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_senkou_${pid}" name="sapt_${pid}">
            <label for="sapt_senkou_${pid}">先</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_sashi_${pid}" name="sapt_${pid}">
            <label for="sapt_sashi_${pid}">差</label>
         </div>
         <div class="option">
            <input type="radio" id="sapt_oiko_${pid}" name="sapt_${pid}">
            <label for="sapt_oiko_${pid}">追</label>
         </div>
      </div>
   </div>
</div>
<div class ="p_apt_hor">
   <div class ="p_apt_ver">
      <div class ="p_apt_name" id = "apt_芝">芝</div>
      <div class ="p_apt_text" id = "apt_芝_text">A</div>
      <div class ="p_apt_name" id = "apt_中">中</div>
      <div class ="p_apt_text" id = "apt_中_text">A</div>
      <div class ="p_apt_name" id = "apt_差">差</div>
      <div class ="p_apt_text" id = "apt_差_text">A</div>
   </div>
   <div class ="p_apt_ver">
      <div class ="p_apt_name" id = "apt_ダ">ダ</div>
      <div class ="p_apt_text" id = "apt_ダ_text">A</div>
      <div class ="p_apt_name" id = "apt_長">長</div>
      <div class ="p_apt_text" id = "apt_長_text">A</div>
      <div class ="p_apt_name" id = "apt_追">追</div>
      <div class ="p_apt_text" id = "apt_追_text">A</div>
   </div>
</div>
`;
      main_index.appendChild(p_new_2);
   })
});
