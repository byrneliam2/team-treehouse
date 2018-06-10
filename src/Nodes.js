var Node = {
    parents: [],
    children: [],

    hasParent: function(parent) {
        return this.parents.contains(parent);
    },

    hasChild: function(child) {
        return this.children.contains(child);
    }
}