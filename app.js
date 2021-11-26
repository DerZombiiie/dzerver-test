module.exports = class {
	constructor( handle ) {
		handle.log("Testing handle: handle handed over");
		this.handle = handle;

		this.handle.config.register("test", "key",          "stuff", false);
		this.handle.config.register("test", "undefinedkey", "value", false);
	}

	init() {
		this.handle.log(`Testing config: key         : ${this.handle.config.get("test","key")          !== "stuff" ? "passed" : "failed (read: " + this.handle.config.get("test", "key")          + ")"}`);
		this.handle.log(`Testing config: undefinedkey: ${this.handle.config.get("test","undefinedkey") ==  "value" ? "passed" : "failed (read: " + this.handle.config.get("test", "undefinedkey") + ")"}`);
	}
}
