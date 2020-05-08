import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

@Input() results: any = [];

/*
  results: any[] = [
    {
      'name': 'Juego 1',
      'value': 21
    },
    {
      'name': 'Juego 2',
      'value': 24
    },
    {
      'name': 'Juego 3',
      'value': 16
    },
    {
      'name': 'Juego 4',
      'value': 31
    }
  ];
*/

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'; // { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']  };

  // intervalo;

  constructor() {
    // console.log(  Math.round( Math.random() * 500 ) );
    /*
    this.intervalo = setInterval( () => {
      console.log('tick');
      const newResults = [...this.results];
      for ( let i in newResults ) {
        newResults[i].value =  Math.round( Math.random() * 500 )
      }
      this.results = [...newResults];
    }, 1500);
  */
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval ( this.intervalo );
  }

}
