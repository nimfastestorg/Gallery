function bezar() {
  document.getElementById('csukjBe').style.display = 'none';
}

//https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript
let kepek = [
  [
    {    //kepek[0][0]
      cim : 'Ugly leaves',
      forras : '../imgSrc/pexels-photo-1382393.jpeg',
      leiras : 'Irrelevant filler'
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
      cim : 'Car',
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

//A CIMBEN TULCSORDULO SZOVEG NAGYON NEM TESZ JOT!!!

function toltsdFel() {
  let cella;
  for(i = 0; i < 3; i++) {
    for(j = 0; j < 4; j++) {
      //https://www.w3schools.com/jsref/coll_table_cells.asp
      cella = document.getElementById('tablazat').rows[i].cells[j];
      //https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp
      cella.getElementsByTagName('IMG')[0].src = kepek[i][j].forras;
      cella.getElementsByTagName('P')[0].innerHTML = kepek[i][j].cim;
    }
  }
}
