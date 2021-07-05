import { Component, OnInit } from '@angular/core';
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
}
