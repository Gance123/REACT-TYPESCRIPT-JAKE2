/* eslint-disable  @typescript-eslint/no-unused-vars */
// TypeScriptの基本の型

//boolean
let bool: boolean = true;

//number　数値
let num: number = 0;

//string 文字
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1, 2, 3, 4, 5];
let arr2: number[] = [0, 1, 2, 3, 4, 5];

//tuple(使い道特に無し)
let tuple: [number, string] = [0, "A"];

//any(なるべく使わないことをおすすめ)
let any1: any = false;

//void(返却値がない関数を表す型)(勝手にvoid型と判別するので記述は任意)
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: 0; name: string } = { id: 0, name: "gansu" };
