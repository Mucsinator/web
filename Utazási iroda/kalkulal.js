function szamol() {
    var letszam = document.getElementById('letszam').value;
    var ejszaka = document.getElementById('ejszaka').value;
    var orszag = document.getElementById('orszag').value;
    var fizetendo;

    //--számolás--
      if (orszag=='b'){
        fizetendo=letszam*ejszaka*5600;
      }
      else if (orszag=='g'){
        fizetendo=letszam*ejszaka*6200;
      }
      else if (orszag=='h'){
        fizetendo=letszam*ejszaka*5000;
      }
      else{
        fizetendo=letszam*ejszaka*5800;
      }
    //------------
    document.getElementById('eredmeny').value = fizetendo+" Ft";
    
}