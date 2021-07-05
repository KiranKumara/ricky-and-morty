import { Component, OnInit } from '@angular/core';
import { Status } from '../models/data.models';
import { EpisodesStoreService } from '../services/episodes-store.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  character$ = this.episodeStore.character$;

  constructor(private episodeStore: EpisodesStoreService) {}

  ngOnInit(): void {}

  statusClass(status: Status): string {
    switch (status) {
      case Status.Alive:
        return 'alive';
      case Status.Dead:
        return 'dead';
      default:
        return 'unknown';
    }
  }
}
