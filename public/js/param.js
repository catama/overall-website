function paramCheck(){
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pageParam = urlParams.get('page')
console.log(pageParam);
if(pageParam!= null){
    page =  pageParam;
    generatePages(page); 
}
}
