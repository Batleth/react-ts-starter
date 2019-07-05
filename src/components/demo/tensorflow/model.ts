import * as toxicity from '@tensorflow-models/toxicity';

const confidenceThreshold = 0.9;
const labels = ["toxicity","severe_toxicity","identity_attack","insult","threat","sexual_explicit","obscene"];

export const  predict = async (sentence: string) => {
    const model = await toxicity.load(confidenceThreshold,labels);
    const predictions = await model.classify(sentence);
    return predictions;
};
