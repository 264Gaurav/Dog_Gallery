api_url = 'https://dog.ceo/api/breeds/image/random';


const fetchImage=()=>{
    var xhrRequest= new XMLHttpRequest();

    xhrRequest.onload=()=>{
        //console.log(xhrRequest.response);

        var JSONresponse=JSON.parse(xhrRequest.response);
        var imageUrl=JSONresponse.message;

        $('img').attr('src' , imageUrl);
    };

    xhrRequest.open('get' , api_url);
    xhrRequest.send();
}


$('.btn').click(fetchImage);   // jQuery used here 
