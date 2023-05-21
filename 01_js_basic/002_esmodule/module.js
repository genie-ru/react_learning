//exportをつけると、他のファイルからimportできるようになる。
export const hello = () => {
    console.log('hello');
};

const funcB = () => {
    console.log("funcB output");
};
//
export default funcB;

class User {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(this.name);
    }
}
//expoert{User}とすると、上にあるクラスが外部からimportできるようになる。
export { User }
// このようにexportするとimportするときに{}を使わなくても良い。