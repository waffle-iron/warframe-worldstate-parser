var util = require('util');
var strings = require(require('./_utils.js').stringsPath);
var nodes = require('../resources/solNodes.json');
var missionTypes = require('../resources/missionTypes.json');
var factions = require('../resources/factionsData.json');
var Reward = require('./reward.js');

/**
 * Create a new mission instance
 *
 * @constructor
 * @param {object} data Mission data
 */
var Mission = function(data) {
  try{
    if(data.descText){
    if(data.descText.indexOf('/')>-1){
      this.description = strings[data.descText.toLowerCase()].value;
    }
    else
      this.description = data.descText;
    }
    if(data.location)
      this.location = nodes[data.location].value;
    this.missionType = missionTypes[data.missionType].value;
    this.faction = factions[data.faction].value;
    this.reward = new Reward(data.missionReward);
    this.minEnemyLevel = data.minEnemyLevel;
    this.maxEnemyLevel = data.maxEnemyLevel;
    this.maxWaveNum = data.maxWaveNum;
  } catch (err) {
    console.log("Mission: " + err.message);
    console.log(JSON.stringify(data));
  }
}

/**
 * Return a string representation of this mission
 *
 * @return {string} This mission in string format
 */
Mission.prototype.toString = function() {
//  var mission = util.format(this.location, )
  return "";
}

/**
 * Return a string of this mission's description
 *
 * @return {string} This mission's description
 */
Mission.prototype.getDescription = function(){
  return this.description;
}

/**
 * Return a string of this mission's location
 *
 * @return {string} This mission's location
 */
Mission.prototype.getLocation = function(){
  return this.location;
}
/**
 * Return a string of this mission's mission type
 *
 * @return {string} This mission's mission type
 */
Mission.prototype.getMissionType = function(){
  return this.missionType;
}

/**
 * Return a string of the faction that will be fought in this mission
 *
 * @return {string} the faction that will be fought in this mission
 */
Mission.prototype.getFaction = function(){
  return this.faction;
}

/**
 * Return a a reward object of this mission's reward
 *
 * @return {Reward} This mission's reward
 */
Mission.prototype.getReward = function(){
  return this.reward;
}

/**
 * Return a number of this mission's minimum enemy level
 *
 * @return {number} This mission's minimum enemy level
 */
Mission.prototype.getMinEnemyLevel = function(){
  return this.minEnemyLevel;
}

/**
 * Return a number of this mission's maximum enemy level
 *
 * @return {number} This mission's maximum enemy level
 */
Mission.prototype.getMaxEnemyLevel = function(){
  return this.maxEnemyLevel;
}

/**
 * Return a number of this mission's maximum wave or goal number
 *
 * @return {number} This mission's maximum wave or goal number
 */
Mission.prototype.getMaxWaveNum = function(){
  return this.maxWaveNum;
}



module.exports = Mission;
