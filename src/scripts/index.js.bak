const url ='http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-04&sortBy=publishedAt&apiKey=6e0fd4cc01274067841fb5103275d21';



$(document).ready(async function news(){
         await fetch(url)
        .then((res) => res.json())
        .then((articles) => {
            let output="";
            articles.articles.forEach((articles)=>{
                output += `
                    <li class="article">
                       <img class="article-img" src="${article.urlToImage}"/>

                       <h2 class="article-title">${article.title}</h2>

                       <p class="article-description">${article.description}</p>

                       <span class="article-author">${article.author}</span>

                       <a class="article-link" href="${article.url}" target="_blank"></a>
                    </li>
                `;
            });
            document.getElementById("news-articles").innerHTML=output;
        })
        .catch((err) => console.log(err));
    });

$(document).ready(function(){ 
    $('#search').keypress(()=>{
      let searchField = $("#search").val();
      const url1 = `https://newsapi.org/v2/everything?q=${searchField}&apiKey=6e0fd4cc01274067841fb5103275d214`;
      
      if(searchField !== ""){
        $.ajax({
          url: url1,
          method: "GET",
          dataType: "json",
          
            success: function(news){
            let output1 = "";
            let articles = news.articles;
            
            for(var art in articles){
              output1 +=`
                <li class="article">
                   <img class="article-img" src="${art.urlToImage}"/>
                   <h2 class="article-title">${art.title}</h2>
                   <p class="article-description">${art.description}</p>
                   <span class="article-author">${art.author}</span>
                   <a class="article-link" href="${art.url}" target="_blank"></a>
                </li>`;
            }
			console.log(output2);
            if(output2 !== ""){
              document.getElementById("news-articles").innerHTML=output2;  
            }
            else{
				news_articles.innerHTML='<li class="not-found">No article was found based on the search.</li>';

				        } 
          }   
        }); 
      }
	 
    });
});



