const Reactive = require("Reactive");

export default class Scaling {
	static get example(){
		return 'example'
	}
    static scaleObject(object, value) {
        const lastScaleX = object.transform.scaleX.lastValue;
        object.transform.scaleX = Reactive.mul(lastScaleX, value);

        const lastScaleY = object.transform.scaleY.lastValue;
        object.transform.scaleY = Reactive.mul(lastScaleY, value);

        const lastScaleZ = object.transform.scaleZ.lastValue;
        object.transform.scaleZ = Reactive.mul(lastScaleZ, value);
    }
}