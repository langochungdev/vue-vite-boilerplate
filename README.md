```markdown
# Vue Vite Boilerplate

Boilerplate cho dự án **Vue 3 + Vite** với cấu trúc chuẩn, tích hợp sẵn **Pinia, Vue Router, Axios, i18n, ESLint + Prettier**.  
Hỗ trợ chạy trong **Dev Container (Docker)** để đảm bảo môi trường đồng nhất.

## ⚙️ Tech stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/) (state management)
- [Vue Router](https://router.vuejs.org/)
- [Vue I18n](https://vue-i18n.intlify.dev/) (đa ngôn ngữ)
- [Axios](https://axios-http.com/) (HTTP client)
- [SockJS + STOMP.js](https://stomp-js.github.io/) (WebSocket)
- [Bootstrap 5](https://getbootstrap.com/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 📂 Cấu trúc thư mục
```
src/
│
├─ app/ # Core-level (setup toàn cục)
│ ├─ router/ # Vue Router + guards
│ ├─ store/ # Global store (Pinia)
│ ├─ i18n/ # Đa ngôn ngữ
│ ├─ config/ # Config (axios, socket)
│ ├─ styles/ # Style toàn cục
│ └─ layouts/ # Layouts (MainLayout, AuthLayout)
│
├─ assets/ # Hình ảnh, icon, font
├─ features/ # Tổ chức theo feature (auth, chat, dashboard, ...)
│ ├─ components/ # UI component của feature
│ ├─ pages/ # Page cho router
│ ├─ composables/ # logic tái sử dụng (useAuth, useChat) cho component gọi
│ ├─ utils/ # hàm tiện ích thuần túy (formatDate, debounce)
│ ├─ constants/ # hằng số toàn cục (API_URL, ROLES)
│ ├─ services/ # gọi API/socket, không giữ state
│ ├─ store/ # Pinia quản lý state, gọi service để fetch/update
│ ├─ guards/ # router guard, chặn hoặc redirect theo auth/role trước khi vào page
│ └─ index.js # barrel export để import tiện từ feature
│
├─ shared/ # Dùng chung giữa nhiều feature
│ ├─ components/ # UI component dùng chung (Button, Modal, Table)
│ ├─ composables/ # Composables dùng chung (useFetch, usePagination)
│ ├─ utils/ # Hàm tiện ích (formatDate, debounce)
│ └─ constants/ # Hằng số toàn cục (API endpoints, roles)
│
├─ App.vue
└─ main.js
````


## 🚀 Cách chạy

### 1. Local
npm install
npm run dev
Mặc định chạy tại: [http://localhost:5173](http://localhost:5173)

### 2. Docker (Dev Container)
Repo đã cấu hình sẵn **Dev Container**.
Chỉ cần mở project bằng **VSCode + Dev Containers extension**:


## 📦 Danh sách lệnh cài thư viện
### Dependencies

```bash
npm install vue@^3.5.18 \
  vue-router@^4.5.1 \
  pinia@^3.0.3 \
  vue-i18n@^11.1.11 \
  axios@^1.11.0 \
  bootstrap@^5.3.7 \
  sockjs-client@^1.6.1 \
  @stomp/stompjs@^7.1.1
```

### DevDependencies

```bash
npm install -D vite@^7.1.2 \
  @vitejs/plugin-vue@^6.0.1 \
  eslint@^9.33.0 \
  eslint-plugin-vue@^10.4.0 \
  vue-eslint-parser@^10.2.0 \
  eslint-plugin-import@^2.32.0 \
  eslint-import-resolver-alias@^1.1.2 \
  eslint-import-resolver-node@^0.3.9 \
  eslint-config-prettier@^10.1.8 \
  @vue/eslint-config-prettier@^10.2.0
```

## 🧩 VSCode Extensions

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- Path Intellisense (`christian-kohler.path-intellisense`)

## 📖 Ghi chú

composables/ : logic tái sử dụng (useAuth, useChat) cho component gọi.  
utils/ : hàm tiện ích thuần túy (formatDate, debounce).  
constants/ : hằng số toàn cục (API_URL, ROLES).  
index.js : barrel export để import tiện từ feature.  
services/ : gọi API/socket, không giữ state.  
store/ : Pinia quản lý state, gọi service để fetch/update.  
guards/ : router guard, chặn hoặc redirect theo auth/role trước khi vào page.
