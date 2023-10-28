class Movie{
   title='';
   studio='';
   rating='';

    constructor(title,studio,rating='PG'){
       this.title=title;
        this.studio=studio;
       this.rating=rating;
    }
    
}
//Creating  5 instances for a class Movie and adding instances to an array(array name ratingarr).
var ratingarr=[];
var movieobj1=new Movie('Casino Royale','Eon Productions','PG13');
ratingarr.push(movieobj1);
var movieobj2=new Movie('Casino Royale2','Eon Productions2');
ratingarr.push(movieobj2);
var movieobj3=new Movie('Casino Royale3','Eon Productions3','R');
ratingarr.push(movieobj3);
var movieobj4=new Movie('Casino Royale4','Eon Productions4','PG13');
ratingarr.push(movieobj4);
var movieobj5=new Movie('Casino Royale5','Eon Productions5');
ratingarr.push(movieobj5);

//Declaring array to receive movie name with PG rating.
var moviearray=[];

//Defining function getPG to find and return the movie names with PG rating.
var getPG= (ratingarr)=>{
ratingarr.forEach((value) => {
if(value.rating === 'PG') {
var movietitle=value.title;
moviearray.push(movietitle);
}
});
return moviearray;
}
getPG(ratingarr);

console.log("Movie names with the rating PG: ",moviearray);
//console.log(a);

