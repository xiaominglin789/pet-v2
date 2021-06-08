import BaseStorage from "./base-storage";

/** 本地缓存工具类 */
class LocalStorageHelper extends BaseStorage {
  CACHE_KEY = import.meta.env.VITE_CACHE_PREFIX_KEY;

  /**
     * 设置缓存
     * @param {*} key 键名
     * @param {*} value 数据
     * @returns 
     */
   setCacheItem(key: string, value: any) {
    if (!key || !value ) return;

    const cacheVal = { cache: value };
    try {
        localStorage.setItem(this.getRealKey(key), JSON.stringify(cacheVal));
    } catch (error) {
        console.error("本地缓存失败,请检查本地内存情况. error: ", error)
    }
  }

  /**
   * 取缓存
   * @param {*} key
   * @returns null 或者 数据
   */
  getCacheItemByKey(key: string) {
    if (!key) return;

    let val: any = localStorage.getItem(this.getRealKey(key)) || "null";

    try {
      val = JSON.parse(val);
    } catch (error) {
      console.error("getCacheItemByKey: ", key , " JSON.parse Error: ", error);
    }
    return val?.cache;
  }

  /**
   * 移除某个key的缓存
   * @param {*} key
   */
  removeItemByKey(key: string) {
    if (!key) return;

    const realKey = this.getRealKey(key);
    localStorage.removeItem(realKey);
  }

  /** 清空域下-所有缓存 */
  clearAllCache() {
    localStorage.clear();
  }
}

export default new LocalStorageHelper();
