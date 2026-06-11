# RICE BOX ONLINE

เว็บคอร์สเรียนฟรีสำหรับซีรีส์เปิดร้านข้าวออนไลน์ด้วย AI ดูวิดีโอในหน้าเว็บเดียว พร้อมรายการบทเรียน ความคืบหน้า และ prompt สำหรับนำไปใช้จริง

## วิธีใส่วิดีโอ YouTube

1. อัปโหลดวิดีโอขึ้น YouTube
2. ตั้งสถานะเป็น `Unlisted`
3. คัดลอก Video ID จากลิงก์ เช่น `https://www.youtube.com/watch?v=ABC123` จะได้ `ABC123`
4. เปิดไฟล์ `js/app.js`
5. ใส่ค่าในบทเรียนที่ต้องการ เช่น

```js
videoId: "ABC123"
```

เว็บใช้ `youtube-nocookie.com` พร้อม `rel=0` และ `modestbranding=1` เพื่อลดการพาผู้ชมออกจากเว็บเท่าที่ YouTube อนุญาต

ถ้าต้องการควบคุมการดูวิดีโอให้แน่นกว่านี้ แนะนำ Cloudflare Stream, Bunny Stream หรือ Vimeo privacy เพราะรองรับการจำกัดโดเมนและควบคุม player ได้มากกว่า YouTube

## ติดตั้งเป็นแอป

เว็บนี้ตั้งค่าเป็น PWA แล้ว เมื่อเปิดผ่าน GitHub Pages บน Chrome, Edge หรือมือถือที่รองรับ จะสามารถกดติดตั้งเป็นแอปได้ โดยใช้ไอคอนจาก `assets/app-icon-512.png` และไฟล์ `manifest.webmanifest`
