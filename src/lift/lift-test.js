import {assert} from 'chai';
import lift from './lift';

suite('lift', () => {
  test('that renovate branches are defined as branches to verify', () => {
    assert.include(lift().branchesToVerify, 'renovate/**');
  });
});
