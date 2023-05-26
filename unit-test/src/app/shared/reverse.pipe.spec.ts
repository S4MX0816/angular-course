import { ReversePipe } from './reverse.pipe';

describe('Pipe testing', () => {
  it('should create the pipe', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe).toBeTruthy();
  });

  it('should reverse the input string', () => {
    const reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
