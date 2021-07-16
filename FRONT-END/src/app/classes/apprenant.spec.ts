import { Apprenant } from './apprenant';

describe('Apprenant', () => {
  it('should create an instance', () => {
    expect(new Apprenant('Modou','Ndiaye',17,'M','GDE',[10,8,13,12],"../../../assets/images/login2.png")).toBeTruthy();
  });
});
