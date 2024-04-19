const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(express.json());
app.use(cors(corsOptions));

// -----------  ROUTES  --------------  //
app.get("/api/prices", async (req, res) => {
  try {
    const data = await fetchProductPrices(req.query);
    res.json(data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .send(error.message || "Error fetching data");
  }
});

app.get("/api/map-data", async (req, res) => {
  try {
    const data = await fetchMapData(req.query);
    res.json(data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .send(error.message || "Error fetching data");
  }
});

// Methods
const fetchProductPrices = async (queryParams) => {
  const apiUrl = `https://www.ec.europa.eu/agrifood/api/cereal/prices`;
  const { data } = await axios.get(apiUrl, {
    params: queryParams,
  });
  return data;
};
const fetchMapData = async (queryParams) => {
  const apiUrl = `https://www.ec.europa.eu/agrifood/api/cereal/prices`;
  const { data } = await axios.get(apiUrl, {
    params: queryParams,
  });
  return data;
};

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
