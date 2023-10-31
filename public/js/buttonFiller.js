
function buttonGenerator(){
    let fileName ='./JSONfiles/menu.json';
    fetch(fileName)
      .then(response => response.json())
      .then(data => {
        let html = "<span>";
        let val = 1;
        data.forEach(item => {
            let itemHtml ="";
            if(item.subsection!=null){
                itemHtml += "<button class='w3-button w3-block w3-left-align' onclick=accordian('Acc"+ val +"')> <strong>{{section}} </strong> </button> <div id='Acc"+ val +"' class='w3-bar-block w3-hide w3-orange'>";
            }else if (item.link !=null){
                itemHtml += "<button class='w3-button w3-block w3-left-align' onclick='{{link}}'> <strong>{{section}}</strong></button>";
            }else{
                itemHtml+= "<p class='highlight'> <strong>{{section}}</strong> <br> {{description}}</p>"
            }
         
            if(item.section !=null){
                itemHtml=itemHtml.replace('{{section}}', item.section)
            }

            if(item.subsection!=null && item.subsectionJSON!=null){
                for(let i = 0; i <item.subsection.length; i++){
                    itemHtml += " <a href='#' data-page='{{subsectionJSON}}'  class='w3-bar-item w3-button'>{{subsection}}</a>";
                    itemHtml=itemHtml.replace('{{subsectionJSON}}', item.subsectionJSON[i]);
                    itemHtml=itemHtml.replace('{{subsection}}', item.subsection[i]);
                    
                }
                itemHtml+="</div>";
            }

            if(item.link!= null){
                itemHtml=itemHtml.replace('{{link}}', item.link);
            }

            if(item.description != null){
                itemHtml=itemHtml.replace('{{section}}', item.section);
                itemHtml=itemHtml.replace('{{description}}', item.description);
            }
          
          html += itemHtml;
        
          val++;
        });
        html+='</span>';
        document.getElementById('myLinks').innerHTML = html;
        const buttons = document.querySelectorAll("[data-page]");
        buttons.forEach(function(button){
            button.addEventListener("click", function() {
            const page = button.getAttribute("data-page");
            localStorage.setItem("page", page);
            let pageName = "./facility.html?page=" + page;
                console.log(page);
                window.location.href = pageName;
          });
        })
      });
    

}