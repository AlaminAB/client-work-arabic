// Basic example
$(document).ready(function () {

      $('#dtBasicExample').DataTable({
        // columnDefs: [{
        //     orderable: false,
        //     targets: 0
        //     }]
      });
      $('.dataTables_length').addClass('bs-select');

      $('.open-sf-body').click(function(){
          $(this).parent().next('.s-filter-body').slideToggle();
          $(this).toggleClass('active');
      })

      $('.clr-allfilter').click(function(){
          $('.s-filter-check:checked').trigger("click");
      })

      $('.clear-s-filter').click(function(){
          $(this).parent().parent().find('.s-filter-check:checked').trigger("click");
      })

      $('.hide-sidebar').click(function(){
          $('.sidebar').hide();
          $('.show-sidebar').show();
      })

      $('.show-sidebar').click(function(){
          $('.sidebar').show();
          $(this).hide();
      })

      $('.clps-all').click(function(){
        $('.open-sf-body').removeClass('active');
        $('.s-filter-body').slideUp();
      })

      $('.cls-tag').click(function(){
          $(this).parent().fadeOut();
      })
  });