import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI(),
  ],
  model: 'googleAI/gemini-pro',
  // Allow AI to generate unsafe content.
  // This is needed to get around the default safety settings.
  // This is not recommended for production apps.
  // You can learn more about the safety settings here: https://ai.google.dev/gemini-api/docs/safety-settings
  safetyLevel: 'insecure',
  temperature: 0.5,
});
