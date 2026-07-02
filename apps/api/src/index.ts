import dotenv from "dotenv";
import app from "./app.js";
import customerRoutes from "./routes/customer.routes";

app.use("/api/customers", customerRoutes);

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 API berjalan di http://localhost:${PORT}`);
});
