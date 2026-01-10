const parent = {name: 'parent'};
parent.child = function() {
    console.log(this);
};
parent.child();
