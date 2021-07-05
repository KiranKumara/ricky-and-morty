import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodesStoreService } from '../services/episodes-store.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$ = this.episodeStore.characters$;
  constructor(
    private episodeStore: EpisodesStoreService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  loadMoreEpisodes(event: Event): void {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    if (pos === max && this.episodeStore.hasCharactersMorePage) {
      this.episodeStore.loadCharacters();
    }
  }

  navigateToCharacter(id: number): void {
    this.router.navigate(['/characters', id]);
  }
}
