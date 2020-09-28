var http='https://www.googleapis.com/youtube/v3/commentThreads';
var apiKey='AIzaSyDwaGXONODlx02sYWzVHvJPDBzV4-EiOzM';
var part='snippet';
var maxResults= 100;
var videoId='Mt5UQSjBG2Q';
var pageToken= '';

var url= http+'?part='+part+'&key='+apiKey+'&videoId='+videoId+'&maxResults='+maxResults;

console.log(url)
apiAxios();

var elementDiv = document.querySelector('#apiResults');
var elementOl = document.createElement('ol');
elementDiv.appendChild(elementOl);




function apiAxios(){

    axios.get(url)
    .then(function(response){
        console.log(response);
        pegarDados(response.data);
        loop(response.data);
    })
    .catch(function(error){
        console.warn(error);
    });
}

function pegarDados(data){

     for(var i=0;i<data.items.length;i++){

        var textElements = document.createTextNode(data.items[i].snippet.topLevelComment.snippet.textDisplay);
        var elementLine = document.createElement('li');
        elementLine.appendChild(textElements);
        elementOl.appendChild(elementLine);
     }
}

function loop(data){
    pageToken = data.nextPageToken;
    console.log(pageToken);
    if (pageToken){
        url+='&pageToken='+pageToken;
        apiAxios();
    }

    

}

