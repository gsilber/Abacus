import { AbacusModule } from './abacus.module';

describe('AbacusModule', () => {
  let abacusModule: AbacusModule;

  beforeEach(() => {
    abacusModule = new AbacusModule();
  });

  it('should create an instance', () => {
    expect(abacusModule).toBeTruthy();
  });
});
