# Podklady pro advokáta

Statická případová aplikace (HTML/CSS/JS, bez build kroku).

## Lokální otevření

Otevřete `index.html` v prohlížeči, nebo spusťte lokální server:

```powershell
npx http-server . -p 4173
```

## Nasazení na Azure Static Web Apps (doporučeno)

Aplikace obsahuje citlivá data — `staticwebapp.config.json` proto vyžaduje
přihlášení (role `reader`). Přístup se uděluje pozvánkou v Azure Portalu:
Static Web App → Role management → Invite → e-mail advokáta, role `reader`.

### Varianta A: přes GitHub (automatické nasazení)

1. Nahrajte složku do GitHub repozitáře.
2. Azure Portal → Create → Static Web App → propojte repozitář.
3. Build Presets: `Custom`, App location: `/`, Output location: `/` (bez build příkazu).
4. Po nasazení pozvěte uživatele v Role management.

### Varianta B: přes SWA CLI (bez GitHubu)

```powershell
npm i -g @azure/static-web-apps-cli
swa deploy . --env production
```

> `vercel.json` je pozůstatek původního návrhu nasazení na Vercel a při
> nasazení na Azure se ignoruje (lze smazat).

## Upozornění

Obsah zahrnuje osobní údaje, mzdové údaje a důvěrné finanční informace.
Nenasazujte veřejně bez zapnuté ochrany rolí.
