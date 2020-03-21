// Basic example
$(document).ready(function () {

      $('#dtBasicExample').DataTable({
        "aaSorting": [],
        columnDefs: [{
            targets: 0,
            orderable: false,
            }]
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

      let clps = false;
      $('.clps-all').click(function(){
          if (clps){
            $('.open-sf-body').removeClass('active');
            $('.s-filter-body').slideUp();
            $(this).text('Expand All')
            clps = false;
          }
          else{
            $('.open-sf-body').addClass('active');
            $('.s-filter-body').slideDown();
            $(this).text('Collapse All')
            clps = true;
          }
        
      })

      $('.cls-tag').click(function(){
          $(this).parent().fadeOut();
      })
  });