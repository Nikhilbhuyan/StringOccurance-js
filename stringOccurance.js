var name = prompt('what is your name');
var head = document.createElement('h3');
head.textContent = "Hii" + " " + name;
document.body.appendChild(head);

var run = function(){
  var button = document.getElementById("btn");
  var input = document.getElementById("input").value;
  var div = document.createElement("div");
  document.body.appendChild(div);

  var occurance = 0;
  input = input.toLowerCase();
  var data = input.split(" ");

  for( i = 0; i < data.length; i++){
    for(j = 0; j < data.length; j++){
      if(data[i] == data[j]){
        occurance += 1;
        if (occurance > 1){
          data.splice(j,1);
        }
      }
    }
    var p = document.createElement("p");
    p.textContent = "The occurance of" +" " + data[i] +" "+ "is" +" "+ occurance;
    div.appendChild(p);
    occurance = 0;

  }
};
