import IdleState from "./states/idle-state.js";
import ClearState from "./states/clear-state.js";
import EditingSettingsState from "./states/editing-settings-state.js";
import PlacingWallsState from "./states/placing-walls-state.js";
import PlacingGoalTileState from "./states/placing-goal-tile-state.js";
import PlacingWeightTilesState from "./states/placing-weight-tiles-state.js";
import PlacingStartingTileState from "./states/placing-starting-tile-state.js";
import PlayingState from "./states/playing-state.js";

export default class UserState {
    static idleState = new IdleState();
    static clearState = new ClearState();
    static editingSettingsState = new EditingSettingsState();
    static placingWallsState = new PlacingWallsState();
    static placingGoalTileState = new PlacingGoalTileState();
    static placingWeightTilesState = new PlacingWeightTilesState();
    static placingStartingTileState = new PlacingStartingTileState();
    static playingState = new PlayingState();
    currentState = null;
    
    constructor() {
        this.currentState = UserState.idleState;
    }

    

    handleButtonInput(button, actionType, nextState = this.currentState) {
        console.log(`${this.currentState.toString()} -> ${nextState.toString()}`);
        this.currentState.handleButtonInput(button, actionType);
        // I might need to check if the current state permits a change in state.
        if (nextState !== this.currentState) {
            this.currentState = nextState;
            this.currentState.handleButtonInput(button, actionType);
        }
    }

    handleMouseInput(eventInfo, actionType) {
        this.currentState.handleMouseInput(eventInfo, actionType);
    }

    frameUpdate() {
        this.currentState.frameUpdate();
    }
}