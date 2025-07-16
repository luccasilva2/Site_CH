// src/ai/flows/data-reinterpretation.ts
'use server';

/**
 * @fileOverview A flow for reinterpreting data with AI to suggest alternative visual metaphors or perspectives.
 *
 * - reinterpretData - A function that takes a dataset and returns suggested reinterpretations.
 * - ReinterpretDataInput - The input type for the reinterpretData function.
 * - ReinterpretDataOutput - The return type for the reinterpretData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReinterpretDataInputSchema = z.object({
  datasetDescription: z.string().describe('A description of the historical dataset to reinterpret, including the type of data and the context.'),
  datasetJson: z.string().describe('The historical dataset in JSON format.'),
  userRequest: z.string().describe('Specific request or question about the data to guide the reinterpretation.'),
});
export type ReinterpretDataInput = z.infer<typeof ReinterpretDataInputSchema>;

const ReinterpretDataOutputSchema = z.object({
  alternativeVisualizations: z.array(
    z.object({
      visualizationType: z.string().describe('The suggested type of visualization (e.g., bar chart, line graph, map).'),
      perspectiveDescription: z.string().describe('A description of the perspective or insight that the visualization offers.'),
      justification: z.string().describe('Explanation of why this visualization type is appropriate for the data and user request.'),
      dataMappingSuggestions: z.string().describe('Suggestions on how to map the data fields to the visualization elements.')
    })
  ).describe('Array of suggested alternative visualizations and their descriptions.')
});
export type ReinterpretDataOutput = z.infer<typeof ReinterpretDataOutputSchema>;

export async function reinterpretData(input: ReinterpretDataInput): Promise<ReinterpretDataOutput> {
  return reinterpretDataFlow(input);
}

const reinterpretDataPrompt = ai.definePrompt({
  name: 'reinterpretDataPrompt',
  input: {schema: ReinterpretDataInputSchema},
  output: {schema: ReinterpretDataOutputSchema},
  prompt: `You are an expert data visualizer who suggests novel ways to visualize data.

You are given a dataset described by the user, a JSON version of the dataset, and a specific user request about the data. Your goal is to suggest a few alternative visualizations that would help the user gain a deeper understanding of the data, given their specific request.

Dataset Description: {{{datasetDescription}}}
Dataset (JSON): {{{datasetJson}}}
User Request: {{{userRequest}}}

Suggest several alternative visualizations. For each, describe the visualization type, the perspective or insight it offers, the justification for using it, and how the data fields should be mapped to the visualization elements.

Ensure your response is well-formatted and easy to parse.
`,
});

const reinterpretDataFlow = ai.defineFlow(
  {
    name: 'reinterpretDataFlow',
    inputSchema: ReinterpretDataInputSchema,
    outputSchema: ReinterpretDataOutputSchema,
  },
  async input => {
    const {output} = await reinterpretDataPrompt(input);
    return output!;
  }
);
