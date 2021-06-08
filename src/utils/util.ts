/**
 * 节流函数
 * @param fn
 * @param delay 延迟时间, 默认 300ms
 * @returns
 */
const throttle = (fn: Function, delay: number = 300) => {
  let timer: any;
  let result: any;

  return (...args: any) => {
    if (!timer) {
      timer = setTimeout(() => {
        result = fn(...args);
        timer = null;
      }, delay);
    }
  };
};

/**
 * 防抖函数
 * @param fn
 * @param delay 延迟时间, 默认 300ms
 * @param immediatory 是否立刻执行方法,默认 false
 * @returns
 */
const debounce = (
  fn: Function,
  delay: number = 300,
  immediatory: boolean = false,
) => {
  let timer: any;
  let result: any;

  return (...args: any) => {
    timer && clearTimeout(timer);

    if (immediatory) {
      // 立刻执行
      const exec = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (exec) {
        result = fn(...args);
      }
    } else {
      timer = setTimeout(() => {
        result = fn(...args);
      }, delay);
    }

    return result;
  };
};

/**
 * 判断 是否为对象类型
 * @param target
 * @returns true: 是对象类型,  false: 非对象类型
 */
function isObject(target: any): boolean {
  return typeof target == "object" && target !== null;
}

/**
 * 判断 是不是数组类型
 * @param target
 * @returns true: 数组类型,  false: 非数组类型
 */
function isArray(target: any): boolean {
  return Array.isArray(target);
}

/**
 * 判断 是不是函数类型
 * @param target
 * @returns true: 函数类型,  false: 非函数类型
 */
function isFunction(target: any): boolean {
  return typeof target == "function";
}

/**
 * 判断 是不是数字类型
 * @param target
 * @returns true: 数字类型,  false: 非数字类型
 */
function isNumber(target: any): boolean {
  return typeof target == "number";
}

/**
 * 判断 是不是字符串类型
 * @param target
 * @returns true: 字符串类型,  false: 非字符串类型
 */
function isString(target: any): boolean {
  return typeof target == "string";
}

/**
 * 判断 target 是不是整形数字类型
 * @param target
 * @returns true: 整形数字类型,  false: 非 整形数字类型
 */
function isInteger(target: any): boolean {
  return parseInt(target) + "" === target;
}

/**
 * target 是否有 key 这个属性
 * @param target
 * @param key key键的属性
 * @returns
 */
function hasOwnKey(target: any, key: string) {
  return Object.prototype.hasOwnProperty.call(target, key);
}

/**
 * 比较2个变量是否相等
 * @param valA
 * @param valB
 * @returns true: 值一样的， false: 值不一样
 */
function isEqual<T>(valA: T, valB: T) {
  if (!valA || !valB) {
    return false;
  }

  return valB === valA;
}

/** 获取屏幕可视区的高度 */
const getClientViewHeight = () => {
  return window.innerHeight || 
  document.body.clientWidth || 
  document.documentElement.clientHeight // 屏幕可视区高度
}

/** 当页面监听 scoll 事件后,可获取滚动时到顶部的高度 */
const getScrollTop = () => {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

/**
* 检测滚动是否探底
* @param {*} callback 回调函数
* @param {*} offset 探底可控范围: 0-50px 以内都视为到底
*/
const checkScrollOverBottom = (callback: Function, offset=50) => {
  /** 获取滚动区的总高度 */
  const __getBodyScrollHeight = () => {
      return document.body.scrollHeight || document.documentElement.scrollHeight;
  }

  /** 注意: 获取页面可滚动区域时须保证页面有内容够滚动 */
  if (__getBodyScrollHeight() > getClientViewHeight() && getScrollTop() + getClientViewHeight() + offset  - __getBodyScrollHeight() >= 0) {
      // 探底了,执行回调
      callback();
  }
}

export {
  throttle,
  debounce,
  isObject,
  isArray,
  isFunction,
  isNumber,
  isString,
  isInteger,
  hasOwnKey,
  isEqual,
  getClientViewHeight,
  getScrollTop,
  checkScrollOverBottom
};
