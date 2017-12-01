var data='';
function renderImage(content) {
  document.getElementById('content').innerHTML = content;
}

function renderThankYou(thank){
  document.getElementById('thank').innerHTML = thank;
}

async function getGifUrl() {
  let tag = document.getElementById('tag').value;
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=re2X8CUf1Q5mGrz8bYpEOBvS90hPoJ5c&tag='+tag;
  let result = await fetch(url);
  let jsonResult = await result.json();
  document.getElementById('val').value = 'https://giphy.com/gifs/'+jsonResult.data.id+'/html5';
  return jsonResult.data;
}

document.getElementById('getGif').addEventListener('click', async () => {
  renderImage('<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>');
  var imageData = await getGifUrl();
  renderImage('<a href="' + imageData.url + '" target="_blank"><img class="image img-responsive img-rounded" src="' + imageData.fixed_height_small_url + '" /></a>');
});

document.querySelector('.coppybtn').addEventListener('click', function(event) {
	  var copyTextarea = document.querySelector('.textarecopy');
	  copyTextarea.select();
	
 	 try {
 	   var successful = document.execCommand('copy');
      renderThankYou('<img src="ava.jpg" class="img-circle"><div>Thank you !</div>') 		
 	 } catch (err) {
 	   console.log('Oops, unable to copy');
    renderThankYou('<div>Error, please check your internet</div>')  		
  	}
 });