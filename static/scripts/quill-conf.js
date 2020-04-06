var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    ['link', 'image'],
    ['clean']                                         // remove formatting button
  ];
  
  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });
  