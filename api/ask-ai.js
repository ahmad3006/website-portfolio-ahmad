const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // tambahkan ini di Vercel Environment
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { question } = req.body;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo", // atau model lain sesuai langgananmu
      messages: [{ role: "user", content: question }],
    });

    const reply = completion.data.choices[0].message.content;

    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Maaf, AI sedang mengalami gangguan teknis." });
  }
}