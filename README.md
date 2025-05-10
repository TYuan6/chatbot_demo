# chatbot_demo


# UI mockup
┌──────────────────────────────────────────────┐
│ Navbar (top navigation bar)                  │
├──────┬───────────────────────────────────────┤
│Sidebar│ Main Content                         │
│      │ ┌───────────────────────────────────┐ │
│      │ │ /apps or /documents (scrollable)  │ │
│      │ └───────────────────────────────────┘ │
├──────┴───────────────────────────────────────┤
│ Floating Chat Toggle Button (bottom-right)   │
│ → On click: show ChatBot                     │
│  → Desktop: small window (bottom-right)      │
│  → Mobile: fullscreen takeover               │
└──────────────────────────────────────────────┘


# Folder Structure

src/
├── components/                  # Reusable UI components
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── ChatBot.jsx
│   └── ChatToggleButton.jsx
│
├── context/                    # Global React context
│   └── ChatContext.jsx
│
├── layouts/                    # Page layout
│   └── MainLayout.jsx
│
├── pages/                      # Route-based pages
│   ├── AppsPage.jsx
│   └── DocumentsPage.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── hooks/
│   └── useIsMobile.js
|
├── assets/                     # static assets
│   └── images/logo
│
├── App.jsx                     # App wrapper with providers
└── index.js                    # App entry point





# Chatbot functionality:
Conversation -> use a Mock websocket endpoint
Blur the background when chatbot pops up
