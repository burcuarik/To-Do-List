const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`Uygulama ${PORT} portunda çalışıyor...`);
});
