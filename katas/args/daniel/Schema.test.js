import { Schema } from "./Schema";
import { Args } from "./Args";

test('Schema class expected to return a list of flags with values according to the setted schema', () => {
    const schema = new Schema([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
        {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
    ]);
    expect(schema.getList()).toStrictEqual([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
        {name: 'booleanExample', flag: '-b', type: 'bool', defaultValue: false}
    ]);

    schema.putSchema([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'}
    ]);
    expect(schema.getList()).toStrictEqual([
        {name: 'port', flag: '-p', type: 'int', defaultValue: 8080},
        {name: 'path', flag: '-d', type: 'string', defaultValue: '/usr/'},
    ]);
});

/* test('Schema class is expected to validate if a list of args match with the schema', () => {
    const schema = new Schema();
    const argsList = new Args('-p -d -b').getArgsList();
    expect(schema.validateSchema(argsList)).toBe(true);
}) */