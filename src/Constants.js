export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const RAMP = 'ramp';
export const JUMP1 = 'jump1';
export const JUMP2 = 'jump2';
export const JUMP3 = 'jump3';
export const JUMP4 = 'jump4';
export const JUMP5 = 'jump5';
export const RHINO = 'rhino';
export const EAT1 = 'eat1';
export const EAT2 = 'eat2';
export const EAT3 = 'eat3';
export const EAT4 = 'eat4';
export const EAT5 = 'eat5';
export const EAT6 = 'eat6';

export const SKIER_STARTING_SPEED = 10;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;

export const ASSETS = {
    [SKIER_CRASH]: 'img/skier_crash.png',
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [TREE] : 'img/tree_1.png',
    [TREE_CLUSTER] : 'img/tree_cluster.png',
    [ROCK1] : 'img/rock_1.png',
    [ROCK2] : 'img/rock_2.png',
    [RAMP] : 'img/jump_ramp.png',
		[JUMP1] : 'img/skier_jump_1.png',
		[JUMP2] : 'img/skier_jump_2.png',
		[JUMP3] : 'img/skier_jump_3.png',
		[JUMP4] : 'img/skier_jump_4.png',
		[JUMP5] : 'img/skier_jump_5.png',
		[RHINO] : 'img/rhino_default.png',
		[EAT1] : 'img/rhino_lift.png',
		[EAT2] : 'img/rhino_lift_mouth_open.png',
		[EAT3] : 'img/rhino_lift_eat_1.png',
		[EAT4] : 'img/rhino_lift_eat_2.png',
		[EAT5] : 'img/rhino_lift_eat_3.png',
		[EAT6] : 'img/rhino_lift_eat_4.png'
};

export const SKIER_DIRECTIONS = {
    CRASH : 0,
    LEFT : 1,
    LEFT_DOWN : 2,
    DOWN : 3,
    RIGHT_DOWN : 4,
    RIGHT : 5
};

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH] : SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT] : SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN] : SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN] : SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN] : SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT] : SKIER_RIGHT
};

export const KEYS = {
    LEFT : 37,
    RIGHT : 39,
    UP : 38,
    DOWN : 40,
		SPACE : 32,
		ESC : 27
};