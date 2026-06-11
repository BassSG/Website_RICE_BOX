/* ==========================================================================
   RICE BOX ONLINE - JAVASCRIPT APPLICATION LOGIC
   ========================================================================== */

// 1. Course Syllabus & Lecture Data
const lectures = [
    {
        id: 1,
        title: "แนะนำคอร์สเรียน & การเตรียมตัวติดตั้งเครื่องมือ AI",
        duration: "12:15",
        tag: "บทเรียนที่ 1",
        videoId: "", // พิมพ์ YouTube Video ID ใส่ตรงนี้ (เช่น "dQw4w9WgXcQ") เมื่ออัปโหลดแล้ว
        overview: `
            <h4>แนะนำคอร์สเรียน & การเตรียมตัวติดตั้งเครื่องมือ AI</h4>
            <p>ยินดีต้อนรับสู่บทแรกของ <strong>RICE BOX ONLINE!</strong> ในบทเรียนนี้เราจะปูพื้นฐานการทำธุรกิจร้านข้าวกล่องเดลิเวอรีในยุคปัจจุบัน และเรียนรู้วิธีสมัครใช้งานรวมถึงการติดตั้งผู้ช่วย AI หลักที่จะช่วยแบ่งเบาภาระในชีวิตประจำวันของคุณ</p>
            <blockquote>
                <strong>เนื้อหาหลักที่ได้เรียนรู้:</strong><br>
                - โครงสร้างและแนวคิดของแบรนด์ RICE BOX ONLINE<br>
                - วิธีสมัครและเปิดบัญชี ChatGPT และ Claude 3.5 Sonnet ฟรี<br>
                - หลักการสั่งงาน AI (Prompting 101) เบื้องต้นเพื่อให้ได้ผลลัพธ์อาหารที่ดูน่าทานและตรงจุด
            </blockquote>
            <p>การทำร้านข้าวกล่องไม่จำจำเป็นต้องมีงบประมาณก้อนโตหรือมีทำเลทองอีกต่อไป เพียงแค่คุณมีห้องครัวที่ได้มาตรฐานและมีสมองกล AI คอยเป็นที่ปรึกษาในการตลาดและบริหารจัดการ คุณก็สามารถสร้างแบรนด์ที่แข่งขันในแพลตฟอร์มต่างๆ ได้อย่างเท่าเทียม</p>
        `,
        prompts: [
            {
                title: "Prompt ช่วยวิเคราะห์ทำเลและวางกลยุทธ์แบรนด์ข้าวกล่อง",
                text: "ฉันกำลังจะเริ่มต้นเปิดร้านข้าวกล่องเดลิเวอรีสไตล์ไทย-โมเดิร์นจากที่บ้าน (Cloud Kitchen) เมนูเน้นความรวดเร็ว ตักง่าย และราคาเข้าถึงได้ กลุ่มลูกค้าเป้าหมายคือพนักงานออฟฟิศและนักศึกษาในรัศมี 5 กิโลเมตรจากทำเล [ระบุทำเลของคุณ เช่น แถวรังสิต ปทุมธานี] ช่วยแนะนำกลยุทธ์การตลาดและวิเคราะห์จุดแข็ง จุดอ่อน โอกาส และอุปสรรค (SWOT) ให้กับโมเดลนี้หน่อย"
            }
        ],
        resources: [
            {
                title: "Business Checklist สำหรับร้านอาหาร Cloud Kitchen",
                format: "PDF",
                url: "#"
            }
        ]
    },
    {
        id: 2,
        title: "การออกแบบเมนูและคำนวณต้นทุน/GP ด้วย AI",
        duration: "15:40",
        tag: "บทเรียนที่ 2",
        videoId: "", 
        overview: `
            <h4>การออกแบบเมนูและคำนวณต้นทุน/GP ด้วย AI</h4>
            <p>บทเรียนที่สำคัญที่สุดเรื่องหนึ่งในการทำเดลิเวอรีคือ <strong>"ตัวเลขและต้นทุน"</strong> การขายอาหารผ่านแอปเดลิเวอรีมีการคิดค่าบริการ GP (Gross Profit) เฉลี่ยสูงถึง 30-35% หากคำนวณต้นทุนวัตถุดิบและราคาขายผิดพลาด อาจทำให้ยอดขายดีแต่ไม่มีกำไรเหลือเลย</p>
            <blockquote>
                <strong>เนื้อหาหลักที่ได้เรียนรู้:</strong><br>
                - วิธีให้ AI ช่วยคัดเลือกเมนูข้าวกล่องที่ใช้วัตถุดิบร่วมกันได้สูง (ช่วยลดต้นทุนวัตถุดิบเน่าเสีย)<br>
                - วิธีคำนวณราคาขายปลีกเพื่อให้ได้กำไรสุทธิหลังหัก GP และค่าดำเนินการ<br>
                - การออกแบบเมนูพ่วง (Combo/Bundle Menu) เพื่อเพิ่มยอดซื้อต่อครั้ง (Basket Size)
            </blockquote>
            <p>ในบทเรียนนี้เราจะป้อนคำสั่งให้ AI วิเคราะห์ต้นทุนต่อหน่วยของกะเพรา แกงกะหรี่ และเมนูข้าวกล่องอื่นๆ พร้อมสร้างไฟล์คำนวณ GP เพื่อความปลอดภัยทางการเงินของร้านคุณ</p>
        `,
        prompts: [
            {
                title: "Prompt ให้ AI คำนวณราคาขายและสูตรคำนวณ GP 30%",
                text: "ฉันจะทำร้านข้าวกล่องเดลิเวอรีบน LINE MAN และ Grab ซึ่งมีการหักค่า GP 30% ฉันมีเมนูแนะนำคือ 'ข้าวหมูสามชั้นคั่วพริกเกลือ' โดยมีต้นทุนค่าวัตถุดิบทั้งหมด (รวมกล่อง ช้อนส้อม และซอสน้ำจิ้ม) อยู่ที่ 28 บาทต่อกล่อง ช่วยคำนวณราคาขายที่เหมาะสม เพื่อให้ฉันยังได้รับกำไรสุทธิ (Net Margin) หลังหักค่า GP และค่าวัตถุดิบแล้วไม่น้อยกว่า 35-40% ของราคาขายปลีก และช่วยอธิบายวิธีคิดคำนวณทีละขั้นตอนอย่างละเอียด"
            }
        ],
        resources: [
            {
                title: "เทมเพลตคำนวณต้นทุนวัตถุดิบอาหารและ GP (Excel)",
                format: "XLS",
                url: "#"
            }
        ]
    },
    {
        id: 3,
        title: "การออกแบบแบรนด์และตกแต่งร้านด้วย Midjourney & Canva",
        duration: "18:20",
        tag: "บทเรียนที่ 3",
        videoId: "", 
        overview: `
            <h4>การออกแบบแบรนด์และตกแต่งร้านด้วย Midjourney & Canva</h4>
            <p>ภาพปกเมนูอาหารคือด่านแรกที่ลูกค้าจะเห็นเมื่อไถมือถือในแอปเดลิเวอรี หากรูปภาพไม่ดึงดูดใจ ลูกค้าจะเลื่อนผ่านทันที ในบทนี้เราจะใช้พลังของ AI เจนภาพอาหารที่สวยงาม สมจริง และน่ากินอย่างเป็นมืออาชีพโดยไม่ต้องซื้อกล้องราคาแพง</p>
            <blockquote>
                <strong>เนื้อหาหลักที่ได้เรียนรู้:</strong><br>
                - การเขียน Prompt ภาษาอังกฤษใน Midjourney สำหรับงานภาพอาหารโดยเฉพาะ<br>
                - เทคนิคการจัดองค์ประกอบภาพ แสงสี และสภาพแวดล้อมเพื่อสร้างความน่าเชื่อถือ<br>
                - การนำภาพจาก AI ไปแต่งองค์ประกอบเพิ่ม (ใส่โลโก้ กรอบ ส่วนลด) ด้วย Canva ฟรี
            </blockquote>
            <p>หมายเหตุ: ภาพจาก AI ควรมีความใกล้เคียงกับอาหารที่คุณจัดส่งจริงด้วย เพื่อหลีกเลี่ยงการโดนตำหนิจากลูกค้าเมื่อจัดส่งของจริง</p>
        `,
        prompts: [
            {
                title: "Prompt เจนรูปภาพอาหารไทยให้สมจริงใน Midjourney",
                text: "A photorealistic, highly detailed food photography of a Thai style Crispy Pork Belly with Holy Basil on top of steamed jasmine rice (Pad Kra Praw Moo Krob), presented beautifully in a modern eco-friendly paper rice box, placing on a rustic dark wooden table. Studio lighting, shallow depth of field, warm color tone, close up shot, 8k resolution, highly appetising --ar 16:9 --style raw --v 6.0"
            }
        ],
        resources: [
            {
                title: "Midjourney Cheat Sheet รวมคีย์เวิร์ดถ่ายรูปอาหาร",
                format: "PDF",
                url: "#"
            }
        ]
    },
    {
        id: 4,
        title: "ขั้นตอนสมัครและกุญแจสำคัญสู่หน้าแรกเดลิเวอรี",
        duration: "20:10",
        tag: "บทเรียนที่ 4",
        videoId: "", 
        overview: `
            <h4>ขั้นตอนสมัครและกุญแจสำคัญสู่หน้าแรกเดลิเวอรี</h4>
            <p>เจาะลึก 5 แพลตฟอร์มเดลิเวอรียอดนิยมของไทย: <strong>LINE MAN, GrabFood, ShopeeFood, Foodpanda และ Robinhood</strong> เรียนรู้กระบวนการเตรียมเอกสาร การกรอกข้อมูลเข้าระบบเพื่ออนุมัติร้านค้าได้เร็วที่สุดใน 3 วันทำการ</p>
            <blockquote>
                <strong>เนื้อหาหลักที่ได้เรียนรู้:</strong><br>
                - วิธีการเตรียมเอกสารสำหรับบุคคลธรรมดาและนิติบุคคล<br>
                - กฎอัลกอริทึมของแอปเดลิเวอรี: ทำอย่างไรให้ร้านค้าใหม่ขึ้นสู่หน้าแรกและยอดค้นหาสูงขึ้น<br>
                - เทคนิคการใส่คีย์เวิร์ดค้นหาในรายละเอียดร้านค้าเพื่อทำ SEO ร้านอาหาร
            </blockquote>
            <p>เราจะพาคุณไปดูหน้าจอการสมัครระบบจริงของแต่ละค่าย และเทคนิคการตั้งชื่อร้านให้ดึงดูดใจและถูกค้นพบได้ง่ายที่สุด</p>
        `,
        prompts: [
            {
                title: "Prompt ให้ AI ช่วยตั้งชื่อร้านข้าวกล่องตามหลักการค้นหา (SEO)",
                text: "ช่วยตั้งชื่อร้านข้าวกล่องเดลิเวอรีที่เน้นเมนูกะเพราและหมูทอดรสจัดจ้าน เน้นตลาดเดลิเวอรีด่วน โดยอ้างอิงหลักการตั้งชื่อร้านให้ถูกค้นหาง่ายใน LINE MAN และ Grab (ควรประกอบด้วย ชื่อแบรนด์ที่จำง่าย + คำหลักที่คนชอบค้นหาตอนหิว) ช่วยคิดชื่อที่เป็นภาษาไทยและทับศัพท์อังกฤษ 10 ชื่อ พร้อมระบุเหตุผลว่าทำไมชื่อนั้นๆ ถึงได้เปรียบทาง SEO"
            }
        ],
        resources: [
            {
                title: "คู่มือเตรียมเอกสารสมัครร้านค้า 5 ค่ายเดลิเวอรีหลัก",
                format: "PDF",
                url: "#"
            }
        ]
    },
    {
        id: 5,
        title: "การเขียนคำอธิบายเมนูสะกดใจและแคปชั่นขายด้วย AI",
        duration: "14:50",
        tag: "บทเรียนที่ 5",
        videoId: "", 
        overview: `
            <h4>การเขียนคำอธิบายเมนูสะกดใจและแคปชั่นขายด้วย AI</h4>
            <p>การอธิบายวัตถุดิบและรสชาติของอาหารในหน้ารายการสินค้าช่วยในการตัดสินใจของลูกค้าได้อย่างมาก บทนี้จะเปลี่ยนคำอธิบายแสนธรรมดา เช่น "ข้าวกะเพราหมูสับเผ็ดน้อย" ให้กลายเป็นข้อความที่ชวนลิ้มลองและเพิ่มคุณค่าให้กับแบรนด์</p>
            <blockquote>
                <strong>เนื้อหาหลักที่ได้เรียนรู้:</strong><br>
                - การใช้ ChatGPT และ Claude เขียนข้อความขาย (Copywriting) สำหรับเมนูเดี่ยวและเซ็ตโปรโมชัน<br>
                - เทคนิคการเขียนคำอธิบายแบบ Storytelling บอกเล่าแหล่งที่มาวัตถุดิบ<br>
                - วิธีคิดโปรโมชันเขียนแคปชั่นเพื่อโพสต์เฟซบุ๊กดึงคนเข้าร้านเดลิเวอรี
            </blockquote>
        `,
        prompts: [
            {
                title: "Prompt เขียนข้อความโฆษณาเมนูยอดนิยมให้น่าซื้อ",
                text: "ช่วยเขียนคำอธิบายรายละเอียดเมนู 'ข้าวไข่ข้นซอสต้มยำกุ้งแม่น้ำฉ่ำๆ' เพื่อลงในแอปสั่งอาหาร GrabFood โดยใช้ภาษาไทยที่ฟังดูน่ากินเป็นพิเศษ เน้นย้ำเรื่องความละมุนของไข่ข้น กลิ่นหอมจากน้ำพริกเผาแท้ๆ และความเด้งหวานของเนื้อกุ้งแม่น้ำ ความยาว 3 บรรทัด และใส่ Emojis ที่เหมาะสมประกอบด้วย"
            }
        ],
        resources: [
            {
                title: "คลังคำอธิบายเมนูอาหารขายดี (Copywriting Swipe File)",
                format: "PDF",
                url: "#"
            }
        ]
    },
    {
        id: 6,
        title: "การวิเคราะห์ยอดขายและการเขียนตอบรีวิวของลูกค้า",
        duration: "12:35",
        tag: "บทเรียนที่ 6",
        videoId: "", 
        overview: `
            <h4>การวิเคราะห์ยอดขายและการเขียนตอบรีวิวของลูกค้า</h4>
            <p>หลังจากเปิดร้านสำเร็จ การรักษามาตรฐานและการจัดการความคิดเห็น (Reviews) ของลูกค้าคือกุญแจสู่ความยั่งยืน คะแนนรีวิวที่สูงกว่า 4.5 ดาวจะช่วยให้ร้านได้รับความไว้วางใจและมีคนกลับมาซื้อซ้ำ</p>
            <blockquote>
                <strong>เนื้อหาหลักที่ได้เรียนรู้:</strong><br>
                - การใช้ AI ช่วยตอบรีวิวทางบวก (5 ดาว) เพื่อผูกมิตรกับลูกค้าขาประจำ<br>
                - การใช้ AI ช่วยตอบรีวิวเชิงลบ (1-2 ดาว) จากปัญหาไรเดอร์ส่งช้า อาหารหก หรือรสชาติไม่ตรงปกอย่างสุภาพและมืออาชีพ<br>
                - การนำคอมเมนต์ของลูกค้าไปป้อนให้ AI วิเคราะห์จุดบกพร่องและแนวทางปรับปรุงสูตรอาหาร
            </blockquote>
        `,
        prompts: [
            {
                title: "Prompt เขียนตอบรีวิวเชิงลบจากลูกค้าเพื่อกู้สถานการณ์ร้าน",
                text: "มีลูกค้ามารีวิวร้าน RICE BOX ของฉัน 1 ดาวเนื่องจากแจ้งว่า 'ข้าวกะเพราหมูกรอบเหนียวมากและอาหารหกเลอะเทอะนอกกล่อง' ช่วยเขียนร่างข้อความขออภัยอย่างเป็นทางการ สุภาพ และแสดงความรับผิดชอบอย่างจริงใจ โดยแจ้งปฏิเสธความตั้งใจที่จะทำให้เกิดความพึงพอใจสูงสุด พร้อมเสนอให้ลูกค้าแอดไลน์ส่งข้อมูลส่วนตัวเพื่อรับกล่องแก้ตัวใหม่ฟรีในการสั่งครั้งต่อไป และเน้นย้ำว่าร้านค้าจะนำไปปรับปรุงรสชาติทันที"
            }
        ],
        resources: [
            {
                title: "เทมเพลตรวมคำตอบรีวิวสำหรับสถานการณ์วิกฤต",
                format: "PDF",
                url: "#"
            }
        ]
    }
];

// 2. Chat Simulator Database (Interactive Widget)
const simulatorData = {
    menu: {
        prompt: "ช่วยคิดเมนูข้าวกล่องเด็ดๆ 3 เมนูที่ใช้วัตถุดิบหลักเป็นหมูสามชั้นสไลด์ เน้นทำง่าย กำไรดี และเหมาะกับการขนส่งเดลิเวอรี",
        response: `🍱 **เมนูข้าวกล่องหมูสไลด์เด็ด 3 ไอเดีย (เน้นทำง่าย กำไรดี ส่งง่าย):**

1. **ข้าวหมูสามชั้นสไลด์คั่วพริกเกลือกระเทียมโทน**
   - **จุดขาย:** เมนูแห้ง น้ำซอสไม่หกเลอะเทอะเวลาไรเดอร์ขับมอเตอร์ไซค์ รสชาติจัดจ้าน หอมกลิ่นคั่วกระทะ
   - **การเตรียม:** เจียวกระเทียมพริกค้างไว้ล่วงหน้า เมื่อมีออเดอร์ให้เอาหมูสไลด์ลงไปสะดุ้งกระทะแล้วตักคลุกพริกเกลือได้ทันทีภายใน 2 นาที
   - **ต้นทุนเฉลี่ย:** 22 บาท / ตั้งราคาขาย: 65 - 75 บาท (กำไรหลังหัก GP ~40%)

2. **ข้าวแกงคั่วหมูสไลด์ชะอมทอดเกลือ**
   - **จุดขาย:** ดัดแปลงจากแกงชะอมทั่วไป แต่ทำแบบแห้งขลุกขลิก ราดบนข้าวสวยร้อนๆ ทนทานต่อการเขย่าของขนส่ง
   - **การเตรียม:** แกงคั่วเคี่ยวเข้มข้นตุนไว้ หั่นชะอมชุบไข่ทอดสี่เหลี่ยมเก็บไว้ เมื่อจะเสิร์ฟแค่อุ่นแกงราดหมูสไลด์วางชะอมข้างๆ
   - **ต้นทุนเฉลี่ย:** 24 บาท / ตั้งราคาขาย: 69 - 79 บาท

3. **ข้าวหมูสไลด์ผัดซอสสุกี้ยากี้ไข่ข้น (สไตล์ญี่ปุ่น)**
   - **จุดขาย:** เมนูพรีเมียมขวัญใจเด็กหอและคนทำงานออฟฟิศ รสชาติหวานเค็มละมุน กินง่าย
   - **การเตรียม:** ทำซอสสุกี้สำเร็จรูปไว้ ผัดหมูกับซอสอย่างรวดเร็ว วางลงบนไข่ข้นที่รองอยู่บนข้าวสวย
   - **ต้นทุนเฉลี่ย:** 25 บาท / ตั้งราคาขาย: 79 - 89 บาท

💡 **ข้อแนะนำการส่งเดลิเวอรี:** เมนูที่เป็นไข่ข้นหรือมีซอสขลุกขลิก ให้แนะนำให้เลือกระดับความสุกของไข่ และใช้กล่องแบบ 2 ช่องแยกข้าวและกับข้าวเพื่อไม่ให้ข้าวแฉะระหว่างทางครับ!`
    },
    caption: {
        prompt: "ช่วยเขียนแคปชั่นโฆษณาเมนู 'ข้าวไก่ทอดซอสเกาหลีเผ็ดพ่นไฟ' สำหรับโพสต์ลง Facebook เพจร้านเพื่อกระตุ้นยอดขายทางแอปเดลิเวอรี",
        response: `✍️ **โพสต์แคปชั่นโปรโมทสุดปัง (ก๊อปปี้ไปปรับใช้ได้เลย!):**

🔥 **[ไก่ทอดกรอบๆ ซอสเกาหลีเยิ้มๆ พร้อมเสิร์ฟแล้วจ้าาา!]** 🔥

เรียนลูกค้าทุกท่านที่กำลังมองหาความแซ่บระดับพ่นไฟ! 💥 วันนี้ร้าน RICE BOX ขอแนะนำเมนูใหม่ล่าสัตว์...เอ้ย ล่าสุด! 🐔 **"ข้าวไก่ทอดซอสเกาหลีเผ็ดพ่นไฟ"** 🇰🇷

✨ ไก่ทอดแป้งสูตรลับ กรอบนอกฉ่ำใน คลุกเคล้ากับซอสเกาหลีเผ็ดสะใจที่ปรุงเคี่ยวเข้มข้น หวานนิด เผ็ดร้อนปลายลิ้น ทานคู่กับข้าวสวยร้อนๆ ฟินจนต้องสั่งเพิ่ม!

👉 สั่งได้แล้ววันนี้บนทุกแอปเดลิเวอรี! สะดวกแอปไหนกดเลย มีโค้ดส่วนลดรออยู่เพียบ!
🟢 **LINE MAN:** [ใส่ลิงก์ร้าน]
🟢 **GrabFood:** [ใส่ลิงก์ร้าน]
🟠 **ShopeeFood:** [ใส่ลิงก์ร้าน]

*สั่งเลยตอนนี้ ก่อนไก่ทอดจะหมดกระทะนะจ๊ะ! 😉*

#RiceBoxOnline #ไก่ทอดซอสเกาหลี #ของอร่อยบอกต่อ #เดลิเวอรีส่งตรงถึงบ้าน`
    },
    gp: {
        prompt: "วัตถุดิบต้นทุน 35 บาทต่อกล่อง หากต้องการกำไรสุทธิหลังหัก GP 30% ให้เหลืออย่างน้อย 30 บาท ต้องตั้งราคาขายเท่าไหร่?",
        response: `📊 **การคำนวณราคาขายเดลิเวอรี (GP 30%):**

สูตรการคำนวณราคาขายเดลิเวอรีเพื่อป้องกันการขาดทุน:
**ราคาขายปลีก = (ต้นทุนวัตถุดิบ + กำไรที่ต้องการ) / (1 - (เปอร์เซ็นต์ GP / 100))**

**แทนค่าตามโจทย์ของคุณ:**
- ต้นทุนวัตถุดิบ + บรรจุภัณฑ์ = 35 บาท
- กำไรสุทธิที่อยากได้เหลือเข้ากระเป๋าจริง = 30 บาท
- รวมต้นทุนบวกกำไรที่อยากได้ = 35 + 30 = 65 บาท
- อัตรา GP = 30% (ตัวหารคือ 1 - 0.3 = 0.7)

**คำนวณ:**
ราคาขายปลีก = 65 / 0.7 = **92.85 บาท**

✅ **แนะนำให้ตั้งราคาขายบนแอปเดลิเวอรีที่: 95 บาท**

**โครงสร้างส่วนแบ่งรายได้จริง (ยอด 95 บาท):**
1. โดนหักค่า GP 30% ให้แอป = 28.5 บาท
2. ร้านค้าได้รับเงินโอนสุทธิ = 66.5 บาท
3. หักค่าวัตถุดิบและกล่องของคุณ = 35.0 บาท
4. **กำไรสุทธิคงเหลือจริงของคุณ = 31.5 บาท** (ผ่านเกณฑ์ที่อยากได้คืออย่างน้อย 30 บาท)

⚠️ *ระวัง:* ห้ามนำต้นทุน 35 บาท ไปบวก 30% ตรงๆ (35 + 10.5 = 45.5 บาท) แล้วเอาไปขาย เพราะถ้าหัก GP 30% จาก 45.5 บาท (โดนหัก 13.65 บาท) คุณจะเหลือเงินแค่ 31.85 บาท ซึ่งจะต่ำกว่าต้นทุนวัตถุดิบและขาดทุนทันที!`
    },
    review: {
        prompt: "ลูกค้าบ่นใน LINE MAN ว่า 'ปริมาณอาหารน้อยเกินไป ไม่คุ้มค่าราคา 80 บาท' ช่วยตอบกลับรีวิวนี้เพื่อแก้ภาพลักษณ์ร้านค้าให้หน่อย",
        response: `💬 **แบบร่างการเขียนตอบรีวิวระดับมืออาชีพ (สุภาพ นอบน้อม และปิดการติเตียน):**

"สวัสดีครับลูกค้า ทางร้าน RICE BOX ต้องกราบขออภัยอย่างสูงสำหรับความไม่พึงพอใจในปริมาณอาหารของการสั่งซื้อครั้งนี้นะครับ 🙏

ทางร้านน้อมรับคำติชมของลูกค้าและรู้สึกไม่สบายใจอย่างมากกับประสบการณ์ที่เกิดขึ้น เบื้องต้นขอชี้แจงว่าทางเรามีเกณฑ์มาตรฐานการชั่งน้ำหนักวัตถุดิบในครัวก่อนจัดลงกล่อง แต่เหตุการณ์นี้อาจเกิดความคลาดเคลื่อนในการจัดเตรียม ซึ่งทางผู้บริหารร้านค้าได้เรียกพนักงานมาตักเตือนและทบทวนระบบการตวงปริมาณเรียบร้อยแล้วครับ

เพื่อเป็นการชดเชยและขอโอกาสให้ร้านเราได้ดูแลลูกค้าอีกครั้ง รบกวนลูกค้าทักแชทหาเพจหรือแอดไลน์ส่วนตัวของร้านค้าที่ [ใส่เบอร์โทรหรือไอดีไลน์] พร้อมแนบรูปถ่ายใบเสร็จ ทางร้านยินดีขอมอบส่วนลดพิเศษ 50% หรือจัดส่งเมนูกล่องใหม่ไปแก้ตัวให้ทานฟรีถึงบ้านทันทีครับ

หวังเป็นอย่างยิ่งว่าจะได้รับความเมตตาและโอกาสจากลูกค้าให้เราปรับปรุงแก้ไขบริการให้ดียิ่งขึ้นครับ ขอบพระคุณครับ"

💡 **เหตุผลที่เขียนแบบนี้:** แสดงความยินดีที่จะปรับปรุง ไม่โต้เถียง และพยายามดึงลูกค้าออกจากพื้นที่สาธารณะ (หน้าแอป) เข้าสู่การดูแลแบบส่วนตัวเพื่อป้องกันรีวิวเสียหายต่อเนื่องครับ!`
    }
};

// 3. Application State
let currentLectureId = 1;
let completedLectures = [];
let ytPlayer = null;
let countdownTimer = null;

// 4. Initialisation on Load
document.addEventListener("DOMContentLoaded", () => {
    loadProgressFromStorage();
    renderPlaylist();
    loadLectureDetails(currentLectureId);
    setupTabListeners();
    setupSimulatorListeners();
    setupFaqListeners();
    loadYoutubeApi();
});

// 5. Load & Save Progress to localStorage
function loadProgressFromStorage() {
    const saved = localStorage.getItem("rice_box_completed_lectures");
    if (saved) {
        try {
            completedLectures = JSON.parse(saved);
        } catch (e) {
            completedLectures = [];
        }
    }
    updateProgressUI();
}

function saveProgressToStorage() {
    localStorage.setItem("rice_box_completed_lectures", JSON.stringify(completedLectures));
    updateProgressUI();
}

function updateProgressUI() {
    const total = lectures.length;
    const completedCount = completedLectures.length;
    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    
    // Update navigation indicator
    const percentEl = document.getElementById("nav-progress-percent");
    const fillEl = document.getElementById("nav-progress-bar-fill");
    
    if (percentEl) percentEl.textContent = `${percent}%`;
    if (fillEl) fillEl.style.width = `${percent}%`;
    
    // Update lecture counters in sidebar
    const countEl = document.getElementById("lecture-count-text");
    if (countEl) {
        countEl.textContent = `${completedCount}/${total} เรียนสำเร็จ`;
    }
}

// 6. Render Syllabus Sidebar Playlist
function renderPlaylist() {
    const container = document.getElementById("playlist-container");
    if (!container) return;
    
    container.innerHTML = lectures.map(lec => {
        const isActive = lec.id === currentLectureId ? "active" : "";
        const isCompleted = completedLectures.includes(lec.id) ? "completed" : "";
        
        return `
            <div class="playlist-item ${isActive} ${isCompleted}" data-lecture-id="${lec.id}" onclick="onLectureClick(${lec.id})">
                <div class="checkbox-wrapper" onclick="toggleComplete(event, ${lec.id})">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
                <div class="lecture-info">
                    <span class="lecture-tag">${lec.tag}</span>
                    <div class="lecture-title">${lec.title}</div>
                    <div class="lecture-meta">
                        <span>⏱️ ${lec.duration} นาที</span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Toggle manual completion from checkbox click
function toggleComplete(event, lectureId) {
    event.stopPropagation(); // prevent loading video when clicking checkbox
    
    const idx = completedLectures.indexOf(lectureId);
    if (idx > -1) {
        completedLectures.splice(idx, 1);
    } else {
        completedLectures.push(lectureId);
    }
    
    saveProgressToStorage();
    renderPlaylist();
}

// Click on playlist item to load details
function onLectureClick(lectureId) {
    if (countdownTimer) {
        clearTimeout(countdownTimer);
        countdownTimer = null;
    }
    currentLectureId = lectureId;
    renderPlaylist();
    loadLectureDetails(lectureId);
}

// 7. Load details under player and update Video source
function loadLectureDetails(lectureId) {
    const lec = lectures.find(l => l.id === lectureId);
    if (!lec) return;
    
    // Update Bottom Bar info
    document.getElementById("current-video-title").textContent = `${lec.tag}: ${lec.title}`;
    document.getElementById("current-video-duration").textContent = `${lec.duration} นาที`;
    
    // Render Notes Tab
    document.getElementById("notes-content-area").innerHTML = lec.overview;
    
    // Render Prompts Tab
    const promptsArea = document.getElementById("prompts-content-area");
    if (lec.prompts && lec.prompts.length > 0) {
        promptsArea.innerHTML = lec.prompts.map((p, idx) => `
            <div class="prompt-item">
                <div class="prompt-item-header">
                    <h5>${p.title}</h5>
                    <button class="btn btn-secondary btn-sm btn-copy-prompt" onclick="copyPromptText(this, 'prompt-text-${lectureId}-${idx}')">
                        📋 คัดลอก Prompt
                    </button>
                </div>
                <pre class="prompt-code-box" id="prompt-text-${lectureId}-${idx}">${p.text}</pre>
            </div>
        `).join("");
    } else {
        promptsArea.innerHTML = `<div class="no-data-prompt">บทเรียนนี้ไม่มีคำสั่ง AI พิเศษ</div>`;
    }
    
    // Render Resources Tab
    const resourcesArea = document.getElementById("resources-content-area");
    if (lec.resources && lec.resources.length > 0) {
        resourcesArea.innerHTML = lec.resources.map(r => `
            <div class="resource-item">
                <div class="resource-info">
                    <span class="resource-format">${r.format}</span>
                    <div>
                        <h4>${r.title}</h4>
                        <p>ไฟล์ประกอบบทเรียนหลักสูตร</p>
                    </div>
                </div>
                <a href="${r.url}" class="btn btn-secondary btn-sm" onclick="handleDownload(event, '${r.title}')">ดาวน์โหลด</a>
            </div>
        `).join("");
    } else {
        resourcesArea.innerHTML = `<div class="no-data-prompt">บทเรียนนี้ไม่มีไฟล์ดาวน์โหลดเพิ่มเติม</div>`;
    }
    
    // Update Video Source / Embed or Placeholder
    const placeholder = document.getElementById("video-placeholder-container");
    const iframe = document.getElementById("yt-player-iframe");
    
    if (lec.videoId && lec.videoId !== "") {
        // Show Iframe, hide placeholder
        placeholder.classList.add("hide");
        iframe.classList.remove("hide");
        
        if (ytPlayer && typeof ytPlayer.loadVideoById === "function") {
            ytPlayer.loadVideoById(lec.videoId);
        } else {
            // Player API not ready yet, initialize or replace src
            iframe.src = `https://www.youtube.com/embed/${lec.videoId}?enablejsapi=1&rel=0&modestbranding=1`;
        }
    } else {
        // No Video ID, show placeholder layout
        placeholder.classList.remove("hide");
        iframe.classList.add("hide");
        if (ytPlayer && typeof ytPlayer.stopVideo === "function") {
            ytPlayer.stopVideo();
        }
        
        // Custom information in placeholder
        placeholder.innerHTML = `
            <div class="placeholder-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <polygon points="5 3 19 12 5 21 5 3" fill="rgba(255, 159, 67, 0.2)" stroke="#ff9f43"/>
                </svg>
            </div>
            <h3>🎬 วิดีโอบทเรียนอยู่ระหว่างการอัพโหลด</h3>
            <p><strong>หัวข้อ:</strong> ${lec.title}<br>ผู้สอนจะนำวิดีโอมาลงในเร็วๆ นี้ คุณสามารถคัดลอก Prompt หรืออ่านเอกสารสรุปบทเรียนใต้คลิปได้ทันทีครับ</p>
        `;
    }
}

// Download click handler
function handleDownload(event, title) {
    event.preventDefault();
    alert(`📥 ไฟล์ดาวน์โหลดสำหรับ "${title}" อยู่ในขั้นตอนจัดเตรียมเข้าระบบ จะเปิดให้เข้าถึงได้เร็วๆ นี้ครับ!`);
}

// Copy prompt clipboard function
function copyPromptText(button, elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = "✓ คัดลอกแล้ว!";
        button.classList.add("copied");
        button.style.backgroundColor = "rgba(6, 199, 85, 0.15)";
        button.style.color = "#06C755";
        button.style.borderColor = "#06C755";
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove("copied");
            button.style.backgroundColor = "";
            button.style.color = "";
            button.style.borderColor = "";
        }, 2000);
    }).catch(err => {
        alert("ขออภัย ไม่สามารถคัดลอกคีย์บอร์ดได้โดยอัตโนมัติ กรุณาคลุมดำแล้วเลือกคัดลอกด้วยตนเองครับ");
    });
}

// 8. Tab Navigation Controls
function setupTabListeners() {
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const target = tab.getAttribute("data-tab");
            const panes = document.querySelectorAll(".tab-pane");
            panes.forEach(pane => {
                pane.classList.remove("active");
                if (pane.id === `tab-${target}`) {
                    pane.classList.add("active");
                }
            });
        });
    });
}

// 9. AI Chat Simulator Controls
function setupSimulatorListeners() {
    const buttons = document.querySelectorAll(".prompt-select-btn");
    const promptDisplay = document.getElementById("simulator-prompt-text");
    const runBtn = document.getElementById("btn-run-simulator");
    
    let activeKey = "menu";
    
    // Set initial prompt text
    if (promptDisplay) {
        promptDisplay.textContent = `"${simulatorData[activeKey].prompt}"`;
    }
    
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            activeKey = btn.getAttribute("data-simulator-prompt");
            promptDisplay.textContent = `"${simulatorData[activeKey].prompt}"`;
        });
    });
    
    if (runBtn) {
        runBtn.addEventListener("click", () => {
            triggerChatResponse(activeKey);
        });
    }
}

function triggerChatResponse(key) {
    const chatBody = document.getElementById("chat-simulator-body");
    if (!chatBody) return;
    
    // Clear chat simulation but keep styling
    chatBody.innerHTML = "";
    
    // Append User Message
    const userMsg = document.createElement("div");
    userMsg.className = "chat-message user";
    userMsg.innerHTML = `<div class="message-bubble">${simulatorData[key].prompt}</div>`;
    chatBody.appendChild(userMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Append Typing Indicator
    const typingMsg = document.createElement("div");
    typingMsg.className = "chat-message ai typing";
    typingMsg.innerHTML = `
        <div class="message-bubble" style="display: flex; align-items: center; gap: 8px; min-width: 150px; min-height: 36px;">
            <span>AI กำลังประมวลผลคำสั่ง</span>
            <div class="dot-typing"></div>
        </div>
    `;
    
    setTimeout(() => {
        chatBody.appendChild(typingMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 400);

    // After 1.8s, show actual response
    setTimeout(() => {
        // Remove typing indicator
        if (typingMsg.parentNode) {
            typingMsg.parentNode.removeChild(typingMsg);
        }
        
        // Append AI Response
        const aiMsg = document.createElement("div");
        aiMsg.className = "chat-message ai";
        
        const bubble = document.createElement("div");
        bubble.className = "message-bubble";
        aiMsg.appendChild(bubble);
        chatBody.appendChild(aiMsg);
        
        // Format markdown text with basic converter
        const rawText = simulatorData[key].response;
        const htmlText = formatSimulatorText(rawText);
        
        // Typing Effect
        let i = 0;
        bubble.innerHTML = "";
        const speed = 5; // milliseconds per character
        
        function typeWriter() {
            if (i < htmlText.length) {
                // If we encounter a tag, print the whole tag instantly to prevent broken HTML structure during typing
                if (htmlText.charAt(i) === "<") {
                    const tagEnd = htmlText.indexOf(">", i);
                    if (tagEnd !== -1) {
                        bubble.innerHTML += htmlText.substring(i, tagEnd + 1);
                        i = tagEnd + 1;
                    } else {
                        bubble.innerHTML += htmlText.charAt(i);
                        i++;
                    }
                } else {
                    bubble.innerHTML += htmlText.charAt(i);
                    i++;
                }
                chatBody.scrollTop = chatBody.scrollHeight;
                setTimeout(typeWriter, speed);
            }
        }
        
        typeWriter();
        
    }, 1800);
}

// Convert mock Markdown to basic HTML for chat bubbles
function formatSimulatorText(text) {
    let formatted = text
        .replace(/\n/g, "<br>")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/🍱/g, "🍱")
        .replace(/💡/g, "💡")
        .replace(/⚠️/g, "⚠️");
        
    return formatted;
}

// 10. FAQ Accordion Controls
function setupFaqListeners() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            
            // Close all
            faqItems.forEach(i => i.classList.remove("active"));
            
            // Open clicked if it wasn't active
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
}

// 11. YouTube Player API Setup
function loadYoutubeApi() {
    // Check if script exists, if not load it
    const existing = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existing) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
}

// YouTube API callback function must be in global window scope
window.onYouTubeIframeAPIReady = function() {
    const currentLec = lectures.find(l => l.id === currentLectureId);
    if (!currentLec || !currentLec.videoId) return;
    
    ytPlayer = new YT.Player('yt-player-iframe', {
        height: '100%',
        width: '100%',
        videoId: currentLec.videoId,
        playerVars: {
            'playsinline': 1,
            'rel': 0,
            'modestbranding': 1,
            'enablejsapi': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
};

function onPlayerStateChange(event) {
    // When video finishes playing (Ended = 0, Playing = 1, Paused = 2, Buffering = 3, Cued = 5)
    if (event.data === YT.PlayerState.ENDED) {
        // Mark current video as completed
        if (!completedLectures.includes(currentLectureId)) {
            completedLectures.push(currentLectureId);
            saveProgressToStorage();
            renderPlaylist();
        }
        
        // Auto Advance to next lecture after 3 seconds with alert
        if (currentLectureId < lectures.length) {
            const nextId = currentLectureId + 1;
            
            // Display visual notification
            const infoBar = document.getElementById("current-video-title");
            const originalTitle = infoBar.textContent;
            let secs = 3;
            
            infoBar.style.color = "#ff9f43";
            infoBar.textContent = `🎉 บทเรียนนี้จบแล้ว! กำลังเปลี่ยนไปบทเรียนถัดไปในอีก ${secs} วินาที...`;
            
            const countdownInterval = setInterval(() => {
                secs--;
                if (secs > 0) {
                    infoBar.textContent = `🎉 บทเรียนนี้จบแล้ว! กำลังเปลี่ยนไปบทเรียนถัดไปในอีก ${secs} วินาที...`;
                } else {
                    clearInterval(countdownInterval);
                }
            }, 1000);

            countdownTimer = setTimeout(() => {
                infoBar.style.color = "";
                onLectureClick(nextId);
            }, 3000);
        }
    }
}
