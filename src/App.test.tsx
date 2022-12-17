import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const reviewSectionWrapper = screen.getByTestId('reviewSectionWrapper');
  const logoWrapper = screen.getByTestId('logoWrapper');
  const logoTitle = screen.getByTestId('logoTitle');
  const feedbackSectionTitle = screen.getByTestId('feedbackSectionTitle');
  const essayReviewSectionWrapper = screen.getByTestId('essayReviewSectionWrapper');
  const essayReviewWrapper = screen.getByTestId('essayReviewWrapper');
  const essayReviewTitle = screen.getByTestId('essayReviewTitle');
  const EssayHeadingSection = screen.getByTestId('EssayHeadingSection');
  const EssayContentSection = screen.getByTestId('EssayContentSection');

  expect(reviewSectionWrapper).toBeVisible();
  expect(logoWrapper).toBeVisible();
  expect(logoTitle).toBeVisible();
  expect(feedbackSectionTitle).toBeVisible();
  expect(reviewSectionWrapper).toBeVisible();
  expect(essayReviewSectionWrapper).toBeVisible();
  expect(essayReviewWrapper).toBeVisible();
  expect(essayReviewTitle).toBeVisible();
  expect(EssayHeadingSection).toBeVisible();
  expect(EssayContentSection).toBeVisible();
});
