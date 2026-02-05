function show_select_apt(id) {
   const modal = document.getElementById('p_select_apt_' + id);
   modal.style.display = "flex"
}
function hide_select_apt(id) {
   const modal = document.getElementById('p_select_apt_' + id);
   modal.style.display = "none"
}

function select_apt_listener() {
   document.querySelectorAll('.p_select_apt_button').forEach(btn => {
      btn.addEventListener('click', (e) => {
         const target = btn.dataset.target;
         show_select_apt(target);
      });
   });
   document.querySelectorAll('.p_select_apt').forEach(select_box => {
      const closeBtn = select_box.querySelector('.p_select_apt_close');
      if (closeBtn) {
         closeBtn.addEventListener('click', () => {
            const id = select_box.dataset.id;
            hide_select_apt(id);
         });
      }
      select_box.addEventListener('click', (e) => {
         if (e.target == select_box) {
            const id = select_box.dataset.id;
            hide_select_apt(id);
         }
      });
   });
};


//----------------------------------------------


function show_select_uma(id) {
   const modal = document.getElementById('p_select_uma_' + id);
   modal.style.display = "block"
}
function hide_select_uma(id) {
   const modal = document.getElementById('p_select_uma_' + id);
   modal.style.display = "none"
}
function select_uma_listener() {
   document.querySelectorAll('.p_select_uma_button').forEach(btn => {
      btn.addEventListener('click', (e) => {
         select_uma_target = btn.dataset.target;
         show_select_uma(select_uma_target);
      });
   });


   document.querySelectorAll('.p_select_uma').forEach(select_box => {
      const id = select_box.dataset.id;
      const closeBtn = select_box.querySelector('.p_select_uma_close');
      if (closeBtn) {
         closeBtn.addEventListener('click', () => {
            hide_select_uma(id);
         });
      }

      select_box.addEventListener('click', (e) => {
         if (e.target == select_box) {
            hide_select_uma(id);
         }
      });

      document.querySelectorAll('.p_select_uma_item').forEach(item => {
         item.addEventListener('click', (e) => {
            const select_c_target = item.querySelector('img').dataset.target;

            let select_c_icon = document.getElementById("p_select_uma_icon_"+select_uma_target)
            let select_c_shiba = document.getElementById("apt_shiba_"+select_uma_target)
            let select_c_da = document.getElementById("apt_da_"+select_uma_target)
            let select_c_tan = document.getElementById("apt_tan_"+select_uma_target)
            let select_c_ma = document.getElementById("apt_ma_"+select_uma_target)
            let select_c_chuu = document.getElementById("apt_chuu_"+select_uma_target)
            let select_c_chou = document.getElementById("apt_chou_"+select_uma_target)
            let select_c_nige = document.getElementById("apt_nige_"+select_uma_target)
            let select_c_senkou = document.getElementById("apt_senkou_"+select_uma_target)
            let select_c_sashi = document.getElementById("apt_sashi_"+select_uma_target)
            let select_c_oiko = document.getElementById("apt_oiko_"+select_uma_target)

            select_c_icon.src = './Texture2D/'+j_data.card_id[select_c_target][0].card_icon
            select_c_icon.value = select_c_target
            select_c_shiba.value = j_data.card_id[select_c_target][0].apt_shiba
            select_c_da.value = j_data.card_id[select_c_target][0].apt_da
            select_c_tan.value = j_data.card_id[select_c_target][0].apt_tan
            select_c_ma.value = j_data.card_id[select_c_target][0].apt_ma
            select_c_chuu.value = j_data.card_id[select_c_target][0].apt_chuu
            select_c_chou.value = j_data.card_id[select_c_target][0].apt_chou
            select_c_nige.value = j_data.card_id[select_c_target][0].apt_nige
            select_c_senkou.value = j_data.card_id[select_c_target][0].apt_senkou
            select_c_sashi.value = j_data.card_id[select_c_target][0].apt_sashi
            select_c_oiko.value = j_data.card_id[select_c_target][0].apt_oiko

            hide_select_uma(id);
         })
      });


   });
};

