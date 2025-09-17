## Quick Summary:
This repo contains the completed tasks for the Data Integration Assignment. Below you’ll find exact setup/run commands and **detailed purpose notes** for every folder and important file so reviewers can quickly understand what each item does.

---

## Repository structure & purpose (file-by-file):
```
.
├── Task1/
│   ├── index.html           # Static greeting page (renders "Hello [Your Name]" or a welcome message)
│   └── message_display.png  # Screenshot demonstrating the final rendered static page
│
├── Task2/
│   ├── index.html           # Client-side form: collects a name and displays greeting using DOM manipulation (no backend)
│   └── display_greetings.png# Screenshot showing the greeting UI after submission
│
├── Task3&4/
│   ├── server.js            # Node + Express server that implements REST endpoint(s) (e.g., POST /greet)
│   ├── package.json         # npm metadata & scripts (dependencies and start script if present)
│   ├── package-lock.json    # Exact dependency tree for reproducible installs
│   ├── public/
│   │   └── index.html       # Frontend UI that calls the backend (fetch POST /greet) and shows greeting + reset behavior
│   └── screenshots/
│       ├── display_greetings.png  # Screenshot showing frontend receiving/surface the greeting from backend
│       └── reset_greetings.png    # Screenshot showing the state after using Reset (input cleared, message hidden)
│
├── Task5/
│   ├── index.html           # JSON validator (client-side): textarea + submit button that validates JSON and shows feedback
│   └── screenshots/
│       ├── valid_json.png   # Screenshot showing valid JSON success message
│       └── invalid_json.png # Screenshot showing invalid JSON error message
│
├── Task6/
│   ├── index.html           # JSON validator + Reset: same validator UI as Task5 with an added Reset button to clear input & result
│   └── screenshots/
│       ├── valid_json.png   # Screenshot showing valid JSON result
│       ├── invalid_json.png # Screenshot showing invalid JSON result
│       └── reset_json.png   # Screenshot demonstrating the UI after Reset (cleared textarea + cleared message)
│
├── Optional-Enhancement/    # Combined frontend + backend enhancement (more polished UI + both greeting + JSON validator)
│   ├── server.js            # Node + Express server used to serve the combined UI and API endpoints
│   ├── package.json         # npm metadata & scripts for Optional-Enhancement
│   ├── package-lock.json    # Exact dependency tree for reproducible installs
│   ├── public/
│   │   └── index.html       # All-in-one frontend: greeting form + JSON validator, each with Submit and Reset controls
│   └── screenshots/
│       ├── display_greetings.png  # Greeting success screenshot 
│       ├── greetings_reset.png    # Greeting reset screenshot 
│       ├── valid_json.png         # JSON validator success screenshot 
│       ├── invalid_json.png       # JSON validator failure screenshot 
│       └── json_reset.png         # JSON validator reset screenshot 
│
├── .gitignore               
├── PARAS-v5.6.pdf           # My Resume
└── README.md                # This readme (explain how to run everything + descriptions)
```

---

## Where to run `npm install` and what it does:
- **Task3&4** → run `npm install` inside the `Task3&4` folder. This installs dependencies used by `Task3&4/server.js`. After install, run `node server.js` (or `npm start` if `package.json` defines `start`).
- **Optional-Enhancement** → run `npm install` inside `Optional-Enhancement` folder. This installs dependencies used by `Optional-Enhancement/server.js`. Then run `node server.js` (or `npm start` if configured).
- Do **NOT** run `npm install` at the repo root unless you intend to install at root; dependency folders are contained per-task.

**Commands (example):**
```bash
# Task3&4
cd "Task3&4"
npm install
node server.js           # starts server (default port: 3000)

# Optional-Enhancement
cd "../Optional-Enhancement"
npm install
node server.js           # starts server (default port: 3000 or configured port)
```

---

## Exact run instructions (summary)
- Static tasks (Task1, Task2, Task5, Task6): open `index.html` directly or serve them with a tiny static server (recommended for consistent behavior):
```bash
# from each static task directory:
python3 -m http.server 8001  # Task1 (open http://localhost:8001/index.html)
python3 -m http.server 8002  # Task2 (open http://localhost:8002/index.html)
python3 -m http.server 8005  # Task5 (open http://localhost:8005/index.html)
python3 -m http.server 8006  # Task6 (open http://localhost:8006/index.html)
```

- Node tasks (Task3&4, Optional-Enhancement):
```bash
cd "Task3&4"
npm install
node server.js    # open http://localhost:3000 (or configured port)
```


---

## API reference (Task3&4 & Optional-Enhancement)
- `POST /greet` — Accepts JSON body `{ "name": "Paras" }` and returns `{ "message": "Hello Paras" }`
- If other endpoints exist in `server.js`, they are documented at the top of that file. Check `server.js` comments for implementation details and default port.

---
👨‍💻 Developed by **[Paras Saxena](https://saxenaparas.vercel.app/)**

