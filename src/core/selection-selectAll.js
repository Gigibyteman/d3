function d3_selection_selectAll(selector) {
  var subgroups = [],
      subgroup,
      node;

  if (typeof selector !== "function") selector = d3_selection_selectorAll(selector);

  for (var j = -1, m = this.length; ++j < m;) {
    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
      if (node = group[i]) {
        subgroups.push(subgroup = selector(node));
        subgroup.parentNode = node;
      }
    }
  }

  return d3_selection(subgroups);
}

function d3_selection_selectorAll(selector) {
  return function(node) {
    return d3_selectAll(selector, node);
  };
}
