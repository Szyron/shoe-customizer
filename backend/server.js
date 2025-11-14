import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});


// Test endpoint
app.get("/", (req, res) => {
  res.send("Backend running");
});




// Shoe customization options
app.get("/shoe", (req, res) => {
  res.json({
    sole: [
        { name: "Off-White", value: "#f5f5f0" },
        { name: "Gum", value: "#c58f54" },
        { name: "Black", value: "#1a1a1a" },
        { name: "Grey", value: "#bfc3c9" },
        { name: "Cream", value: "#e8e3d9" },
    ],

    midBack: [
        { name: "Navy", value: "#1f2a44" },
        { name: "Burgundy", value: "#7b2b39" },
        { name: "Olive", value: "#556b2f" },
        { name: "Steel Grey", value: "#6e7482" },
        { name: "Tan Brown", value: "#a07855" }
    ],

    shoeLace: [
        { name: "White", value: "#ffffff" },
        { name: "Cream", value: "#e6dcc8" },
        { name: "Grey", value: "#d4d4d4" },
        { name: "Black", value: "#000000" },
        { name: "Light Tan", value: "#e7d6b6" }
    ],

    midFront: [
        { name: "Grey", value: "#8a8f99" },
        { name: "Light Blue", value: "#87a8d0" },
        { name: "Black", value: "#1a1a1a" },
        { name: "Forest Green", value: "#2e4f3a" },
        { name: "Maroon", value: "#6a1f2c" }
    ],

    midBottom: [
        { name: "Charcoal", value: "#4a4f58" },
        { name: "Stone", value: "#6e747f" },
        { name: "Midnight Blue", value: "#283044" },
        { name: "Beige", value: "#d8cbb2" },
        { name: "Earth Brown", value: "#7b6044" }
    ],

    top: [
        { name: "Navy", value: "#14213d" },
        { name: "Scarlet Red", value: "#c1121f" },
        { name: "White", value: "#ffffff" },
        { name: "Black", value: "#000000" },
        { name: "Cool Grey", value: "#adb5bd" }
    ],

    midFirstPolygon: [
        { name: "Beige", value: "#d9c7a3" },
        { name: "Tan", value: "#b9976f" },
        { name: "Warm Sand", value: "#d8b892" },
        { name: "Cream", value: "#ede3d1" },
        { name: "Grey", value: "#c5c8cc" }
    ],

    midSecondPolygon: [
        { name: "Sand", value: "#d8b892" },
        { name: "Mocha", value: "#8c6d4f" },
        { name: "Olive", value: "#6b7c4a" },
        { name: "Cement Grey", value: "#9da3aa" },
        { name: "Bone", value: "#cdc2b2" }
    ],

    middleTop: [
        { name: "Sky Blue", value: "#9ecae1" },
        { name: "Storm Blue", value: "#3c6e91" },
        { name: "Cloud Grey", value: "#d3d7dd" },
        { name: "Nightfall", value: "#2d394d" },
        { name: "Light Navy", value: "#415a77" }
    ],
  });
});

// Shoe customization options
app.get("/shoe_size", (req, res) => {
  res.json({
    sizes: [
      36, 37, 38, 39, 40,
      41, 42, 43, 44, 45,
      46, 47, 48, 49, 50
    ]
  });
});


app.post("/order", async (req, res) => {
  const {
    lastName,
    surname,
    email,
    tel,
    size,
    ...colors
  } = req.body;

  if (!lastName || !surname || !email || !tel || !size) {
    return res.status(400).json({ error: "Missing personal or size fields" });
  }

  if (!colors || Object.keys(colors).length === 0) {
    return res.status(400).json({ error: "No color data received" });
  }

  try {
    const colorListHTML = Object.entries(colors)
      .map(([part, color]) => `<li><b>${part}</b>: ${color}</li>`)
      .join("");

    await transporter.sendMail({
      from: `"Shoe Customizer" <${process.env.SMTP_USER}>`,
      to: "szirony.dev@gmail.com",
      subject: "Új cipő rendelés",
      html: `
        <h2>Új rendelés érkezett</h2>
        <p><b>Név:</b> ${lastName} ${surname}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefonszám:</b> ${tel}</p>
        <p><b>Méret:</b> ${size}</p>

        <h3>Kiválasztott színek:</h3>
        <ul>${colorListHTML}</ul>

        <p>Ideje feldolgozni! 🚀</p>
      `
    });

    res.json({ message: "Order sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Email sending failed" });
  }
});


app.get("/test-mail", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Shoe Customizer" <${process.env.SMTP_USER}>`,
      to: "szironybalazs@gmail.com",
      subject: "Teszt email",
      text: "Ha ezt látod, működik a Gmail SMTP 🎉"
    });

    res.send("Email elküldve!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Hiba: " + err.message);
  }
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
