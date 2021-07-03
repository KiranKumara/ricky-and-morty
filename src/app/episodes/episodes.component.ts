import { EpisodesStoreService } from './../services/episodes-store.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
})
export class EpisodesComponent implements OnInit {
  episodes$ = this.episodeStore.episodes$;

  constructor(private episodeStore: EpisodesStoreService) {}

  ngOnInit(): void {
    this.episodeStore.loadEpisodes();
  }

  @HostListener('window:scroll', ['$event'])
  loadMoreEpisodes(event: Event): void {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max && this.episodeStore.hasMorePage) {
      this.episodeStore.loadEpisodes();
    }
  }
}
