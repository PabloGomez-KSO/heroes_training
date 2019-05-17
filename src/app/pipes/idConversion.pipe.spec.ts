import { IdConversionPipe } from './idConversion.pipe';

describe('idConversionPipe', () => {

  let pipe: IdConversionPipe = new IdConversionPipe();

  it('should create an instance of the pipe', ()=> {
    expect(pipe).toBeTruthy();
  })

  describe('Calculations for id pipe', ()=>{
    it('should return 1st', ()=>{
      expect(pipe.transform(1)).toBe('1st');
    });

    it('should return 2nd', ()=>{
      expect(pipe.transform(2)).toBe('2nd');
    })

    it('should return 3rd', ()=>{
      expect(pipe.transform(3)).toBe('3rd');
    })

    it('should return 8th', ()=>{
      expect(pipe.transform(8)).toBe('8th');
    })
  })
})
