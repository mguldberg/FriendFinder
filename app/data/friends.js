// ===============================================================================
// DATA
// Below data will hold all of the friends and each person's responses.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name":"Goldy",
    "photo":"https://cdn.vox-cdn.com/thumbor/Z7MFNgmp--zpslq6yVFNEKiHR3w=/0x0:2084x3132/920x613/filters:focal(815x588:1147x920):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56839205/457217340.0.jpg",
    "scores":[
        1,
        2,
        2,
        5,
        5,
        2,
        2,
        2,
        5,
        2
      ]  
  },
  {
    "name":"Sparty",
    "photo":"https://cbsdetroit.files.wordpress.com/2014/08/120943249.jpg?w=640&h=360&crop=1",
    "scores":[
        5,
        1,
        1,
        2,
        1,
        1,
        5,
        2,
        2,
        2
      ]  
  },
  {
    "name":"the Michigan Wolverine",
    "photo":"http://www.interbasket.net/news/wp-content/uploads/Michigan-old-wolverine-vintage-logo.png",
    "scores":[
        3,
        1,
        1,
        1,
        1,
        5,
        1,
        1,
        2,
        2
      ]  
  },
  {
    "name":"Brutus",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/5/57/Brutus_Buckeye_in_2017.jpg",
    "scores":[
        2,
        1,
        3,
        3,
        3,
        1,
        2,
        5,
        2,
        2
      ]  
  },
  {
    "name":"Chief Illiniwek",
    "photo":"http://edibleinkpr.com/blog/wp-content/uploads/2013/07/Chief_illiniwek_logo.gif",
    "scores":[
        4,
        2,
        4,
        2,
        3,
        2,
        2,
        1,
        2,
        5
      ]  
  },
  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
