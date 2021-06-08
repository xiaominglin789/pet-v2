import BaseStorage from "./base-storage";

class SesstionStorage extends BaseStorage {
  // 设置临时缓存
	set(key: string, val: any) {
    try {
      sessionStorage.setItem(this.getRealKey(key), JSON.stringify({
        cache: val
      }));
    } catch (error) {
      console.error("getCacheItemByKey: ", key , " JSON.parse Error: ", error);
    }
	}

	// 获取临时缓存
	get(key: string) {
    let json: any;
    try {
      json = sessionStorage.getItem(this.getRealKey(key));
      json = JSON.parse(json);
    } catch (error) {
      console.error("getCacheItemByKey: ", key , " JSON.parse Error: ", error);
    }
		return json?.cache;
	}
	
  // 移除临时缓存
	remove(key: string) {
		sessionStorage.removeItem(this.getRealKey(key));
	}

	// 移除全部临时缓存
	clear() {
		sessionStorage.clear();
	}
}

export default new SesstionStorage();
