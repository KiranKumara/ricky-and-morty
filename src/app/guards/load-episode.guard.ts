import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { EpisodesStoreService } from '../services/episodes-store.service';

@Injectable({
  providedIn: 'root',
})
export class LoadEpisodeGuard implements CanActivate {
  constructor(private episodesStoreService: EpisodesStoreService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.episodesStoreService.getEpisode(route.params.id);
    return true;
  }
}
