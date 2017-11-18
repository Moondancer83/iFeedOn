import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.css']
})
export class ChanelComponent implements OnInit {

  items = [
    {
      url: 'http://www.origo.hu/itthon/20171118-volt-telitalalatos-az-otoslotton.html',
      title: 'Ha eltalálta ezt az 5 számot, akkor máris milliárdos',
      abstract: 'Volt telitalálatos szelvény az ötös lottón'
    },
    {
      url: 'http://www.origo.hu/itthon/20171117-ajandekba-adjak-a-sztarok-a-szivuket-advent-idejen.html',
      title: 'Ajándékba adják a szívüket',
      abstract: 'Énekesek, sportolók és tévések készítenek mézeskalácsszíveket, ezzel segítik az Ökumenikus Segélyszervezet kampányát.'
    },
    {
      url: 'http://www.origo.hu/itthon/20171116-alkoholista-anyja-hosszu-napokra-egy-szekrenybe-zarta-lopott-csalt-es-' +
      'prostitualtkent-is-dolgozott.html',
      title: 'A kedves ápolónő, aki a kertben ásta el a hullákat',
      abstract: 'Dorothea Puente 9 embert mérgezett meg.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
