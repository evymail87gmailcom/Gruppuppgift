// JavaScript source code
console.log("Script is running")

function addheader(){
    console.log("adding header");
    var header = document.createElement("div");
    header.className = "header";
    var text = document.createTextNode("HEADER"); 
    header.appendChild(text);
    document.body.appendChild(header);
}

/* this could also be set into a function like the header function, I did it this way so the div is global and reachable for dropDown function */
console.log("adding columns");
var columnleft = document.createElement("div");
columnleft.className = "columnleft";
document.body.appendChild(columnleft);

var columnright = document.createElement("div");
columnright.className = "columnright";
document.body.appendChild(columnright);
var item = [0];
var nextarray = new Array(2);
// when called this function will add a drop down menu
function dropDown() {
    console.log("adding drop down list")

    var dropDownDiv = document.createElement("div"); // creates a div element to put everything into
    dropDownDiv.className = "dropdownDiv"; // assigning classname to access element in css file

    var button = document.createElement("button"); // drop down list button
    button.className = "dropbtn";
    button.innerHTML = "Choose country";

    var fullList = document.createElement("li"); // list to place al items in
    fullList.id = "dropdown-content"; // assigning id to get this element later on
    fullList.className = "dropdown-content"; // assigning classname for css file, and also window.onclick event

    // will be replaced by mockAPI countries
    /*var item = [
        ["country 1"],
        ["country 2"],
        ["country 3"],
        ["country 4"],
        ["country 5"],
        ["country 6"]
    ]
    */
   
    //Get instance "country" from mock-api
    function chooseCountrie() {
        

        const countryUri = 'https://5eb43f8c2b81f7001630838d.mockapi.io/countriesList';
        fetch(countryUri)
            .then((resp) => resp.json())
            .then(function (mockData) {
                console.log(mockData);
                return mockData.map(function (countryIso) {
                    item.length = 0;
                    var option = document.createElement("option");
                    option.text = countryIso.Country;
                    option.value = countryIso.ISO;
                 
                    item.push(option.text, option.value);
                    nextarray.push([option.text, option.value]);
                    console.table(nextarray);
                    //console.log(item);
                   
                        var listItem = document.createElement("p"); // creating paragraph element 
                        listItem.appendChild(document.createTextNode(item[0])); // adding item from list to paragraph 
                        fullList.appendChild(listItem); // adding paragraph to list element
                        document.getElementsByName(listItem).innerHTML = item;
                  
                 
                }) 
            })
        //Problemet här är att det nya värdet av item inte hänger med
        // iterate a list using a for loop
        
    }
   

    chooseCountrie();
 
    button.addEventListener("click",
        function dropTheList() {
            document.getElementById("dropdown-content").classList.toggle("show");
        })
    
    // event to close dropdown list when clicking anywhere else 
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    //Funktion för varje item som "onclick item" så händer något
    //  adding all elements to document body
    button.appendChild(fullList);
    dropDownDiv.appendChild(button);
    columnleft.appendChild(dropDownDiv);
}


addheader();
dropDown();


var next;

console.log(next);












function getCountries() {
    var capital = document.createElement("div"); // creates a div element to put everything into
    capital.id = "capital"; // assigning classname to access element in css file
    document.body.appendChild(capital);

   var textT = "";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL', true);
 //Variabel som isokoden läggs i 
    var isoCode = "SE";
    //meddelande till soapapi
    var soapmessage =`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
   <soapenv:Header/>
   <soapenv:Body>
      <web:CapitalCity>
         <web:sCountryISOCode>SE</web:sCountryISOCode>
      </web:CapitalCity>
   </soapenv:Body>
</soapenv:Envelope>`;
  

    var parser, xmlDoc;
    parser = new DOMParser();
    

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                // prints the response to the console

                xmlDoc = parser.parseFromString(xmlhttp.responseXML, "text/xml");
               

                textT=xmlDoc.getElementsByTagName('m:CapitalCityResult')[0].childNodes[0];
                console.log(textT);
                // document.getElementById("capital").innerHTML = 'Capital City: '+textT.nodeValue;
            }
           
            }
        }
    
    

    //Input till parametern
    var k = "SE";

   // console.log(document.getElementById("isoCode").innerHTML = k);
    //console.log(document.getElementsByTagName("div"));
    //var hej = xmlhttp.response.getElementsByName("CapitalCity");
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(soapmessage);
    console.log(soapmessage);
}
//getCountries();






