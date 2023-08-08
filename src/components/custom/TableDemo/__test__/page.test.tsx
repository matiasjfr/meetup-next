import { render } from '@testing-library/react';

import { TableDemo } from '..';

describe('TableDemo', () => {
  it('TableDemo correctly', () => {
    const { container } = render(<TableDemo products={[]} />);
    expect(container).toMatchSnapshot();
  });
});
