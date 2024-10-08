import type { ProductVariant } from '.';

export type CreateFeedbackMessage = {
  text: string;
};

export type UpdateFeedbackMessage = {
  text: string;
};

export type FeedbackMessage = {
  id: number | string;
  createdAt: Date;
  text: string;
  updatedAt: Date;
  user: {
    id: number;
    avatar: string | null;
    firstName: string;
    lastName: string | null;
  };
  userId: number;
};

export type Feedback = {
  id: number | string;
  anonymous: boolean;
  createdAt: Date;
  images: string[];
  mainMessageId: number | null;
  messages: FeedbackMessage[];
  productVariant: ProductVariant | null;
  rating: number;
  updatedAt: Date;
  video: string | null;
};
