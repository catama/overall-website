function generatePages(jsonFile) {
    let fileName ='./JSONfiles/{{name}}.json';
    fileName = fileName.replace('{{name}}', jsonFile); 

    fetch(fileName)
      .then(response => response.json())
      .then(data => {
        let html = '';
        let pageTitle = '';
        data.forEach(item => {
            let itemHtml = '<div>';
          
            if(item.title !=null){
                itemHtml+= '<h1> <span>{{title}}</span></h1>';
                itemHtml = itemHtml.replace('{{title}}', item.title);
                pageTitle = item.title;
            }

            if(item.subtitle !=null){
                itemHtml+= '<h3>{{subtitle}}</h3>';
                itemHtml = itemHtml.replace('{{subtitle}}', item.subtitle);
            }

            if(item.image != null){
                itemHtml+= "<img src='./images/{{image}}' title='{{title}}' alt ='{{alt}}' class = 'roundedCorners'";
                itemHtml= itemHtml.replace('{{image}}', item.image);
                itemHtml= itemHtml.replace('{{title}}', item.imageTitle);
                itemHtml= itemHtml.replace('{{alt}}', item.imageAlt);
            }

            if(item.description !=null){
                    itemHtml += '<p>{{description}}</p>';
                    itemHtml = itemHtml.replace('{{description}}', item.description.map(p => `<p class="${item.descriptionClass}">${p}</p>`).join(''));
            }
            if(item.list != null){
                itemHtml += "<ul>{{list}}</ul>";
                itemHtml = itemHtml.replace('{{list}}', item.list.map(p => `<li>${p}</li>`).join(''));
            }
            if(item.olist != null){
                itemHtml += "<ol>{{list}}</ol>";
                itemHtml = itemHtml.replace('{{list}}', item.olist.map(p => `<li>${p}</li>`).join(''));
            }
            if(item.embed != null){
                itemHtml += "<center>{{embed}}<\center>";
                itemHtml = itemHtml.replace('{{embed}}', item.embed)
            }
            if(item.linkText != null){

                if(item.linkText.length == 1){
             
                    if(item.linkText[0] == "email us"){
                        let linkHolder = "<a href ='mailto:facilities@doc.gold.ac.uk'>" + item.linkText[0] +"</a>";
                        itemHtml = itemHtml.replace('{{link}}', linkHolder)
                    }else{
                        let linkHolder = "<a href ='"+ item.linkVal[0] + "' target='_blank' >" + item.linkText[0] +"</a>";
                        itemHtml = itemHtml.replace('{{link}}', linkHolder)
                    }
                    
                }else{

                    for(let i = 0; i< item.linkText.length;i++){
                        let tempLink;
                        if(i==0){
                            tempLink="{{link}}"
                        }else{
                            tempLink = "{{link" + i +"}}";
                        }
            
                        let linkHolder = "<a href ='"+ item.linkVal[i] + "' target='_blank' >" + item.linkText[i] +"</a>";
                    itemHtml = itemHtml.replace(tempLink, linkHolder)

                    }
                }
               

            }


            itemHtml += '</div>';
          html += itemHtml;
        });
        document.getElementById('container').innerHTML = html;
        document.getElementById('page-title').innerHTML= pageTitle;
      });
    
}
