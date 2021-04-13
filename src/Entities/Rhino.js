import * as Constants from "../Constants";
import { Entity } from "./Entity";

export class Rhino extends Entity {
		
    constructor(x, y) {
        super(x, y);
				this.eat = 0;
	      this.assetName = Constants.RHINO;
    }
}