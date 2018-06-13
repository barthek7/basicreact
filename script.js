var movies =[
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'https://www.dvd-forum.at/img/uploaded/kinoplakate/large/121551411404542700.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51Q0R48W6PL._SX335_BO1,204,203,200_.jpg'
    },
    {
        id: 3,
        title: 'Matrix',
        desc: 'Real life or simulation, you have to choose',
        image: 'https://i.wpimg.pl/730x0/m.gadzetomania.pl/ma2-341823-616x327-924b4aee40e05.jpg'
    },
    {
        id: 4,
        title: 'Ong-Bak',
        desc: 'Fight for your honor',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51J0YJPHB2L._SY445_.jpg'
    }

];

var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image},)
    );
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));