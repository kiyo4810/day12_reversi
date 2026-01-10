const parent = {name: 'parent'};
parent.child = () => {
    console.log(this);
};
parent.child();
