import { HeightConversionPipe } from './heightConversion.pipe';

describe('heightConversionPipe', () => {

  let heightPipe: HeightConversionPipe = new HeightConversionPipe();

  it('should create an instance of the heightPipe', () => {
    expect(heightPipe).toBeTruthy();
  })

  describe('Calculations for height Pipe', () => {
    it('should convert 6 ft into 1.83 meters', () => {
      expect(heightPipe.transform(6)).toBe(1.83);
    });


    it('should convert 5.8 ft into 1.77 meters', () => {
      expect(heightPipe.transform(5.8)).toBe(1.77);
    });
  })
})





