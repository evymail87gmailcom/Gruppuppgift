// JavaScript source code
function chooseCountrie() {
  //  const countryUri =
        fetch(smhiUri)
            .then((resp) => resp.json())
            .then(data => console.log(data));
}

function getCountries() {

    //Input till parametern
    //var k = "SE";
    const utest = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';
   // console.log(document.getElementById("countrycode").innerHTML = k);
    //console.log(document.getElementsByTagName("div"));


    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL', true);
 

    var soapmessage =
        `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
   <soap:Header/>
   <soap:Body>
      <web:CapitalCity>
         <web:sCountryISOCode>SE</web:sCountryISOCode>
      </web:CapitalCity>
   </soap:Body>
</soap:Envelope>`;
    xmlhttp.setRequestHeader("Content-Type", "text/xml");
    xmlhttp.send(soapmessage);
    

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                // prints the response to the console
           
              
                  
                console.log(xmlhttp.responseXML);
            }
                
            }
        }
    
    

      //  .then(data => console.log(data))
    //console.log(XMLDocument.getElementByTagName("m:CapitalCityResult"));

}
getCountries();










