import { Scenario } from './Scenario.js';

var actorObjects = [{
    name: 'Marco',
    type: 'PF Squad Soldier',
    weapon: 'Handgun'
}, {
    name: 'RAS1',
    type: 'Rebel Army soldier',
    weapon: 'rifle'
}, {
    name: 'RAT1',
    type: 'Rebel Army Tank',
    weapon: 'tank cannon'
}];
const testScenario = new Scenario (1);
test('Individual actions need to be initialized correctly', () => {
    expect(new Scenario(1)).toEqual({'id': 1});
    expect(testScenario.createActor(actorObjects)).toEqual([{'health': 2, 'name': 'Marco', 'type': 'PF Squad Soldier', 'weapon': 'Handgun'}, {'health': 2, 'name': 'RAS1', 'type': 'Rebel Army soldier', 'weapon': 'rifle'}, {'health': 2, 'name': 'RAT1', 'type': 'Rebel Army Tank', 'weapon': 'tank cannon'}]);
});
var actionObjects = [{
    actor: 'Marco',
    action: 'Pick Weapon',
    element: 'Shotgun'
}, {
    actor: 'Marco',
    action: 'Shoot Weapon',
    element: 'Shotgun'
}, {
    actor: 'RAT1',
    action: 'Receive Attack',
    from: 'Marco'
}];
test('Actions need to be parsed correctly', () => {
    expect(new Scenario(1)).toEqual({'id': 1});
    expect(testScenario.createActions(actionObjects)).toEqual([{'actionActor': 'Marco', 'actionType': 'Pick Weapon', 'element': 'Shotgun'}, {'actionActor': 'Marco', 'actionType': 'Shoot Weapon', 'element': 'Shotgun'}, {'actionActor': 'RAT1', 'actionType': 'Receive Attack', 'fromActor': 'Marco'}]

    );
});

test('The response expected after the actions need to be the correct', () => {
    expect(new Scenario(1)).toEqual({'id': 1});
    /*expect(testScenario.executeScenario()).toEqual({'code': 202, "result": {
        "Marco": "alive",
        "RAS1": "death",
        "RAT1": "alive"}});*/
});