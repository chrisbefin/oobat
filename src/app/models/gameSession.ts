export class GameSession { //class which represents the state of a multiplayer game between either 2 (versus mode) or 4 (party mode)
    id: string; // 5 digit code for session (unique identifier)
    mode: string; // which game mode this object represents- party or versus
    active: boolean; // true if the game is active, false if the game has finished
    numPlayers: number;

    playerNameList: Array<string>; // player names

    playerScoreList: Array<number>; // player scores
}
