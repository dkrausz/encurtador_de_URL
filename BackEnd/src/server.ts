import { log } from "console";
import { app } from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server sucessfully started on port ${PORT}`);
});
