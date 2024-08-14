import axios from "axios";

export default async function handler(req, res) {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ error: "Location is required" });
  }

  try {
    const apiUrl = `http://openapi.seoul.go.kr:8088/${
      process.env.SEOUL_API_KEY
    }/json/citydata_ppltn/1/2/${encodeURIComponent(location)}`;
    const response = await axios.get(apiUrl);

    res.status(200).json(response.data);
  } catch (error) {
    console.error("API request error:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
