//Spliting code -> 1) namespae 2)import/export
var doOperationAddMul;
(function (doOperationAddMul) {
    doOperationAddMul.add = (num1, num2) => {
        return num1 + num2;
    };
    doOperationAddMul.sub = (num1, num2) => {
        return num1 - num2;
    };
})(doOperationAddMul || (doOperationAddMul = {}));
var doesPrintName;
(function (doesPrintName) {
    doesPrintName.print = () => {
        return "Hii Keshav";
    };
})(doesPrintName || (doesPrintName = {}));
export default { doOperationAddMul, doesPrintName };
//# sourceMappingURL=dummy.js.map