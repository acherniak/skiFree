import * as Constants from "../Constants";
import { AssetManager } from "./AssetManager";
import { Canvas } from './Canvas';
import { Skier } from "../Entities/Skier";
import { ObstacleManager } from "../Entities/Obstacles/ObstacleManager";
import { Rect } from './Utils';
import { Rhino } from "../Entities/Rhino";

export class Game {
    gameWindow = null; animFrame; rhino = null; cnt = 0;

    constructor() {
        this.assetManager = new AssetManager();
        this.canvas = new Canvas(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);
        this.skier = new Skier(0, 0);
        this.obstacleManager = new ObstacleManager();

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    init() {
        this.obstacleManager.placeInitialObstacles();
				setTimeout(() => this.rhino = new Rhino(0,0), 5000)
    }

    async load() {
        await this.assetManager.loadAssets(Constants.ASSETS);
    }

    run() {
        this.canvas.clearCanvas();

        this.updateGameWindow();
        this.drawGameWindow();

        this.animFrame = requestAnimationFrame(this.run.bind(this));
    }

    updateGameWindow() {
				if (!this.rhino || !this.rhino.eat) this.skier.move();
				if (this.rhino) {
					let xDiff = this.rhino.x-this.skier.x, xAbs = Math.abs(xDiff), yDiff = this.rhino.y-this.skier.y, yAbs = Math.abs(yDiff);
					if (xAbs+yAbs<20) { this.rhino.eat = 1; cancelAnimationFrame(this.animFrame); }
					else { console.log(xDiff, yDiff)
						this.rhino.x -= 10 * Math.sign(xDiff); 
						this.rhino.y -= 10 * Math.sign(yDiff); 
					}
				}
        const previousGameWindow = this.gameWindow;
        this.calculateGameWindow();

        this.obstacleManager.placeNewObstacle(this.gameWindow, previousGameWindow);

        this.skier.checkIfSkierHitObstacle(this.obstacleManager, this.assetManager);
    }

    drawGameWindow() {
        this.canvas.setDrawOffset(this.gameWindow.left, this.gameWindow.top);
        if (!this.rhino || !this.rhino.eat) this.skier.draw(this.canvas, this.assetManager);
        this.obstacleManager.drawObstacles(this.canvas, this.assetManager);
				if (this.rhino)
					this.rhino.draw(this.canvas, this.assetManager);
    }

    calculateGameWindow() {
        const skierPosition = this.skier.getPosition();
        const left = skierPosition.x - (Constants.GAME_WIDTH / 2);
        const top = skierPosition.y - (Constants.GAME_HEIGHT / 2);

        this.gameWindow = new Rect(left, top, left + Constants.GAME_WIDTH, top + Constants.GAME_HEIGHT);
    }

    handleKeyDown(event) {
			if (event.which == Constants.KEYS.ESC) { 
				event.preventDefault();
				window.location.reload();
			} else if (!this.rhino || !this.rhino.eat) {
					switch(event.which) {
            case Constants.KEYS.LEFT:
                this.skier.turnLeft();
                event.preventDefault();
                break;
            case Constants.KEYS.RIGHT:
                this.skier.turnRight();
                event.preventDefault();
                break;
            case Constants.KEYS.UP:
                this.skier.turnUp();
                event.preventDefault();
                break;
            case Constants.KEYS.DOWN:
                this.skier.turnDown();
                event.preventDefault();
                break;
						case Constants.KEYS.SPACE:
								this.skier.jump();
								event.preventDefault();
                break;
					}
				}
    }
}