import { Character } from './../models/data.models';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Episode, PageInfo } from '../models/data.models';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EpisodesStoreService {
  pageInfo: PageInfo;
  constructor(private apiService: ApiService) {
    this.pageInfo = {} as PageInfo;
  }

  private readonly episodesSub = new BehaviorSubject<Episode[]>([]);

  private readonly episodeSub = new BehaviorSubject<Episode | null>(null);

  private readonly episodeCharactersSub = new BehaviorSubject<Character[]>([]);

  readonly episodes$ = this.episodesSub.asObservable();

  readonly episode$ = this.episodeSub.asObservable();

  readonly episodeCharacters$ = this.episodeCharactersSub.asObservable();

  get episodes(): Episode[] {
    return this.episodesSub.getValue();
  }

  set episodes(val: Episode[]) {
    this.episodesSub.next(val);
  }

  get hasMorePage(): boolean {
    return this.pageInfo.next ? true : false;
  }

  set episode(val: Episode) {
    this.episodeSub.next(val);
  }

  set episodeCharacters(val: Character[]) {
    this.episodeCharactersSub.next(val);
  }

  loadEpisodes(): void {
    this.apiService
      .getEpisodes(this.pageInfo.next)
      .pipe(
        map((resp) => {
          this.pageInfo = resp.info;
          this.episodes = this.episodes.concat(resp.results);
        })
        // catchError((error: any) => {
        //   // console.log(error);
        // })
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
          return this.apiService.getCharacters(ids);
        }),
        map((resp) => {
          this.episodeCharacters = resp;
        })
        // catchError((error: any) => {
        //   // console.log(error);
        // })
      )
      .toPromise();
  }
}
