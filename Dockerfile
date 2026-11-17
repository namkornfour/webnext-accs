FROM nginx:alpine

# กำหนด Directory สำหรับเว็บไซต์
WORKDIR /usr/share/nginx/html

# คัดลอกไฟล์ตั้งค่า Nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# คัดลอกเว็บไซต์ Static
COPY out/ /usr/share/nginx/html/

# เปิด Port 80
EXPOSE 80

# เริ่มต้น Nginx
CMD ["nginx", "-g", "daemon off;"]