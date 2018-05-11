module.exports = function(file, api) {

    const j = api.jscodeshift;
    
    const sort = (a, b) => a.declarations[0].id.name.localeCompare(
        b.declarations[0].id.name
    );

    const root = j(file.source);
    
    const requires = root
      .find(j.CallExpression, {"callee": {"name": "require"}})
      .closest(j.VariableDeclaration);


    const sortedRequires = requires.nodes().sort(sort);

    requires.remove();

    return root
      .find(j.Statement)
      .at(0)
      .insertBefore(sortedRequires)
      .toSource();
    
}