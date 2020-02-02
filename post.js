class Post {
  constructor() {
    this.date = 'December, 31 2016';
    this.content = 'Srećna nova godina';
    this.comments = [];
    this.likes = 0;
  }

  showAllComments(kontejner) {
    kontejner.innerHTML = '';  
    this.comments.map(comment => {
      // console.log(comment.body);
      let korisnikKomentar = document.createElement('p');
      korisnikKomentar.innerHTML = `<strong>${comment.korisnik}</strong> ${comment.body}`;
      kontejner.prepend(korisnikKomentar);
    });
  }

  addComment(komentar) {
    this.comments.push(komentar);
    // console.log(this.comments);
    brojKomentara.textContent = `${post.comments.length} comments`;
    input.value = null;
  }

  addLike() {
    this.likes +=1;
  }
}

const post = new Post();

const button = document.querySelector('.addLike');
const lajkovi = document.querySelector('.likes-number');
const brojKomentara = document.querySelector('.comments-number');
const input = document.querySelector('#form-input');
const form = document.querySelector('.form');
const prikažiKomentare = document.querySelector('.showComments');
const sviKomentari = document.querySelector('#svi-komentari');
const datum = document.querySelector('.datum');
const sadržaj = document.querySelector('.content');

sadržaj.innerHTML = post.content;

datum.innerHTML = post.date;

button.addEventListener('click', () => {
  post.addLike();
  lajkovi.innerHTML = `likes ${post.likes}`;
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let uneseniKomentar = {
    korisnik: 'Slaven',
    body: `${input.value}`
  };
  post.addComment(uneseniKomentar);
  sviKomentari.innerHTML += `<strong>${uneseniKomentar.korisnik}</strong> ${uneseniKomentar.body}<br>`;
});

prikažiKomentare.addEventListener('click', () => {
  post.showAllComments(sviKomentari);
});