import { render } from '@testing-library/react';

import { TableDemo } from '..';

const productsMock = [
  {
    id: 1,
    name: 'Product 1',
    description: '',
    buyPrice: null,
    sellPrice: null,
    status: null,
    image: 'https://loremflickr.com/100/100',
    idCategory: 1,
    category: {
      id: 1,
      name: 'Computers',
      description: 'Outdoors',
      status: null,
    },
  },
];

describe('TableDemo', () => {
  it('TableDemo correctly', () => {
    const { container } = render(<TableDemo products={productsMock} />);
    expect(container).toMatchSnapshot();
  });
});
