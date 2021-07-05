import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodesStoreService } from '../services/episodes-store.service';
import { Status } from '../models/data.models';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  episode$ = this.episodeStore.episode$;
  episodeCharacters$ = this.episodeStore.episodeCharacters$;

  constructor(
    private episodeStore: EpisodesStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  navigateToCharacter(id: number): void {
    this.router.navigate(['/characters', id]);
  }

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
