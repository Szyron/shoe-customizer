# Shoe Customizer

A modern web application for customizing and ordering personalized shoes with real-time visualization.

## 🎨 Features

- **Interactive Shoe Customization**: Real-time shoe visualization with color picker
- **Step-by-step Guide**: Intuitive steps to customize each shoe part (sole, laces, top, middle, etc.)
- **Size Selection**: Easy-to-use size picker
- **Order Summary**: Clear overview of selected colors and size before ordering
- **Responsive Design**: Mobile-first responsive layout for all devices
- **Mini Preview**: Thumbnail view of the customized shoe
- **Reset Option**: Quick reset to default colors

## 📱 Responsive Design

- **Mobile**: Optimized for small screens with touch-friendly buttons
- **Tablet**: Adjusted layout for medium screens
- **Desktop**: Full-featured experience with side-by-side views

## 🛠️ Tech Stack

### Frontend
- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Component library built on Tailwind
- **React Toastify**: Toast notifications
- **ESLint**: Code quality

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework

## 📁 Project Structure

```
shoe-customizer/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── OrderContext.jsx      # Context for state management
│   │   │   ├── OrderForm.jsx         # Order form with customer details
│   │   │   ├── ShoeCard.jsx          # Main customization component
│   │   │   ├── ShoeSize.jsx          # Size selection
│   │   │   ├── ShoeView.jsx          # SVG shoe visualization
│   │   │   └── StepsCard.jsx         # Step indicator
│   │   ├── App.jsx                   # Main app component
│   │   ├── main.jsx                  # Entry point
│   │   ├── App.css                   # App styles
│   │   └── index.css                 # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── backend/
│   ├── server.js                     # Express server
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Szyron/shoe-customizer.git
   cd shoe-customizer
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

3. **Backend Setup**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

**Frontend (Development)**
```bash
cd frontend
npm run dev
```
The app will be available at `http://localhost:5173`

**Backend (Production)**
```bash
cd backend
npm start
```
The server runs on `https://shoe-customizer-production.up.railway.app`

## 📖 How to Use

1. **Select Shoe Parts**: Use the navigation buttons (« »)  to cycle through different shoe parts (sole, laces, top, middle, etc.)
2. **Choose Colors**: Click on the color options to customize each part
3. **Preview**: See real-time changes in the main view and mini thumbnail
4. **Select Size**: Choose your shoe size from the available options
5. **Review Order**: Check the Order Summary for your selected colors and size
6. **Place Order**: Fill in your personal details (name, surname, email, phone) and submit
7. **Reset**: Use the Reset button anytime to return to default white colors

## 🎨 Customizable Shoe Parts

- **Sole**: The bottom of the shoe
- **Middle Top**: Upper middle section
- **Top**: Upper shoe area
- **Middle Bottom**: Lower middle section
- **Middle Front**: Front middle section
- **Middle Back**: Back middle section
- **Mid First Polygon**: First decorative polygon
- **Mid Second Polygon**: Second decorative polygon
- **Shoe Lace**: Lace color

## 📞 Contact & Support

For issues or feature requests, please open an issue on the GitHub repository.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

Developed by [Szyron](https://github.com/Szyron)

---

**Happy customizing! 👟✨**
