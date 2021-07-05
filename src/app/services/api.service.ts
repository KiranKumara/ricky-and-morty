import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  Episode,
  EpisodesResponse,
  Character,
  CharactersResponse,
} from '../models/data.models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiUrl = `${environment.apiBaseUrl}/api`;

  constructor(private http: HttpClient) {}

  getEpisodes(dynamicUrl: string | null): Observable<EpisodesResponse> {
    const url = dynamicUrl ? dynamicUrl : `${this.apiUrl}/episode`;
    return this.http.get<EpisodesResponse>(url);
  }

  getEpisode(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.apiUrl}/episode/${id}`);
  }

  getMultipleCharacters(ids: string[]): Observable<Character[]> {
    return this.http.get<Character[]>(
      `${this.apiUrl}/character/${ids.join(',')}`
    );
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/character/${id}`);
  }

  getCharacters(dynamicUrl: string | null): Observable<CharactersResponse> {
    const url = dynamicUrl ? dynamicUrl : `${this.apiUrl}/character`;
    return this.http.get<CharactersResponse>(url);
  }
}
