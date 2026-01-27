function show_select_apt(id) {
   const modal = document.getElementById('select_apt_' + id);
   modal.style.display = "block"
}

function hide_select_apt(id) {
   const modal = document.getElementById('select_apt_' + id);
   modal.style.display = "none"
}

document.addEventListener('DOMContentLoaded', () => {

   document.querySelectorAll('.select_apt_button').forEach(btn => {
      btn.addEventListener('click', (e) => {
         const target = btn.dataset.target;
         show_select_apt(target);
      });
   });


   document.querySelectorAll('.select_apt').forEach(modal => {

      const closeBtn = modal.querySelector('.select_apt_close');
      if (closeBtn) {
         closeBtn.addEventListener('click', () => {
            const id = modal.dataset.id;
            hide_select_apt(id);
         });
      }

      modal.addEventListener('click', (e) => {
         if (e.target === modal) {
            const id = modal.dataset.id;
            hide_select_apt(id);
         }
      });
   });

});
