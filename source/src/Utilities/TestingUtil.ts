export class TestingUtil
{
    public static sleep(ms: number): Promise<any>
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public static sleepRange(msMin: number, msMax: number): Promise<any>
    {
        const ms: number = TestingUtil.randomIntegerInRange(msMin, msMax);
        return TestingUtil.sleep(ms);
    }

    public static randomIntegerInRange(min: number, max: number): number
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static randomItemFromArray(array: any[]): any
    {
        var index = TestingUtil.randomIntegerInRange(0, array.length - 1);
        var item = array[index];
        return item;
    }    
}