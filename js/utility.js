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
