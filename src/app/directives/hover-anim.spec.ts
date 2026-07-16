import { HoverAnim } from './hover-anim';

describe('HoverAnim', () => {
  it('should create an instance', () => {
    const directive = new HoverAnim(null as any, null as any);
    expect(directive).toBeTruthy();
  });
});
