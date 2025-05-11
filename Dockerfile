# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala TODAS las dependencias (incluye swagger-autogen)
RUN npm install

# Copia el resto de los archivos
COPY . .

# Genera la documentación Swagger (puede ser opcional si lo haces antes del build)
RUN npm run swagger

# Expone el puerto usado por la app
EXPOSE 4000

# Arranca la aplicación
CMD ["npm", "start"]