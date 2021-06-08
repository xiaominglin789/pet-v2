class BaseStorage {
  CACHE_KEY = import.meta.env.VITE_CACHE_PREFIX_KEY;

  constructor() {
    if (typeof Storage === "undefined") {
      throw new Error("警告: 当前环境 不支持 Storage 缓存.");
    }
  }

  /** 获取真实的缓存键 */
  protected getRealKey(key: string): string {
    return this.CACHE_KEY + key;
  }
}

export default BaseStorage;
