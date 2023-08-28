import {describe, expect, it} from 'vitest';

import lift from './lift';

describe('lift', () => {
  it('should define renovate branches as branches to verify', () => {
    expect(lift().branchesToVerify).toContain('renovate/**');
  });
});
