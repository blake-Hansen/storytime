require('dotenv').config('../../.env');

const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.API_KEY,
}));

module.exports = {
  getStory(params, callback) {
    console.log('THis is chat params', params);
    const { age, location, length, name } = params;
    openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: `I need a childrens bedtime story for a child the age of ${age}, the story should take place in ${location} and the main characters name should be ${name}, and take ${length} to read.`,
      }],
      temperature: 0.7,
    })
      .then((res) => callback(null, res.data.choices[0].message.content))
      .catch((err) => callback(err, null));
  },
};
