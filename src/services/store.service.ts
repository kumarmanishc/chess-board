import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private STATE_KEY = 'game_state';
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  private getSavedState() {
    if (isPlatformBrowser(this.platformId)) {
      return window.localStorage.getItem(this.STATE_KEY);
    } else {
      return '';
    }
  }

  /**
   * @description Function to save game moves.
   */
  setMove(state: string) {
    if (isPlatformBrowser(this.platformId) && state) {
      const moves = this.getSavedState();
      const updateState = moves ? `${moves},${state}` : state;
      window.localStorage.setItem(this.STATE_KEY, updateState);
    }
  }

  /**
   * @description Function to get status of previously saved moves.
   */
  getGameState(): boolean | string[] {
    const moves = this.getSavedState();
    return moves ? moves.split(',') : false;
  }

  clearStorage() {
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem(this.STATE_KEY, '');
    }
  }
}
