var request = new XMLHttpRequest();

request.open('POST', 'https://api.kairos.com/enroll');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('app_id', 'e70fee1f');
request.setRequestHeader('app_key', '98112e824f82622206d370dae6ed74b9');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'image': 'http://media.kairos.com/kairos-elizabeth.jpg',
  'subject_id': 'Elizabeth',
  'gallery_name': 'MyGallery'
};

request.send(JSON.stringify(body));
