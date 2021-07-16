import { Qcm } from './qcm';

describe('Qcm', () => {
  it('should create an instance', () => {
    expect(new Qcm(1,'Qui est votre actuel president','Macky Sall',2)).toBeTruthy();
  });
});
