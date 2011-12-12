var GameEngine = function(element) {
	this.canvas = element;
	this.canvas.focus();
	this.playerManager = new PlayerManager(this);
	console.log('game engine intialized...');
}

var gameEngine;

//=========================================LayerManager=================================================
var LayerManager = function(engine){
	this.engine = engine;
}

LayerManager.prototype.AddLayer(id){
	if(this.layers[id] == null || this.layers[id] === 'undefined'){
		this.layers[id] = new Layer(id);
	}
}

var layers = {};

var Layer = function(layerId) {
	this.id = layerId;
}

//=========================================LayerManager=================================================

//=========================================PlayerManager=================================================
var PlayerManager = function(engine){
	this.gameEngine = engine; 
}

PlayerManager.prototype.players = {};

PlayerManager.prototype.AddPlayer(id, name, sprite_index, position, items, access)
{
	if(this.players[id] == null || this.players[id] === 'undefined'){
		this.players[id] = new Player(id, name, sprite_index, position, items, access);
	}
}

PlayerManager.prototype.GetPlayer = function(id){
	return this.players[id];
}

//id - 玩家ID, name - 玩家名称, sprite_index - 玩家精灵编号, items - 玩家物品, access - 玩家权限(1-普通玩家, 2-GM，3-管理员)
var Player = function(id, name, sprite_index, position, items, access){
	this.id = id;
	this.name = name;
	this.sprite_index = sprite_index;
	this.position = position;
	this.items = items;
	this.access = access;
}

Player.prototype.x = function() {
	return this.position.split('x')[0];
}

Player.prototype.y = function() {
	return this.position.split('x')[1];
}

Player.prototype.setPosition(position) {
	this.position = position;
}
//=========================================PlayerManager=================================================