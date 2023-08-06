import { render, RenderOptions } from '@testing-library/react';

import RootLayout from '../layout';
import Home from '../page';

const renderWithRootLayout = (component: any, options?: RenderOptions) => {
  const tree = render(component, {
    wrapper: ({ children }: { children: React.ReactNode }) => <RootLayout>{children}</RootLayout>,
    ...options,
  });

  return { ...tree };
};

describe('Home Layout', () => {
  it('Render Home correctly', () => {
    const { container } = renderWithRootLayout(<Home />);

    expect(container).toMatchSnapshot();
  });
});
