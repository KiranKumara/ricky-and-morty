import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodesStoreService } from '../../services/episodes-store.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  episode$ = this.episodeStore.episode$;
  episodeCharacters$ = this.episodeStore.episodeCharacters$;
  constructor(
    private route: ActivatedRoute,
    private episodeStore: EpisodesStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.episodeStore.getEpisode(this.route.snapshot.params.id);
  }

  navigateToCharacter(id: number): void {
    this.router.navigate(['/character', id]);
  }
}
