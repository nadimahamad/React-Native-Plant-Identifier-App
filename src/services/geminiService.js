
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyBeOiIzclBi1Cst75Oj1j017Z94SpXmP68");
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const identifyPlant = async (imageBase64) => {
  try {
     //const prompt = "Identify what's in this image. If it's a plant, provide its name, brief description, leaf details, care instructions, benefits, and warnings. If it's not a plant, provide a brief description and any relevant information. Format the response as a JSON object with these keys: name, description, leafDetails (if applicable), careInstructions (if applicable), benefits (if applicable), warnings (if applicable), isPlant (boolean).";
    const prompt = "Identify this plant accurately and provide the following information: name, brief description, leaf details, care instructions, benefits, and warnings. Format the response as a JSON object with these keys: name, description, leafDetails, careInstructions, benefits, warnings.";

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBase64
        }
      }
    ]);

    const response = result.response;
    let text = response.text();

    console.log('API Response:', text);

    // Remove "API Response: " prefix if present
    if (text.startsWith('API Response: ')) {
      text = text.substring('API Response: '.length);
    }

    // Remove backticks if present
    if (text.startsWith('```json\n') && text.endsWith('\n```')) {
      text = text.substring('```json\n'.length, text.length - '\n```'.length);
    }

    // Attempt to parse JSON
    try {
      const info = JSON.parse(text);
      return info;
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return { error: 'Unable to parse response', rawResponse: text };
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
};

export const translateText = async (text, targetLanguage) => {
