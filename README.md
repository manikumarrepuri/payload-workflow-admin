# Payload Workflow Admin Demo

This is a demo Payload CMS project using the custom `payload-plugin-workflow`.

## 📦 Features

- Articles collection with workflow publishing logic
- User roles (admin/editor)
- Email & Microsoft Teams notifications
- Workflow dashboard & progress indicators

## 🛠 Setup

```bash
git clone https://github.com/manikumarrepuri/payload-workflow-admin.git
cd payload-workflow-admin
npm install
cp .env.example .env
npm run dev
```

Login at `http://localhost:3000/admin` with a user you create in MongoDB (with `admin` role).
