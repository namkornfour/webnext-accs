#FROM nginx:alpine 
# FROM node:18-alpine AS builder

# # กำหนด Directory สำหรับเว็บไซต์
# WORKDIR /usr/share/nginx/html

# # คัดลอกไฟล์ตั้งค่า Nginx
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# # คัดลอกเว็บไซต์ Static
# #COPY out/ /usr/share/nginx/html/
# COPY --from=builder /app/out /usr/share/nginx/html

# # เปิด Port 80
# EXPOSE 80

# # เริ่มต้น Nginx
# CMD ["nginx", "-g", "daemon off;"]

FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]