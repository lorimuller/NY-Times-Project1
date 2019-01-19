
function showNYArticles() {

var corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
var queryURL = corsAnywhereUrl + "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=VHGdssrw5vrcGy3vA9Gq0xot9he71dYB";


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});
}
showNYArticles();