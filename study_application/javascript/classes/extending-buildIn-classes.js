//the built-in classes like array or map(and others) are classes which can be inherate

class ExtMap extends Map{}

//so, the ExtMap work equals as Map
console.log(new ExtMap().set('test', 1).get('test'));
