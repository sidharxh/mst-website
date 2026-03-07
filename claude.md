NOTE: This was the original project design and current version is lacking most of the architecture or features discussed here

Here is the complete `CLAUDE.md` file for the MST website project:

***

```markdown
# CLAUDE.md — Mithila Shail Tech Solutions Website
# Project Intelligence & Context File
# Last Updated: March 2026

---

## PROJECT OVERVIEW

**Project Name:** Mithila Shail Tech Solutions — Company Website + Client Portal  
**Type:** Static Frontend + Serverless Backend (Google Apps Script)  
**Architecture:** No traditional backend — fully client-side + Google ecosystem  
**Primary Goal:** Service enquiries + AI-powered client maintenance query portal  

---

## COMPANY DETAILS

| Field | Value |
|---|---|
| Company Name | Mithila Shail Tech Solutions |
| Short Name | MST |
| Tagline | "Safe Way is the Best Way" |
| Founded | 2018–19 |
| Founder | Umesh Kumar Singh |
| Business Type | Electro-Mechanical Consultant, Engineers & Contractors |
| Employees | 13 |
| Location | C-473/c, Indira Nagar, Lucknow (UP) – 226016 |
| Phone | +91-9452062975 |
| Email | Mithilashailtech@gmail.com |
| Brand Colors | Primary: #FF6B00 (Orange), Secondary: #1A1A1A (Dark/Black) |
| Logo | /assets/images/logo.png |

---

## ARCHITECTURE OVERVIEW

```
Visitor Browser
    │
    ├── WebLLM (AI runs locally on visitor GPU — zero cost)
    ├── Reads Google Sheets via Sheets API (company data as LLM context)
    ├── Logs all events → Google Apps Script endpoint (doPost)
    └── Admin/Portal pages fetch monitoring data from Sheets

Google Apps Script (Serverless Pseudo-Backend)
    ├── Handles all write operations to Sheets
    ├── Client PIN authentication
    ├── WhatsApp notifications (CallMeBot API)
    ├── Email notifications (Apps Script MailApp)
    └── Client maintenance data queries

Google Sheets (Database)
    └── All structured data storage

Google Docs (CMS)
    └── Rich text content (About, Mission, Policies)
```

---

## FILE STRUCTURE

```
mst-website/
├── index.html                        # Main single-page website
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── favicon.ico
│   │   └── gallery/                  # Project execution photos
│   └── docs/
│       └── MST-Portfolio.pdf         # Downloadable company brochure
├── css/
│   ├── main.css                      # Global styles + CSS variables
│   ├── components/
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── projects.css
│   │   ├── chatbot.css
│   │   ├── enquiry-form.css
│   │   ├── footer.css
│   │   └── loader.css                # WebLLM model loading screen
│   └── pages/
│       ├── portal.css
│       └── admin.css
├── js/
│   ├── config.js                     # 🔑 ALL keys and IDs live here only
│   ├── core/
│   │   ├── db.js                     # Sheets API read functions
│   │   ├── logger.js                 # Event logging to Sheets
│   │   ├── session.js                # Session ID + visitor fingerprint
│   │   └── router.js                 # Client-side routing
│   ├── ai/
│   │   ├── webllm-engine.js          # WebLLM init + chat engine
│   │   ├── context-builder.js        # Builds LLM system prompt from Sheets data
│   │   ├── chatbot-ui.js             # Chat widget UI
│   │   └── portal-ai.js             # Maintenance query AI for client portal
│   ├── components/
│   │   ├── navbar.js
│   │   ├── hero.js
│   │   ├── services.js               # Renders services from Sheets
│   │   ├── projects.js               # Renders executed projects from Sheets
│   │   ├── testimonials.js
│   │   ├── enquiry-form.js           # Form submit → GAS → Sheets
│   │   ├── whatsapp-btn.js           # Floating WhatsApp CTA
│   │   └── footer.js
│   └── pages/
│       ├── portal.js                 # Client portal logic
│       └── admin.js                  # Admin dashboard logic
├── pages/
│   ├── portal.html                   # Client Maintenance Query Portal
│   └── admin.html                    # Admin Monitoring Dashboard
└── gas/                              # Google Apps Script (deploy at script.google.com)
    ├── Code.gs                       # doPost() router + doGet() handler
    ├── Logger.gs                     # Logs Visitors, ChatLogs, Leads, Interactions
    ├── ClientData.gs                 # Client maintenance record CRUD
    ├── Notifier.gs                   # WhatsApp + Email alerts
    └── Auth.gs                       # Client PIN verification
```

---

## GOOGLE SHEETS DATABASE STRUCTURE

**Sheet Name:** MST Master DB

| Tab Name | Purpose | Who Writes |
|---|---|---|
| `Settings` | Company info, contact, hours | MST team manually |
| `Services` | All service listings with descriptions | MST team manually |
| `FAQ` | Questions + answers for AI context | MST team manually |
| `Team` | Staff names, roles, bios | MST team manually |
| `Projects` | Executed projects portfolio | MST team manually |
| `Clients` | Client list with PIN + assigned sheet | MST team manually |
| `Leads` | Enquiry form submissions | Auto via GAS |
| `Visitors` | Page visit logs | Auto via GAS |
| `ChatLogs` | Full AI chat transcripts | Auto via GAS |
| `Interactions` | Button/link click tracking | Auto via GAS |
| `Sessions` | Time-on-site per visitor | Auto via GAS |
| `CallbackRequests` | "Call me back" requests from portal | Auto via GAS |

**Client Maintenance Sheets** (one per client):
- Named: `Client_LG`, `Client_Hilti`, `Client_SchenckRotec` etc.
- Columns: `Date | EquipmentID | Type | Description | Engineer | Status | NextDue`

---

## SERVICES CATALOGUE

### 1. Electrical Supply
- Transformers, VCBs, Control Panels, Switchgears
- HT/LT Power Cables (XLPE, ACSR, ABC)
- Cable Tray & Raceway
- LED & Industrial Lighting
- Electronic Appliances (AC, Refrigerator, Computer, Printer)

### 2. HT Electrical Services (up to 33KV)
- High Tension Line Work
- Overhead/Underground feeder lines
- Power Transformer / VCB / HT Panel / Metering Panel
- HT Cable Joints, H-Pole, G.O Switch
- Chemical/Plate Earthing, GI/Copper Strip

### 3. LT Electrical Services
- LT / MCC / PCC / HVAC / Fire / Lighting Panels
- Bus Bar Trunking, Bus Duct, Rising Mains
- Cable Management Systems
- Illumination Management System
- Domestic & Industrial Solar Systems
- Thermography-based maintenance

### 4. Turnkey Projects
- Complete HT/LT Electrical end-to-end
- Fire Fighting Systems
- Fabrication Work
- Pipeline Engineering

### 5. AMC (Annual Maintenance Contracts)
- Comprehensive & Non-Comprehensive AMC
- Preventive Maintenance Services
- Breakdown Maintenance Services
- Transformer Maintenance
- Thermography-based equipment maintenance

### 6. AI Monitoring Platform (USP)
- Client-facing portal for maintenance query
- Natural language queries on their own equipment data
- Monthly reports via AI conversation
- "Call me back" escalation when AI cannot resolve

---

## USER TYPES

### 1. General Visitor (Public)
- Loginless — no signup required
- Browses services, reads about MST
- Chats with AI (WebLLM) about services
- Submits enquiry form
- All actions silently logged to Sheets

### 2. Existing MST Client (Portal User)
- Authenticated via **4-digit PIN** (no username)
- PIN verified by Apps Script (`Auth.gs`)
- Sees only their own maintenance data
- Queries AI about their equipment history
- Can request a callback from MST team
- Gets unique portal link: `yoursite.com/pages/portal.html?client=CLIENT_ID`

### 3. Admin (MST Owner/Team)
- Access via secret URL: `yoursite.com/pages/admin.html?key=ADMIN_SECRET`
- Loginless — URL obscurity is the security layer
- Views all Sheets tabs as live dashboard
- Sees visitor counts, chat transcripts, leads, interactions
- Auto-refreshes every 60 seconds

---

## AI CONFIGURATION

**Engine:** WebLLM (`@mlc-ai/web-llm`)  
**Model:** `Llama-3.2-3B-Instruct-q4f32_1-MLC` (default, ~2GB download)  
**Runs on:** Visitor's browser via WebGPU  
**Fallback:** If WebGPU not supported → show "Call us" button  
**Languages:** English + Hindi (system prompt includes both)  
**Tone:** Professional but friendly  
**Context Source:** `Settings` + `Services` + `FAQ` tabs fetched fresh on each session  

**System Prompt Template:**
```
You are an AI assistant for Mithila Shail Tech Solutions (MST), 
an electro-mechanical contractor based in Lucknow, India.
Tagline: "Safe Way is the Best Way"

Use the following company data to answer visitor questions:
[CONTEXT FROM SHEETS INJECTED HERE]

Rules:
- Answer in the same language the user writes in (English or Hindi)
- For pricing always say "Request a Quote — our team will contact you"
- If user wants to enquire, collect their Name and Phone number
- If you cannot answer, say "Our team will call you back shortly"
- Never make up technical specifications not in the context
```

---

## NOTIFICATION SYSTEM

| Trigger | Channel | Recipient |
|---|---|---|
| New enquiry form submission | Email + WhatsApp | MST owner |
| New chat lead (name+phone collected) | WhatsApp | MST owner |
| Client portal callback request | Email + WhatsApp | MST owner |
| Daily visitor summary (9AM) | Email | MST owner |

**WhatsApp:** CallMeBot API (free)  
**Email:** Google Apps Script `MailApp.sendEmail()`  

---

## CONFIG.JS VARIABLES (fill before coding)

```javascript
const CONFIG = {
  SHEETS_API_KEY: "",          // Google Cloud → Credentials → API Key
  SHEET_ID: "",                // Google Sheets URL → long ID string
  DOC_ID: "",                  // Google Docs URL → long ID string
  APPS_SCRIPT_URL: "",         // script.google.com → Deploy → Web App URL
  ADMIN_SECRET_KEY: "",        // Your chosen secret e.g. "MST2026ADMIN"
  WHATSAPP_NUMBER: "",         // +919452062975 (with country code, no +)
  CALLMEBOT_API_KEY: "",       // From CallMeBot WhatsApp setup
  COMPANY_PHONE: "+91-9452062975",
  COMPANY_EMAIL: "Mithilashailtech@gmail.com",
  COMPANY_WHATSAPP: "919452062975",
};
```

---

## KEY CONSTRAINTS & RULES

1. **Never use a paid backend** — all server logic goes in GAS only
2. **Never hardcode keys** in any file other than `config.js`
3. **config.js must be in .gitignore** — never commit API keys to GitHub
4. **All Sheets writes go through GAS** — never use Sheets API directly for writes
5. **All Sheets reads use API key** — fast, no auth required for public sheet data
6. **WebLLM runs in a Web Worker** — never block the main UI thread
7. **Every user action must be logged** — visitor, click, chat, form, portal query
8. **Admin page must fake a 404** if wrong key is provided
9. **Client portal must work on mobile** — most industrial clients use phones
10. **No jQuery** — vanilla JS only to keep it lightweight

---

## EXECUTED PROJECTS (for portfolio section)

| Client | Project | Location | Value |
|---|---|---|---|
| LG Electronics | Supply of Cable Tray & Raceway | Greater Noida | ₹95.40L |
| LG Electronics | Supply & Installation of Control Panel | Greater Noida | ₹106.50L |
| Schenk-Rotec | Thermography-based Panel Maintenance | Noida | ₹13.50L |
| Hilti | AC/DC Cable Laying & 250KW Solar System | Lucknow | ₹15.40L |
| Schenk-Rotec | Supply & Installation of 20 Dock Panels | Greater Noida | ₹19.00L |
| LG Electronics | Overhauling of 8 OLTC Transformers | Noida | ₹14.60L |
| LG Electronics | Focus Lights & Street Lights | Noida | ₹7.40L |
| LG Electronics | Motorised Potentiometers & Wireless Call Bell | Noida | ₹3.60L |

---

## DEPLOYMENT CHECKLIST

- [ ] Google Cloud project created
- [ ] Sheets API enabled
- [ ] Docs API enabled  
- [ ] API Key created & restricted
- [ ] Master Google Sheet created with all tabs
- [ ] Google Doc created with company content
- [ ] Apps Script project created & deployed
- [ ] All IDs/keys filled in `config.js`
- [ ] `config.js` added to `.gitignore`
- [ ] GitHub repo created
- [ ] GitHub Pages enabled
- [ ] Custom domain pointed (optional)
- [ ] CallMeBot WhatsApp API key obtained
- [ ] Admin URL tested
- [ ] WebLLM model loads successfully on Chrome

---

## RUNNING COSTS

All Google services used are on permanent free tier.  
WebLLM inference cost = ₹0 (runs on visitor's device).

---
*This file should be kept updated as the project evolves.*
*Do not share publicly — contains project architecture details.*
```
***

This `CLAUDE.md` is your **single source of truth** for the entire project. Any AI assistant, new developer, or team member can read this one file and instantly understand the full system. Save it as `CLAUDE.md` in the root of your `mst-website/` folder.