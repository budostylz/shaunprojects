$(function() {

    $( ".btn-primary" ).click(function() {
        console.log( "Handler for .click() called." );
        console.log(window.location)
        window.location.href = 'resume/ShaunLewisResume.docx';
      });
  
});
