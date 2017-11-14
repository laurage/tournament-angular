import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayersComponent implements OnInit {
  players = PLAYERS;

  player: Player = {
    id: 1,
    name: 'Laura'
  };

  selectedPlayer: Player;

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  constructor() { }

  ngOnInit() {
  }

  // player = 'Windstorm';

}
