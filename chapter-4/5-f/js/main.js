const parent = {name: 'parent'};
parent.child = function() {
    setTimeout(() => {
        console.log(this.name);
    }, 1);
};
parent.child();