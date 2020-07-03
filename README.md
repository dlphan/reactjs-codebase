# Hướng dẫn cài đặt
1. Install dependencies
Chạy lệnh ```npm install```
2. Cài extension Eslint vào VSCode (nếu chưa có)

# Hướng dẫn sử dụng
Cần xác định cổng (port) để chạy dev server cho react app và địa chỉ của backend

Các bạn tham khảo port range của mình tại file PJ Analytic FK tại [đây](https://docs.google.com/spreadsheets/d/1nB0rykJk3O-KErC2MbGuUwE8byurEoc8PU4yVW_y_yc/edit#gid=0)

VD: port chạy react-app của tôi là 11011 và server chạy ở port 11015 thì có địa chỉ là ```http://devcloud1.digihcs.com:11015/graphql```

Sửa file .env tương ứng rồi sử dụng lệnh ```npm start```
