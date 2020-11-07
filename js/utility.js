// new fields
function moreFields() {
  var counter = 0;
  counter++;
  var newFields = document.getElementById('videoLinkForm').cloneNode(true);
  newFields.id = '';
  newFields.style.display = 'block';
  newFields.value = "";
  var newField = newFields.childNodes;
  for (var i = 0; i < newField.length; i++) {
    var theName = newField[i].name;
    newField[i].value = "";
    if (theName)
      newField[i].name = theName + counter;
  }
  var insertHere = document.getElementById('newLinkform');
  insertHere.parentNode.insertBefore(newFields, insertHere);
  return false;
}

function removeFields(node) {
  var field = node.parentNode;
  field.parentNode.removeChild(field);
}

//     document.getElementsByTagName('input')[0].addEventListener('change', function(event) {
    //   var file = event.target.files[0];
    //   var fileReader = new FileReader();
    //   if (file.type.match('image')) {
    //     fileReader.onload = function() {
    //       var img = document.createElement('img');
    //       img.src = fileReader.result;
    //       document.getElementsByTagName('div')[0].appendChild(img);
    //     };
    //     fileReader.readAsDataURL(file);
    //   } else {
    //     fileReader.onload = function() {
    //       var blob = new Blob([fileReader.result], {type: file.type});
    //       var url = URL.createObjectURL(blob);
    //       var video = document.createElement('video');
    //       var timeupdate = function() {
    //         if (snapImage()) {
    //           video.removeEventListener('timeupdate', timeupdate);
    //           video.pause();
    //         }
    //       };
    //       video.addEventListener('loadeddata', function() {
    //         if (snapImage()) {
    //           video.removeEventListener('timeupdate', timeupdate);
    //         }
    //       });
    //       var snapImage = function() {
    //         var canvas = document.createElement('canvas');
    //         canvas.width = video.videoWidth;
    //         canvas.height = video.videoHeight;
    //         canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    //         var image = canvas.toDataURL();
    //         var success = image.length > 100000;
    //         if (success) {
    //           var img = document.createElement('img');
    //           img.src = image;
    //           document.getElementsByTagName('div')[0].appendChild(img);
    //           URL.revokeObjectURL(url);
    //         }
    //         return success;
    //       };
    //       video.addEventListener('timeupdate', timeupdate);
    //       video.preload = 'metadata';
    //       video.src = url;
    //       // Load video in Safari / IE11
    //       video.muted = true;
    //       video.playsInline = true;
    //       video.play();
    //     };
    //     fileReader.readAsArrayBuffer(file);
    //   }
    // });



    //     ClassicEditor
    //       .create(document.querySelector('#editor'))
    //       .then(editor => {
    //         console.log(editor);
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });