const parent = {name: 'parent'};
parent.child = function() {
    let inner = () => {
        console.log(this);
    };
    inner();
};
parent.child();