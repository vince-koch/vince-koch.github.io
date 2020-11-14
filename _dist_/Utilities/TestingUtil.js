export class TestingUtil {
  static sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  static sleepRange(msMin, msMax) {
    const ms = TestingUtil.randomIntegerInRange(msMin, msMax);
    return TestingUtil.sleep(ms);
  }
  static randomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  static randomItemFromArray(array) {
    var index = TestingUtil.randomIntegerInRange(0, array.length - 1);
    var item = array[index];
    return item;
  }
}
