# 3SA04
6135512037 นายภูมิพัฒน์  มาทน
3SA04 – React Native
1. ติดตั้งอุปกรณ์ดังนี้ ก่อนเริ่มทำ LAB
 
-	Chocolatey
-	Node.js
-	Yarn
-	Git
-	expo CLI
-	Visual Studio Code
-	Android Studio
 
หลังจากที่ได้ติดตั้ง Chocolatey ในเครื่องแล้ว สามารถติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน cmd

ในการติดตั้ง create-react-app CLI สามารถทำผ่านการใช้คำสั่ง yarn ผ่าน Cmd 
 yarn global add expo-cli
ติดตั้งโปรแกรม Expo ลงบนสมาร์ทโฟนที่ใช้ในการรันโปรแกรม
ต่อมาให้ ทำการพิมคำสั่งด้านล่างเพื่อสร้างโฟลเดอร์ Wt-app และ เข้าไปยัง wt-app
 expo init wt-app
 cd wt-app
เมื่อเข้ามาแล้ว พิม Yarn start จากนั้นตัวโปรแกรมจะรันหน้า บราวเซอร์ขึ้นมาแสดงผล QR Code แล้วจากนั้นนำสมาร์ทโฟนมาแสกน QR Code เพื่อให้โปรแกรม Expo 
ในสมาร์ทโฟนนั้นเชื่อมต่อ
เปิด Source Code ของโปรเจ็ค wt-app ด้วย Visual Studio Code หรือ Text Editor ที่ต้องการ แก้ไข App.js 

สังเกตผลลัพธ์ที่ได้บนโปรแกรม Expo ในสมาร์ทโฟน

สร้างโฟลเดอร์ components ในโปรเจ็ค แล้วสร้างไฟล์ Weather.js
คอมโพเนนต์ Weather รับ Props ชื่อ zipCode 
หลังจากน้นเรียกใช้คอมโพเนนต์ Weather และส่ง Props ที่ชื่อ zipCode เป็นค่า 90110

Components and Image Background
สร้างคอมโพเนนต์ Forecast ที่มีการใช้ props ดังต่อไปนี้ main, description และ temp
จากนั้นในไฟล์ Weather.js เลือกรูป background ที่เหมาะสม
กำหนด State โดยใช้ useState hook แล้วใช้เป็น props ส่งผ่านไปยังคอมโพเนนต์ Forecast ที่สร้างขึ้นมาใหม่
ให้ดาวน์โหลดรูปภาพพื้นหลังมาไว้ในโฟลเดอร์นอกสุดของโปรเจค โดยตั้งชื่อไฟล์ว่า bg.jpg

	Connect
เพิ่ม useEffect ลงไปในคอมโพเนนต์ Weather (ทำการ sign up แบบฟรีที่ https://home.openweathermap.org/users/sign_up  เพื่อรับ APPID)
ส่วนของไฟล์ Weather.js (ให้นำ api key ที่ได้จาก url ด้านบน มาแทนที่คำว่า YOUR_API_KEY)
	Router
Application ที่สมบูรณ์มักมีหน้าจอมากกว่า 1 หน้าจอ ในการสลับหน้าจอไปมา สามารถทำได้ผ่านการใช้ Navigation Library ซึ่งไลบรารีที่ถือเป็น Official จาก React คือ react-navigation
 expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
 yarn add @react-navigation/stack @react-navigation/native (สามารถติดตั้งใน Cmd ตามคำสั่งด้านบ)
เพิ่มคอมโพเนนต์ ZipCodeScreen ซึ่งเป็นหน้าจอสำหรับเลือกรหัสไปรษณีย์ (zip code) จากรายการที่กำหนดไว้และจะต้องกำหนด Style ให้เหมาะสม

ปรับ App.js ให้ render ผลลัพธ์จากไลบรารี react-navigation แทนการ render คอมโพเนนต์ Weather โดยตรง

Navigation & Route Parameter
ในการทำงานร่วมกันของแต่ละหน้าจอ  เราสามารถส่งผ่านค่าการทำงานได้โดยการใช้ Route Parameter
เพิ่มคอมโพเนนต์ WeatherScreen สำหรับหน้าจอแสดงคอมโพเนนต์ Weather
เพิ่ม Screen ลงใน App.js

ปรับ ZipItem ในไฟล์ ZipCodeScreen.js เพื่อสร้างลิงค์ไปยังหน้า Weather พร้อมส่งผ่าน Route Parameter
ส่วนของไฟล์ไฟล์ ZipCodeScreen.js
หลังจานั้นทำการตกแต่งส่วนประกอบต่างๆของงานให้สวยงาม
