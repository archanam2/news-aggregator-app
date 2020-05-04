const apikey="6e0fd4cc01274067841fb5103275d21";
var article_area=document.getElementById("news-articles");

function getNews(news){
  let output="";
  if(news.totalResults>0){
    news.articles.forEach(new1=>{
      output+= 
        ` <section class="container">
          <li class="article"><a class="article-link" href="${new1.url}" target="_blank">
          <div class="img_area">
          <img src="${new1.urlToImage}" class="article-img" alt="${new1.title}"></img>
          </div>
          <h2 class="article-title">${new1.title}</h2>
          <p class="article-description">${new1.description || "Description not available"}</p> <br>
          <span class="article-author">-${new1.author? new1.author: "Anon"}</span><br>
          </a>
          </li>
          </section>
        `;
    });
    article_area.innerHTML=output;
  }
  else
  { 
    article_area.innerHTML='<li class="not-found">No article was found based on the search.</li>';
  }
};

async function retreive(searchValueText=""){

    article_area.innerHTML='<p class="load">News are Loading...</p>';
    
    if(searchValueText!=""){
      url=`https://newsapi.org/v2/everything?q=${searchValueText}&apiKey=${apikey}`;
    }
    else
    {
      url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;
    }
    const response=await fetch(url);
    const result=await response.json();
    getNews(result);
}

async function searchvalue(e){  
    if (event.which === 13 || event.keyCode === 13 || event.key === "Enter")
     {
      retreive(e.target.value);
     }
};
//Attached Event listener for Searchbar to retreive text from Searchbar//
function start(){
  document.getElementById("search").addEventListener('keypress',searchvalue);
  retreive();
}
//Initializing Function//
(function(){
  start();}
)();


