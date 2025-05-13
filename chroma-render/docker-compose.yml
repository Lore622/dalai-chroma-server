# Usa un'immagine base con Node.js
FROM node:18

# Crea una cartella di lavoro
WORKDIR /app

# Copia i file del progetto
COPY . .

# Installa le dipendenze
RUN npm install

# Espone la porta (opzionale, utile per debug)
EXPOSE 5000

# Comando di avvio
CMD ["node", "index.js"]
