import "babel-polyfill";
import { Skier } from "../Entities/Skier";
import { Rhino } from "../Entities/Rhino";
import * as Constants from "../Constants";
import { Rect, intersectTwoRects } from './Utils';

test('Skier created', () => {
	let skier = new Skier(30,40);
	expect(skier.x).toBe(30);
	expect(skier.y).toBe(40);
	expect(skier.assetName).toMatch(/^skier/)
});

test('Rhino created', () => {
	let rhino = new Rhino(-30,-40);
	expect({x: rhino.x, y: rhino.y, assetName: rhino.assetName}).toEqual({x:-30, y: -40, assetName: 'rhino'});
});

test('Constants are there', () => {
	expect(Object.keys(Constants.ASSETS).length).toBeGreaterThan(10);
	expect(Constants.SKIER_DIRECTIONS.DOWN).toBe(3);
})

test('Rectangles intersect', () => {
	let rect1 = new Rect(10, 20, 30, 40), rect2 = new Rect(15, 25, 35, 45);
	expect(intersectTwoRects(rect1,rect2)).toBe(true);
})