function bezar() {
  document.getElementById('csukjBe').style.display = 'none';
}

//https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
let kepek = [
  [
    {    //kepek[0][0]
      cim : 'Ugly leaves',
      forras : '../imgSrc/pexels-photo-1382393.jpeg',
      leiras : 'Irrelevant filler about this picture. This filler should be a bit longer to test whether the div element works fine, and the text is fully readable.'
    }, { //kepek[0][1]
      cim : 'Coffee',
      forras : '../imgSrc/pexels-photo-1415555.jpeg',
      leiras : 'Irrelevant filler'
    }, { //kepek[0][2]
      cim : 'Beach',
      forras : '../imgSrc/pexels-photo-1426827.jpeg',
      leiras : 'Irrelevant filler'
    }, { //kepek[0][3]
      cim : 'Valley',
      forras : '../imgSrc/pexels-photo-1574843.jpeg',
      leiras : 'Irrelevant filler'
    }
  ], [
    {    //kepek[1][0]
      cim : 'Mountains and clouds',
      forras : '../imgSrc/pexels-photo-1612367.jpeg',
      leiras : 'Irrelevant filler'
    }, { //kepek[1][1]
      cim : 'A man with a camera in his hand',
      forras : '../imgSrc/pexels-photo-571169.jpeg',
      leiras : 'Irrelevant filler'
    }, { //kepek[1][2]
      cim : 'Mountain',
      forras : '../imgSrc/pexels-photo-633198.jpeg',
      leiras : 'Irrelevant filler'
    }, { //kepek[1][3]
      cim : 'Moon and mountain',
      forras : '../imgSrc/pexels-photo-673020.jpeg',
      leiras : 'Irrelevant filler'
    }
  ], [
    {    //kepek[2][0]
      cim : 'Car', //Longer captions will not cause any problem with the width of the tabledataaptions will not cause any problem with the waptions will not cause any problem with the waptions will not cause any problem with the w
      forras : '../imgSrc/pexels-photo-790176.jpeg',
      leiras : 'Irrelevant filler'
    }, { //kepek[2][1]
      cim : 'Minimalism',
      forras : '../imgSrc/pexels-photo-921294.png',
      leiras : 'Irrelevant filler'
    }, { //kepek[2][2]
      cim : 'Another beach',
      forras : '../imgSrc/pexels-photo-995939.jpeg',
      leiras : 'Irrelevant filler'
    }, { //kepek[2][3]
      cim : '',
      forras : '',
      leiras : ''
    }
  ]
];

function setKepDolgai(i, j) {
  let temp = document.getElementsByClassName('kep')[0];
  temp.getElementsByTagName('IMG')[0].src = kepek[i][j].forras;
  temp.getElementsByTagName('H2')[0].innerHTML = kepek[i][j].cim;
  temp.getElementsByTagName('P')[0].innerHTML = kepek[i][j].leiras;
}

function toGrid() {
  document.getElementsByClassName('galeria')[0].style.display = 'block';
  document.getElementsByClassName('nezegeto')[0].style.display = 'none';
}

function toNezegeto(i, j) {
  document.getElementsByClassName('galeria')[0].style.display = 'none';
  document.getElementsByClassName('nezegeto')[0].style.display = 'block';
  setKepDolgai(i, j);
}


//A CIMBEN TULCSORDULO SZOVEG NAGYON NEM TESZ JOT!!!
function toltsdFel() {
  let tempCella;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {

      //https://www.w3schools.com/jsref/coll_table_cells.asp
      tempCella = document.getElementById('tablazat').rows[i].cells[j];

      //https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp
      tempCella.getElementsByTagName('IMG')[0].src = kepek[i][j].forras;

      //https://www.w3schools.com/jsref/met_element_addeventlistener.asp
      tempCella.getElementsByTagName('IMG')[0].addEventListener("click", function() { toNezegeto(i, j); kepIndexInit(i, j); });
      tempCella.getElementsByTagName('P')[0].innerHTML = kepek[i][j].cim;
    }
  }
}

let kepI, kepJ;

function kepIndexInit(i, j) {
  kepI = i;
  kepJ = j;
}

function leptet(ertek) {
  do {
    kepJ += ertek;
    if (kepJ >= 4) { //kepJ = kepek[kepI].length
      kepJ = 0;
      kepI++;
    } else if (kepJ <= -1) {
      kepJ = 3;
      kepI--;
    }
    if (kepI >= 3) {
      kepI = 0;
      //a kepJ mar 0
    } else if (kepI <= -1) {
      kepI = 2
      //a kepJ mar 3
    }
  }while (kepek[kepI][kepJ].forras == '');
  setKepDolgai(kepI, kepJ);
}
