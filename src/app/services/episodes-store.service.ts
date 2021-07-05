import { Character } from './../models/data.models';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Episode, PageInfo } from '../models/data.models';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EpisodesStoreService {
  episodesPageInfo: PageInfo;
  charactersPageInfo: PageInfo;

  constructor(private apiService: ApiService) {
    this.episodesPageInfo = {} as PageInfo;
    this.charactersPageInfo = {} as PageInfo;
  }

  private readonly episodesSub = new BehaviorSubject<Episode[]>([]);

  private readonly episodeSub = new BehaviorSubject<Episode | null>(null);

  private readonly episodeCharactersSub = new BehaviorSubject<Character[]>([]);

  private readonly charactersSub = new BehaviorSubject<Character[]>([]);

  private readonly characterSub = new BehaviorSubject<Character | null>(null);

  readonly episodes$ = this.episodesSub.asObservable();

  readonly episode$ = this.episodeSub.asObservable();

  readonly episodeCharacters$ = this.episodeCharactersSub.asObservable();

  readonly character$ = this.characterSub.asObservable();

  readonly characters$ = this.charactersSub.asObservable();

  get episodes(): Episode[] {
    return this.episodesSub.getValue();
  }

  set episodes(val: Episode[]) {
    this.episodesSub.next(val);
  }

  get hasMorePage(): boolean {
    return this.episodesPageInfo.next ? true : false;
  }

  get hasCharactersMorePage(): boolean {
    return this.charactersPageInfo.next ? true : false;
  }

  set episode(val: Episode) {
    this.episodeSub.next(val);
  }

  set episodeCharacters(val: Character[]) {
    this.episodeCharactersSub.next(val);
  }

  set character(val: Character) {
    this.characterSub.next(val);
  }

  get characters(): Character[] {
    return this.charactersSub.getValue();
  }

  set characters(val: Character[]) {
    this.charactersSub.next(val);
  }

  loadEpisodes(loadNextPage: boolean): void {
    this.apiService
      .getEpisodes(loadNextPage ? this.episodesPageInfo.next : null)
      .pipe(
        tap((resp) => {
          this.episodesPageInfo = resp.info;
          this.episodes = loadNextPage
            ? this.episodes.concat(resp.results)
            : resp.results;
        }),
        catchError((error: HttpErrorResponse) => of(error))
      )
      .toPromise();
  }

  getEpisode(id: number): void {
    this.apiService
      .getSingleEpisode(id)
      .pipe(
        mergeMap((resp) => {
          this.episode = resp;
          const ids = resp.characters.map((characterUrl) => {
            return characterUrl.split('/').pop() as string;
          });
          return this.apiService.getMultipleCharacters(ids);
        }),
        map((resp) => {
          this.episodeCharacters = resp;
        }),
        catchError((error: HttpErrorResponse) => of(error))
      )
      .toPromise();
  }

  loadCharacters(loadNextPage?: boolean): void {
    this.apiService
      .getCharacters(loadNextPage ? this.charactersPageInfo.next : null)
      .pipe(
        tap((resp) => {
          this.charactersPageInfo = resp.info;
          this.characters = loadNextPage
            ? this.characters.concat(resp.results)
            : resp.results;
        }),
        catchError((error: HttpErrorResponse) => of(error))
      )
      .toPromise();
  }

  getCharacter(id: number): void {
    this.apiService
      .getCharacter(id)
      .pipe(
        tap((resp) => {
          this.character = resp;
        }),
        catchError((error: HttpErrorResponse) => of(error))
      )
      .toPromise();
  }
}
