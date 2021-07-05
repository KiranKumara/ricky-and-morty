import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { EpisodesStoreService } from '../services/episodes-store.service';

// Fires off Inital episodes

@Injectable({
  providedIn: 'root',
})
export class LoadEpisodesGuard implements CanActivate {
  constructor(private episodesStoreService: EpisodesStoreService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.episodesStoreService.loadEpisodes(false);
    return true;
  }
}
