import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { EpisodesStoreService } from '../services/episodes-store.service';

// Fires off Inital characters

@Injectable({
  providedIn: 'root',
})
export class LoadCharactersGuard implements CanActivate {
  constructor(private episodesStoreService: EpisodesStoreService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.episodesStoreService.loadCharacters();
    return true;
  }
}
