import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render welcome message', () => {
    render(<Home />);

    const titleElement = screen.getByText('Series');
    const subtitleElement = screen.getByText('Lista de séries assistidas');
    const messageElement = screen.getByText('Bem-vindo!');

    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});
