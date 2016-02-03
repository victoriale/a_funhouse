//template global helper to place a placeholder image if error is returned
Template.registerHelper('placeholder', function(){
  console.log('Image Load Error');
  return "this.src='/img_bckgnd.png'";
})

//with variable numberOfImages entered as Integer, then function will return an array of object images
linkImageGenerator = function(numberOfImages) {
  var listOfImages = [];
  var imageUrl = '/img_bckgnd.png';
  for(var i = 0; i < numberOfImages; i++) {
    var imageNumber = i + 1;
    listOfImages.push({
      imageUrl: imageUrl,
      numberForAlt: imageNumber
    });
  }
  return listOfImages;
}

//will toss array of images in an array and preload them
preload = function (imgs) {
  var images = [];
	for (i = 0; i < imgs.length; i++) {
		images[i] = new Image()
		images[i].src = imgs[i]
	}
}

SetPageTitle = function(newtitle,override) {
  var DefaultTitle = "JoyfulHome";
  override = override || false;
  newtitle = newtitle || null;
  if ( override ) {
    document.title = newtitle;
  } else {
    if ( newtitle != null ) {
      document.title = newtitle + " | " + DefaultTitle;
    } else {
      document.title = DefaultTitle;
    }
  }
  delete override;
  delete newtitle;
}
