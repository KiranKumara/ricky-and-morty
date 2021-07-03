import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Episode, EpisodeResponse, Character } from '../models/data.models';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiUrl = `${environment.apiBaseUrl}/api`;

  constructor(private http: HttpClient) {}

  getEpisodes(dynamicUrl: string | null): Observable<EpisodeResponse> {
    const url = dynamicUrl ? dynamicUrl : `${this.apiUrl}/episode`;
    return this.http.get<EpisodeResponse>(url);
  }

  getSingleEpisode(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.apiUrl}/episode/${id}`);
  }

  getCharacters(ids: string[]): Observable<Character[]> {
    return this.http.get<Character[]>(
      `${this.apiUrl}/character/${ids.join(',')}`
    );
  }
}
